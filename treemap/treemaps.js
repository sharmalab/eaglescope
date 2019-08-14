

const terms = [];
let fieldz = [];

const selections = {
  "location": [],
  "cancer_type": [],
  "image_types": [],
  "supperting_data": [],
  "status": [],
  "access": []
}
// treemaps.js
// inference ingestion
const stacked_data = [];


function createFlexBox(tagName, direction = 'row') {
  const elt = document.createElement(tagName);
  elt.style.display = 'flex';
  elt.style.flexDirection = direction == 'row' ? 'row' : 'column';
  elt.style.boxSizing = 'border-box';
  elt.style.position = 'relative';
  elt.style.outline = 'none';
  return elt;
}


function createHeader(opt, search = true, reset = false) {
  const title = opt.name;
  const items = opt.items;
  let hidden = '';
  if (opt.items < 4) hidden = 'hidden'
  const div = createFlexBox('div');
  div.classList.add('facet-header');
  const htmlText = `<span style="cursor: pointer;">
			<i class=" fa fa-angle-down" style="width:15px;text-align:center;"></i>
			${title}
		</span>
		<div>
			<i class="fa fa-search ${hidden}" ></i>

			<a style="display: none;">
				<i class="fa fa-undo"></i>
			</a>
		</div>`
  div.innerHTML = htmlText;
  return div;
}
function createFooter(items) {
  const div = document.createElement('div');
  div.classList.add('facet-footer');
  const htmlText = `<a> ${items.length - 4}&nbsp;More...</a>`
  div.innerHTML = htmlText;
  return div;
}

function createTerm(term) {


  // create panel
  const elt = document.createElement('div');
  elt.classList.add('term');

  // create head
  const head = document.createElement('a');
  head.classList.add('term-head');
  const chk = document.createElement('input');
  chk.type = 'checkbox';

  if (typeof term != 'string') {
    chk.value = term.name;
    chk.id = term.name;

    const label = document.createElement('label');
    label.textContent = term.name;
    label.htmlFor = term.name;
    head.appendChild(chk)
    head.appendChild(label)

    // create tial
    const tail = document.createElement('a');
    tail.classList.add('term-tail');
    tail.textContent = term.sum;
    elt.appendChild(head)
    elt.appendChild(tail)
  } else {
    chk.value = term;
    chk.id = term;

    const label = document.createElement('label');
    label.textContent = term;
    label.htmlFor = term;
    head.appendChild(chk)
    head.appendChild(label)
    elt.appendChild(head)
  }


  // return term
  return elt;

}
function createSearch() {
  const search_panel = document.createElement('div')
  search_panel.classList.add('terms-search');
  search_panel.classList.add('hidden');
  const search = document.createElement('input');
  search.type = 'text';
  search.classList.add('terms-search-input');
  const close = document.createElement('i');
  close.classList.add('fa');
  close.classList.add('fa-close');
  close.classList.add('close');
  close.classList.add('hidden');


  search_panel.appendChild(search);
  search_panel.appendChild(close);

  return search_panel;
}


function createAggregations(terms) {
  const panel = document.createElement('div');
  panel.classList.add('terms-aggregation');

  panel.appendChild(createSearch());
  const tip = document.createElement('span');
  tip.classList.add('tip')
  panel.appendChild(tip);
  terms.forEach((term, idx) => {
    const _elt = createTerm(term)
    if (idx >= 4) _elt.classList.add('hidden');
    panel.appendChild(_elt);
  });

  return panel;

}

function removeClassForList(list, className) {
  list.forEach(i => i.classList.remove(className));
}

function addClassForList(list, className) {
  list.forEach(i => i.classList.add(className));
}

