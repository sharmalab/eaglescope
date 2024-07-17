import React, { PureComponent } from 'react';
import {
  AutoSizer, Column, Table, SortDirection,
} from 'react-virtualized';
import Draggable from 'react-draggable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp, faSort, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import arrayMove from 'array-move';
import PropTypes from 'prop-types';
import VisDataTableControl from './VisDataTableControl/VisDataTableControl';
import './VisDataTable.css';

const cellRenderer = (d, f, bg) => {
  let urlElt;
  bg = bg || '';
  if (f.link && (f.link.url || f.link.field)) {
    const urlbase = f.link.url || '';
    urlElt = (
      <a target="_blank" href={urlbase + d.rowData[f.link.field]}>
        {d.cellData}
      </a>
    );
  } else if (f.link && f.link.url) {
    urlElt = (
      <a target="_blank" href={f.link.url}>
        {d.cellData}
      </a>
    );
  } else {
    // urlElt = d.cellData;
    urlElt = Array.isArray(d.cellData) ? d.cellData.join(', ') : d.cellData;
  }
  return (
    <React.Fragment key={f.dataKey}>
      <div className="ReactVirtualized__Table__headerTruncatedText" title={d.cellData} style={{ backgroundColor: bg }}>
        {urlElt}
      </div>
    </React.Fragment>
  );
};

const rowClassName = ({ index }) => {
  if (index < 0) {
    return 'headerRow';
  }
  return index % 2 === 0 ? 'evenRow' : 'oddRow';
};

export default class SelectDataTable extends PureComponent {
  constructor(props) {
    console.log("constructed, showing props")
    console.log(props)
    super(props);
    const fWidth = 1 / this.props.fields.length;
    let fields = this.props.fields.map((f) => ({ ...f, width: fWidth, isShow: true }));
    //fields = fields.unshift({width: 50, isShow: true})
    this.state = {
      fields,
      width: null,
      sortBy: null,
      sortDirection: null,
      selected: [],
      marked: []
    };
    this.containerRef = React.createRef();
    this.autoSizer = React.createRef();
    this.headerRenderer = this.headerRenderer.bind(this);
    this.resizeRow = this.resizeRow.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onSortEnd = this.onSortEnd.bind(this);
    this.onCheckChangedHandler = this.onCheckChangedHandler.bind(this);
    this.onAllCheckHandler = this.onAllCheckHandler.bind(this);
    this.sortHandler = this.sortHandler.bind(this);
    this.getSortData = this.getSortData.bind(this);
  }

  onResize({ width }) {
    this.setState({ width });
  }

  onSortEnd({ oldIndex, newIndex }) {
    this.setState(({ fields }) => ({
      fields: arrayMove(fields, oldIndex, newIndex),
    }));
  }

  onCheckChangedHandler(e) {
    const { value } = e.target;
    const { checked } = e.target;
    this.setState(({ fields }) => ({
      fields: fields.map((f) => {
        f.isShow = f.dataKey === value ? checked : f.isShow;
        return { ...f };
      }),
    }));
  }

  onAllCheckHandler() {
    this.setState(({ fields }) => ({
      fields: fields.map((f) => {
        f.isShow = true;
        return { ...f };
      }),
    }));
  }