function displayMatches(e) { // this -> element
  const text_tip = this.querySelector('.terms-aggregation span.tip');
  const footer = this.querySelector('.terms-aggregation .facet-footer');
  const list = [...this.querySelectorAll('.terms-aggregation .term')];
  const clean_icon = this.querySelector('.terms-aggregation .terms-search i.fa.fa-close');
  const value = e.target.value;
  // e.target.value = value;
  if (value) { // has text
    // show close/clean icon
    clean_icon.classList.remove('hidden');

    const __list = findMatches(value, list);
    if (__list.length == 0)
      text_tip.textContent = 'No Matching Items';
    else
      text_tip.textContent = '';
    // hidden all
    addClassForList(list, 'hidden');

    // show matching item
    removeClassForList(__list, 'hidden');

    // hidden footer
    footer.classList.add('hidden')


  } else { // no text
    text_tip.textContent = '';
    clean_icon.classList.add('hidden');
    removeClassForList(list, 'hidden');

    if (this.querySelector('.terms-aggregation').dataset['isMore'] == 'true') {
      list.forEach((t, idx) => {
        if (idx >= 4) t.classList.add('hidden');
      });
    } else {
      list.forEach((t, idx) => {
        t.classList.remove('hidden');
      });
    }

    // show footer
    footer.classList.remove('hidden')

  }
  //console.log(list);
}

function findMatches(wordToMatch, list) {
  return list.filter(item => {
    const item_name = item.querySelector('.term-head input[type=checkbox]').value;
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return item_name.match(regex);
  });
}

function createTerms(opt) {
  const elt = document.createElement('div');

  elt.classList.add('facet-panel');
  const cls = fieldz.find(e => e.title == opt.name).value;
  elt.classList.add(cls);


  const head = createHeader(opt);
  const list = createAggregations(opt.items);



  /*  open/close search */
  const search_panel = list.querySelector('.terms-search');
  const search_icon = head.querySelector('i.fa.fa-search');
  search_icon.addEventListener('click', (e) => {
    // open
    if (search_panel.classList.contains('hidden')) {
      search_panel.classList.remove('hidden');

    } else {
      // close
      search_panel.classList.add('hidden');
    }
  })
  /* search event */
  const search_input = list.querySelector('.terms-search input[type=text].terms-search-input')
  search_input.addEventListener('change', displayMatches.bind(elt));
  search_input.addEventListener('keyup', displayMatches.bind(elt));
  /* clean search test */
  list.querySelector('.terms-search i.fa.fa-close').addEventListener('click', e => {
    search_input.value = '';
    list.querySelector('span.tip').textContent = '';
    list.querySelector('.terms-search i.fa.fa-close').classList.add('hidden');
    const children = [...list.querySelectorAll('.term')];
    removeClassForList(children, 'hidden');

    if (list.dataset['isMore'] == 'true') {
      children.forEach((t, idx) => {
        if (idx >= 4) t.classList.add('hidden');
      });
    } else {
      children.forEach((t, idx) => {
        t.classList.remove('hidden');
      });
    }

    // show footer
    list.querySelector('.facet-footer').classList.remove('hidden')

  });

  /* clean */
  const icon = head.querySelector('a');
  icon.addEventListener('click', e => {
    icon.style.display = 'none';
    //
    clean(cls);
  });

  /* open/close aggregation panel */
  head.querySelector('span').addEventListener('click', e => {
    const icon = head.querySelector('span i.fa');
    if (icon.classList.contains('fa-angle-down')) {
      icon.classList.remove('fa-angle-down')
      icon.classList.add('fa-angle-right')
      list.style.display = 'none';
    } else {
      icon.classList.remove('fa-angle-right')
      icon.classList.add('fa-angle-down')
      list.style.display = '';
    }
  })
  elt.appendChild(head);
  elt.appendChild(list);

  // footer
  if (opt.items.length > 5) {
    const foot = createFooter(opt.items);
    list.appendChild(foot);
    list.dataset['isMore'] = true;
    /* expand/collapse terms*/
    const a = foot.querySelector('a');
    a.addEventListener('click', e => {
      //const child = list.querySelector('.term:nth-child(5)');
      const children = list.querySelectorAll('.term');
      if (list.dataset['isMore'] == 'true') {
        list.dataset['isMore'] = 'false';
        // expand
        children.forEach((t, idx) => {
          t.classList.remove('hidden');
        });
        a.textContent = 'Less...';
      } else {
        list.dataset['isMore'] = 'true';
        // collapse
        children.forEach((t, idx) => {
          if (idx >= 4) t.classList.add('hidden');
        });
        a.textContent = `${children.length - 4} More...`;
      }
    })
  }
  return elt;
}


const isMatch = (v, f) => {
  if (
    Array.isArray(v) &&
    v.filter(__v => f.includes(typeof __v == 'object' ? Object.keys(__v)[0] : __v)).length > 0) {
    return true;
  } else if (typeof v == 'string' && f.includes(v)) {
    return true;
  }
  return false;
}

const init = () => {
  generateFilterTips();
  // load all terms
  const list = document.querySelector('#term-list');
  terms.forEach(term => list.appendChild(createTerms(term)));



  Object.keys(selections).forEach(field => {

    const selects = document.querySelectorAll(`.${field} .terms-aggregation div.term input[type=checkbox]`);
    selects.forEach((input) => {
      input.addEventListener('change', () => {
        const checked = document.querySelectorAll(`.${field} .terms-aggregation div.term input[type=checkbox]:checked`);
        const clean_icon = document.querySelector(`.${field} .facet-header a`)


        selections[field] = [...checked].map(input => input.value);

        // create filter area infomation
        generateFilterTips();

        // show/hide clear icon
        if (selections[field].length == 0) {
          // hide
          clean_icon.style.display = 'none';
        } else {
          // show
          clean_icon.style.display = '';
        }

        console.log(`${field}_change`, selections[field]);

        const filter_conditions = Object.entries(selections).filter(arr => Array.isArray(arr[1]) && arr[1].length > 0)

        if (filter_conditions.length < 1) {
          clean();
          return;
        }
        __filterData();
      });
    });
  })
}


function __filterData() {
  const filter_conditions = Object.entries(selections).filter(arr => Array.isArray(arr[1]) && arr[1].length > 0)
  // filter
  const after_filter = table_data.filter(row => {

    return filter_conditions.reduce((rs, f_c) => {
      const field_name = f_c[0].split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      const val = row[field_name];

      return rs && isMatch(val, f_c[1]);
    }, true);

  })

  console.log(after_filter);

  let _t;
  //_t = createTrees1(after_filter);

  if (selections['location'].length == 1) { // only one location
    _t = createTrees2(after_filter);
    setToolTipText('Modality', 'Collection');
  }
  else if (selections['image_types'].length == 1) { // only one image type

    _t = createTrees3(after_filter);
    setToolTipText('Location', 'Collection');
  }
  else {
    _t = createTrees1(after_filter);
    setToolTipText('Location', 'Modality');
  }
  const _d = convertTreeToTableData(_t);

  render(_d);
}

// read json data
let values;
var view_tree;
var view_stack;
let og_data;
let table_data;

let selectedLocations = [];
let selectedModalities = [];



const convertTree = (og_data) => {
  data = []
  data.push({
    'id': 'root',
    'name': ''
  })

  Object.keys(og_data).forEach(loc_name => {
    data.push({
      'id': loc_name,
      'name': loc_name,
      'parent': 'root'
    });
    Object.keys(og_data[loc_name]).forEach(mod_name => {

      const size = [...Object.keys(og_data[loc_name][mod_name]).map(col_name => og_data[loc_name][mod_name][col_name])].reduce((total, num) => total + num, 0);
      const d = {
        'id': `${loc_name}|${mod_name}`,
        'name': mod_name,
        'parent': loc_name,
        'subject': size
      }
      data.push(d);
      stacked_data.push(d);
    });
  });
  return data;
}