  downloadSelected() {
    let downloadLimit = this.props.configProps.downloadLimit || 15;
    let data = this.state.selected
    if (data.length > downloadLimit){
      data = data.slice(0, downloadLimit);
      alert("Limiting download to first " + downloadLimit)
    }
    for (let x of data) {
      this.setState(prevState => {
        if (prevState.marked.indexOf(x) === -1) {
          return {
            marked: [...prevState.marked, x]
          };
        }
        return null;
      });
    }
    this.setState({"selected":[]});

    console.log(data)
    console.log("about to try?")
    console.log(this.props.configProps)
    // trigger downloads from pathdb
    for (let record of data){
        console.log("inside loop")
        console.log("trying to get metadata for slide with pathdb id", record)
        fetch("/node/" + record + "?_format=json", {mode: "cors"}).then(x=>x.json()).then(x=>{ 
          console.log("looking at wsi url: ", x['field_wsiimage'][0]['url'])
          let slide_url = x['field_wsiimage'][0]['url']
          if (window.location.protocol === "https:") {
            slide_url = slide_url.replace(/^http:\/\//i, 'https://');
          }
          const problematicExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.webp', '.svg', '.pdf'];
          function hasProblematicExtension(url) {
            return problematicExtensions.some(ext => url.toLowerCase().endsWith(ext));
          }
          if (hasProblematicExtension(slide_url)){
            console.log("using anchor method")
            const filename = slide_url.substring(slide_url.lastIndexOf('/') + 1);
            const a = document.createElement('a');
            a.href = slide_url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          } else {
            console.log("using iframe method")
            const iframe = document.createElement("iframe");
            iframe.setAttribute("sandbox", "allow-downloads allow-scripts");
            iframe.src = slide_url;
            iframe.setAttribute("style", "display: none");
            document.body.appendChild(iframe);
          }
        }).catch(console.error)
    }
  }

  getSortData() {
    const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
    const { data, filterData, filters } = this.props;
    const { sortBy, sortDirection } = this.state;
    const currentData = filters.length > 0 ? filterData : data;

    return sortBy && sortDirection
      ? currentData.sort((a, b) => {
        const first = sortDirection === SortDirection.ASC ? a : b;
        const second = sortDirection === SortDirection.ASC ? b : a;
        return collator.compare(first[sortBy], second[sortBy]);
      })
      : currentData;
  }

  resizeRow({ dataKey, deltaX }) {
    const prevFields = this.state.fields;
    const idx = prevFields.findIndex((f) => f.dataKey === dataKey);

    const percentDelta = deltaX / this.state.width;
    prevFields[idx].width += percentDelta;

    if (idx < prevFields.length - 1) {
      prevFields[idx + 1].width = prevFields[idx + 1].width - percentDelta;
    }
    this.setState({ fields: [...prevFields] });
  }

  headerRenderer({
    dataKey, label, sortBy, sortDirection,
  }) {
    return (
      <React.Fragment key={dataKey}>
        <div className="ReactVirtualized__Table__headerTruncatedText" title={label}>
          {label}
        </div>
        {}
        <div>
          {sortBy === dataKey ? (
            <FontAwesomeIcon icon={sortDirection === SortDirection.DESC ? faSortDown : faSortUp} />
          ) : (
            <FontAwesomeIcon icon={faSort} />
          )}
        </div>
        <Draggable
          axis="x"
          defaultClassName="DragHandle"
          defaultClassNameDragging="DragHandleActive"
          onDrag={(event, { deltaX }) => {
            this.resizeRow({ dataKey, deltaX });
          }}
          onStart={(event, { deltaX }) => {
            this.setState({"isResize": true});
          }}
          onStop={(event, { deltaX }) => {
            setTimeout(() => {
              this.setState({"isResize": false})
            }, 300);  // 300 milliseconds delay
          }}
          position={{ x: 0 }}
          zIndex={999}
        >
          <span className="DragHandleIcon" onMouseDown={(event) => event.stopPropagation()}>⋮</span>
        </Draggable>
      </React.Fragment>
    );
  }

  selectionHandler(isChecked, rowData){
    let downloadLimit = this.props.configProps.downloadLimit || 15;
    console.log("chexmix", isChecked, rowData)
    const { selected } = this.state;
    console.log("state selected before change", selected)
    let item = rowData[this.props.configProps.downloadField];
    const existingIndex = selected.indexOf(item);
    // if check is true, add to state
    if (isChecked && existingIndex === -1) {
      this.setState(prevState => ({
        selected: [...prevState.selected, item]
      }));
    }
      // if check is false, remove from state
    if (!isChecked && existingIndex !== -1) {
      this.setState(prevState => ({
        selected: prevState.selected.filter(x => x !== item)
      }));
    }
    if (this.state.selected.length > downloadLimit - 2) {
      alert("Warning: We limit to at most " + downloadLimit + " concurrent downloads.")
    }
  }

  sortHandler({ sortBy, sortDirection }) {

    if (!this.state.isResize){
      this.setState({ sortBy, sortDirection });
    }
  }

  render() {
    const { fields, sortBy, sortDirection, selected, marked } = this.state;
    const finalData = this.getSortData();
    return (
      <div ref={this.containerRef} style={{ width: '100%', height: '100%' }}>
        <VisDataTableControl
          list={fields}
          onSortEnd={this.onSortEnd}
          onCheckChanged={this.onCheckChangedHandler}
          onAllCheck={this.onAllCheckHandler}
        />
        <AutoSizer ref={this.autoSizer} onResize={this.onResize}>
          {({ width, height }) => (
            <Table
              width={width}
              height={height}
              headerHeight={25}
              rowHeight={20}
              rowClassName={rowClassName}
              rowCount={finalData.length}
              rowGetter={({ index }) => finalData[index]}
              sort={this.sortHandler}
              sortBy={sortBy}
              sortDirection={sortDirection}
            >
              <Column
                key="checkbox"
                dataKey="checkbox"
                width={50} // Adjust width as needed
                label="↓"
                headerRenderer={() => <div title="Download Selected Files" onClick={(e) => { this.downloadSelected() }}> <FontAwesomeIcon icon={faFileArrowDown} style={{ height: '1.8em', color: '#1b7d00' }} /></div>}
                cellRenderer={({ rowData }) => (
                  <input
                    type="checkbox"
                    checked={selected.includes(rowData[this.props.configProps.downloadField])}
                    onChange={(e) => this.selectionHandler(e.target.checked, rowData)}
                  />
                )}
              />
              {fields
                .map((f) => (
                  <Column
                    key={f.dataKey}
                    cellDataGetter={({ rowData }) => rowData[f.dataKey]}
                    dataKey={f.dataKey}
                    label={f.label}
                    width={width * f.width}
                    headerRenderer={this.headerRenderer}
                    cellRenderer={(d) => {
                      let color = marked.includes(d.rowData[this.props.configProps.downloadField])? 'lightGray': '';
                      return cellRenderer(d, f, color)
                    }}
                  />
                ))}
            </Table>
          )}
        </AutoSizer>
      </div>
    );
  }
}

SelectDataTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  filterData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fields: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  filters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