const addItems = (sub, items, set) => {
  if (typeof items == "string") {
    if (!set[items]) set[items] = 0;
    set[items] += sub;

    return;
  }

  items.forEach(i => {
    const prop_name = typeof i !== "object" ? i : Object.keys(i)[0];
    const prop_value = Math.round(sub / items.length);
    if (!set[prop_name]) set[prop_name] = 0;
    set[prop_name] += prop_value;
  })
}


const request = async () => {

  const resp1 = await fetch('./table_data.json')
  table_data = await resp1.json();

  fieldz = Object.keys(table_data[0]).map(name => { return { 'title': name, 'value': name.toLowerCase().split(' ').join('_') } });
  /*  */
  const loc = {};
  const cancers = {};
  const mod = {};
  const sup_data = {};
  table_data.forEach(item => {

    addItems(+item["Subject"], item["Location"], loc);

    addItems(+item["Subject"], item["Cancer Type"], cancers);

    addItems(+item["Subject"], item["Image Types"], mod);

    addItems(+item["Subject"], item["Supporting Data"], sup_data);
  })

  const createTermList = (obj_term, name) => {
    const term_names = Object.keys(obj_term);
    const items = [];
    term_names.forEach(_name => {
      items.push({ 'name': _name, 'sum': obj_term[_name] })

    })

    items.sort(function (a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    const term_list = {
      'name': name,
      'items': items
    }
    // name, sum
    return term_list;
  }
  terms.push(createTermList(loc, 'Location'));
  terms.push(createTermList(mod, 'Image Types'));
  terms.push(createTermList(cancers, 'Cancer Type'));
  terms.push(createTermList(sup_data, 'Supperting Data'));


  terms.push({
    'name': 'Status',
    items: ['Complete', 'Ongoing']
  });

  terms.push({
    'name': 'Access',
    items: ['Public', 'Limited']
  });

  init();
  const _t = createTrees1(table_data);
  const _d = convertTreeToTableData(_t);
  setToolTipText('Location', 'Modality');
  //tree_spec.data[0].values = values;
  render(_d);


}
request();

function createTermsAggregations(options) {

}


function render(data) {
  //const _d = convertTreeToTableData(data);


  tree_spec.data[0].values = data[0];
  stack_spec.data.values = data[1];

  view_tree = new vega.View(vega.parse(tree_spec), {
    renderer: 'canvas',  // renderer (canvas or svg)
    container: '#view_tree',   // parent DOM container
    hover: true,       // enable hover processing
  })
    .run();

  vegaTooltip.default(view_tree);
  // click event when click on tree
  view_tree.addEventListener('click', (e, item) => {
    console.log(e);
    console.log(item);
  });


  vegaEmbed('#view_stack', stack_spec).then(p => {
    //console.log(spec, view);
    view_stack = p.view
    // click event when click on stacked bar
    view_stack.addEventListener('click', (e, item) => {
      console.log(e);
      console.log(item);
    });

  });

}










const stack_spec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
  "width": 750,
  "height": 600,
  // "padding": 2.5,
  // "autosize": "none",
  "data": { "values": stacked_data },
  "mark": "bar",
  "encoding": {
    "y": { "title": "Location", "field": "parent", "type": "nominal", "sort": "ascending" },
    "color": { "title": "Modality", "field": "name", "type": "nominal" },
    "x": { "title": "Series", "aggregate": "sum", "field": "subject", "type": "quantitative", "sort": "ascending" }
  }
}

const tree_spec = {
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "width": 900,
  "height": 600,
  // "padding": 2.5,
  // "autosize": "none",
  "signals": [
    {
      "name": "layout",
      "description": "This is layout",
      "value": "squarify",
      "bind": {
        "input": "select",
        "options": [
          "squarify",
          "binary"
        ]
      }
    },
    {
      "name": "aspectRatio", "value": 1
      // "bind": {"input": "range", "min": 1, "max": 5, "step": 0.1}
    }
  ],

  "data": [
    {
      "name": "tree",
      // "values":values,
      "transform": [
        {
          "type": "stratify",
          "key": "id",
          "parentKey": "parent"
        },
        {
          "type": "treemap",
          "field": "subject",
          "sort": { "field": "value", "order": "descending" },
          "round": true,
          "method": { "signal": "layout" },
          "ratio": { "signal": "aspectRatio" },
          "size": [{ "signal": "width" }, { "signal": "height" }]
        }
      ]
    },
    {
      "name": "nodes",
      "source": "tree",
      "transform": [{ "type": "filter", "expr": "datum.children" }]
    },
    {
      "name": "leaves",
      "source": "tree",
      "transform": [{ "type": "filter", "expr": "!datum.children" }]
    }
  ],

  "scales": [
    {
      "name": "color",
      "type": "ordinal",
      "domain": { "data": "nodes", "field": "name" },
      "range": [
        "#3182bd", "#6baed6", "#9ecae1", "#c6dbef", "#e6550d",
        "#fd8d3c", "#fdae6b", "#fdd0a2", "#31a354", "#74c476",
        "#a1d99b", "#c7e9c0", "#756bb1", "#9e9ac8", "#bcbddc",
        "#dadaeb", "#636363", "#969696", "#bdbdbd", "#d9d9d9"
      ]
    },
    {
      "name": "size",
      "type": "ordinal",
      "domain": [0, 1, 2, 3],
      "range": [256, 28, 20, 14]
    },
    {
      "name": "opacity",
      "type": "ordinal",
      "domain": [0, 1, 2, 3],
      "range": [0.15, 0.5, 0.8, 1.0]
    }
  ],

  "marks": [
    {
      "type": "rect",
      "from": { "data": "nodes" },
      "interactive": true,
      "encode": {
        "enter": {
          "fill": { "scale": "color", "field": "name" },
          "stroke": { "value": "bule" },
        },
        "update": {
          "x": { "field": "x0" },
          "y": { "field": "y0" },
          "x2": { "field": "x1" },
          "y2": { "field": "y1" }
        },
        "hover": {
          "stroke": { "value": "red" },
        }
      }
    },
    {
      "type": "rect",
      "from": { "data": "leaves" },
      "encode": {
        "enter": {
          "stroke": { "value": "#fff" },
          "tooltip": { "signal": "{'Location':datum.parent,'Modality':datum.name,'Series':datum.subject}" }
        },
        "update": {
          "x": { "field": "x0" },
          "y": { "field": "y0" },
          "x2": { "field": "x1" },
          "y2": { "field": "y1" },
          "fill": { "value": "transparent" }
        },

        "hover": {
          //"stroke": {"value": "#000"},
          //"fill": {"value": "red"}
        }
      }
    },
    {
      "type": "text",
      "from": { "data": "nodes" },
      "interactive": false,
      "encode": {
        "enter": {
          "font": { "value": "Helvetica Neue, Arial" },
          "align": { "value": "center" },
          "baseline": { "value": "middle" },
          "fill": { "value": "#000" },
          "text": { "field": "name" },
          "fontSize": { "value": 15 },
          // "fillOpacity": {"scale": "opacity", "field": "depth"}
        },
        "update": {
          "x": { "signal": "0.5 * (datum.x0 + datum.x1)" },
          "y": { "signal": "0.5 * (datum.y0 + datum.y1)" }
        },
        "hover": {
          "stroke": { "value": "#000" },
          //"fill": {"value": "red"}
        }
      }
    }
  ]
}

const __table_filter = () => {
  const f_list = Object.keys(selections).reduce((rs, key, i) => {
    const elt = selections[key];
    if (!Array.isEmpty(elt)) rs.push({ key: elt })
  }, []);
  console.log(f_list);

  table_data.filter(__filter);
  // selections
}
const __filter = (data) => {
  for (fn in data) {
    const v = data[fn];
    const _fn = fn.toLowerCase().split(' ').join('_');
    const _l = selections[_fn];
    if (Array.isArray(v) && compareFilter(v, _l)) {
      return true
    } else if (typeof v == 'string' && _l && _l.length > 0 && _l.includes(v)) {
      return true;
    }
  }
  return false;
}

const AND = (test, row, func) => {
  // return test.
}

const compareFilter = (vl, l) => {

  for (var i = vl.length - 1; i >= 0; i--) {
    if (l.includes(vl[i])) return true;
  }
  return false;
}

// ["Location"]


// only one location -> set location as root, first level is image type, second level is collection
function createTrees2(data) {
  // const parent = 'Loaction';
  const parent = 'Image Types';
  const child = 'Collection';

  const location_val = selections['location'][0];
  const hasTypesFilter = selections['image_types'].length > 0;
  const __tree = {};
  data.forEach(item => {
    item['Image Types'].forEach(type => {
      const [t, val] = Object.entries(type)[0];
      if (hasTypesFilter && selections['image_types'].includes(t)) {
        if (!__tree[t]) __tree[t] = {};
        const col = item['Collection'];
        __tree[t][col] = +val;

      } else if (!hasTypesFilter) {
        if (!__tree[t]) __tree[t] = {};
        const col = item['Collection'];
        __tree[t][col] = +val;

      }
    })
  })
  return __tree;
}

// only one image type -> remove image types from tree. The first level is location, second level is collection
function createTrees3(data) {
  const parent = 'Loaction';
  const child = 'Collection';
  // const = 'Collection';

  const image_type_name = selections['image_types'][0];

  const hasLocationFilter = selections['location'].length > 0;
  const __tree = {};

  data.forEach(item => {
    item['Location'].forEach(loc => {
      if (hasLocationFilter && selections['location'].includes(loc)) {
        if (!__tree[loc]) __tree[loc] = {};
        const col = item['Collection'];
        const types = item['Image Types'].map(e => Object.keys(e)[0]);
        if (types.includes(image_type_name)) {
          __tree[loc][col] = item['Image Types'].find(e => Object.keys(e)[0] == image_type_name)[image_type_name]
        }

      } else if (!hasLocationFilter) {
        if (!__tree[loc]) __tree[loc] = {};
        const col = item['Collection'];
        const types = item['Image Types'].map(e => Object.keys(e)[0]);
        if (types.includes(image_type_name)) {
          __tree[loc][col] = item['Image Types'].find(e => Object.keys(e)[0] == image_type_name)[image_type_name]
        }

      }

    })
  })
  return __tree;
}

// mutiple location and image type
function createTrees1(data) {
  const parent = 'Loaction';
  const child = 'Image Types';
  // const = 'Collection';

  const hasTypesFilter = selections['image_types'].length > 0;

  const hasLocationFilter = selections['location'].length > 0;
  const __tree = {};
  data.forEach(item => {
    item['Location'].forEach(loc => {
      if (hasLocationFilter && selections['location'].includes(loc)) {
        if (!__tree[loc]) __tree[loc] = {};
        item['Image Types'].forEach(type => {
          const [t, val] = Object.entries(type)[0];


          if (hasTypesFilter && selections['image_types'].includes(t)) {
            if (!__tree[loc][t]) __tree[loc][t] = 0;
            __tree[loc][t] += +val;
          } else if (!hasTypesFilter) {
            if (!__tree[loc][t]) __tree[loc][t] = 0;
            __tree[loc][t] += +val;
          }
        })
      } else if (!hasLocationFilter) {
        if (!__tree[loc]) __tree[loc] = {};
        item['Image Types'].forEach(type => {
          const [t, val] = Object.entries(type)[0];


          if (hasTypesFilter && selections['image_types'].includes(t)) {
            if (!__tree[loc][t]) __tree[loc][t] = 0;
            __tree[loc][t] += +val;
          } else if (!hasTypesFilter) {
            if (!__tree[loc][t]) __tree[loc][t] = 0;
            __tree[loc][t] += +val;
          }
        })

      }

      //if(!__tree[loc]) __tree[loc] = {};

    })
  })
  return __tree;
}


function convertTreeToTableData(tree, root = { id: 'root', name: '' }) {
  const rs = [];
  const st = [];
  rs.push(root);
  for (first in tree) {
    const node = tree[first]
    rs.push({ 'id': first, 'name': first, parent: root.id })
    for (sec in node) {
      const leaf = node[sec]
      const obj = { 'id': `${first}|${sec}`, 'name': sec, 'parent': first, 'subject': leaf };
      rs.push(obj);
      st.push(obj);
    }
  }
  return [rs, st];
}

function clean(field = 'all') {

  if (field == 'all') {
    const _t = createTrees1(table_data);
    const _d = convertTreeToTableData(_t);
    setToolTipText('Location', 'Modality');
    render(_d);
    generateFilterTips();
    return;
  }

  selections[field] = [];
  const checked = document.querySelectorAll(`.${field} .terms-aggregation div.term input[type=checkbox]:checked`);
  checked.forEach(c => c.checked = false);

  const filter_conditions = Object.entries(selections).filter(arr => Array.isArray(arr[1]) && arr[1].length > 0)
  if (filter_conditions.length < 1) {
    clean();
    return;
  }
  __filterData();
  generateFilterTips();
}

function setToolTipText(parent, child) {
  // tree_spec
  tree_spec.marks[1].encode.enter.tooltip.signal = `{'${parent}':datum.parent,'${child}':datum.name,'Series':datum.subject}`
  stack_spec.encoding.y.title = parent;
  stack_spec.encoding.color.title = child;
}


function createFilterConditions() {
  const div = document.querySelector('.selection.filter-panel');
}

function generateFilterTips() {
  const panel = document.querySelector('.selection.filter-panel');
  panel.innerHTML = createLabel('← Selecting Fields To Query.', '#e4f5f5', '#82589F');

  const list = Object.entries(selections).filter(e => e[1].length > 0);

  const html_context = list.map(e => {
    const field_name = e[0];
    const field_values = e[1];
    return `${createLabel(fieldz.find(f => f.value == field_name).title, 'rgb(105, 105, 105)')}${createLabel('IN', 'rgb(0, 138, 224)')}(${generateValues(field_values)})`
  }).join(createLabel('AND', '#82589F'));

  if (html_context) {

    panel.innerHTML = generateCleanBotton() + html_context;
    panel.querySelector('button').addEventListener('click', e => {
      // clean UI
      document.querySelectorAll('.facet-header a').forEach(a => a.style.display = 'none');
      document.querySelectorAll('.terms-aggregation div.term input[type=checkbox]').forEach(chk => chk.checked = false);
      Object.keys(selections).forEach(key => selections[key] = []);
      //

      clean();
    });
  }


}
function generateCleanBotton() {
  return `<button class="clear-btn" title="Clear Query"><span class="fa fa-close"></span>Clear</button>`
}
function generateValues(values) {
  return values.map(v => createLabel(v, 'rgb(64, 145, 64)')).join(',');

}
function createLabel(text, color = '#fff', fcolor = '#fff') {
  return `<span class='label' style='background-color:${color};color:${fcolor}'>${text}</span>`
}

// field name -> rgb(105, 105, 105)
// and -> rgb(0, 138, 224)
// value -> rgb(64, 145, 64)



// const horse = {
//   age: 10
// }

// function test(str, age,tt){
//   console.log(str,age,tt);
//   const agestr = age > 5 ? 'old': 'young';
//   return `${str[0]}${agestr} at ${tt} years`;

// }

// function return_tr(name){
//   return `<div> ${name}</div>`
// }

// const bio2 = test`this is ${horse.age}${return_tr('test_name')}`;

// console.log(bio2);
