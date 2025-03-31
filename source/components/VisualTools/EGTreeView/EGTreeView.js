import React, { useState, useEffect } from 'react';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import Button from 'react-bootstrap/Button';
// import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './EGTreeView.css';
import Box from '@mui/material/Box';
import { TreeViewBaseItem } from '@mui/x-tree-view/models';
import { RichTreeView, TreeItem2 } from '@mui/x-tree-view';
import { useTreeItem2 } from '@mui/x-tree-view/useTreeItem2';
import {
  TreeItem2Checkbox,
  TreeItem2Content,
  TreeItem2IconContainer,
  TreeItem2Label,
  TreeItem2Root,
  TreeItem2GroupTransition,
} from '@mui/x-tree-view/TreeItem2';
import { TreeItem2Icon } from '@mui/x-tree-view/TreeItem2Icon';
import { TreeItem2Provider } from '@mui/x-tree-view/TreeItem2Provider';
import { TreeItem2DragAndDropOverlay } from '@mui/x-tree-view/TreeItem2DragAndDropOverlay';
import { TreeItem2LabelInput } from '@mui/x-tree-view/TreeItem2LabelInput';

import { ExpandMoreIcon, ChevronRightIcon, CribSharp } from '@mui/icons-material';

// Create the Basic Auth credentials
const username = 'Nan';
const password = 'MaternalHealth';
const credentials = btoa(`${username}:${password}`); // btoa encodes to Base64
const newConfig = {
  method: 'GET',
  // mode: 'no-cors',
  headers: {
    Authorization: `Basic ${credentials}`,
    'Content-Type': 'application/json',
  },
};

function EGTreeView() {
  // const [expandedNodes, setExpandedNodes] = useState([]);

  const [items, setItems] = useState(null); // constraint props
  const [vargroupsMap, setVargroupsMap] = useState(null); // constraint props
  const [isLoading, setIsLoading] = useState(true);
  const [action, setAction] = useState(null);
  const [selectedConstraintProps, setSelectedConstraintProps] = useState([]);
  const [vargroupItems, setVargroupItems] = useState([]);

  const handleNodeToggle = (event, nodeIds) => {
    setExpandedNodes(nodeIds);

    // Load children if not already loaded
    nodeIds.forEach((nodeId) => {
      if (!items.find((child) => child.id === nodeId)) {
        fetchChildren(nodeId);
      }
    });
  };

  // load
  const fetchChildren = async (nodeId) => {
    // Replace this with your actual API call
    const id = nodeId;
    const response = await fetch(`http://localhost:5000/ConstraintPropVals?ConstraintPropID=${id}`, newConfig);
    let children = await response.json();
    children = children.map((item) => {

    });
    // Update the treeData state
    setItems((prevData) => ({
      ...prevData,
      children: prevData.map((child) => (child.id === nodeId ? { ...child, children } : child)),
    }));
  };

  // loading data
  useEffect(() => {
    const fetchData = async (config) => {
      setIsLoading(true);
      try {
        const props_response = await fetch('http://localhost:5000/ConstraintProp', config);
        let constraintProps = await props_response.json();
        constraintProps = constraintProps.map((p) => ({
          id: p.ID, isParent: true, label: p.CONSTRAINT_PROPERTIES, children: [],
        }));
        const vargroups_response = await fetch('http://localhost:5000/getAllVarGroupAllConstraints', config);
        const vargroups = await vargroups_response.json();
        const vgsMap = new Map();

        vargroups.forEach((vargroup) => {
          const { VARGROUP, CONSTRAINT_TYPE, CONSTRAINT_VALUE } = vargroup;
          //
          if (!vgsMap.has(VARGROUP)) {
            vgsMap.set(VARGROUP, new Map());
          }
          const vgConstraintPropsMap = vgsMap.get(VARGROUP);
          //
          if (!vgConstraintPropsMap.has(CONSTRAINT_TYPE)) {
            vgConstraintPropsMap.set(CONSTRAINT_TYPE, new Set());
          }
          const vgConstraintValues = vgConstraintPropsMap.get(CONSTRAINT_TYPE);

          vgConstraintValues.add(CONSTRAINT_VALUE);
        });
        setVargroupsMap(vgsMap);
        setItems(constraintProps);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData(newConfig);
  }, []);

  const renderTreeItems = (nodes) => {
    // const isLoading = expandedNodes.includes(node.id) && !node.children;
    console.log('~~~~~~~~~~~~~~~~ nodes');
    console.log(nodes);
    return nodes.map((node, idx) => (
      <TreeItem2
        key={node.CONSTRAINT_PROPERTIES}
        itemId={node.CONSTRAINT_PROPERTIES}
        label={(
          <>
            {node.CONSTRAINT_PROPERTIES}
            {/* {isLoading && <CircularProgress size="1em" sx={{ marginLeft: 0.5 }} />} */}
          </>
      )}
      >
        {/* {node.children && node.children.map(renderChildrenItem)} */}
      </TreeItem2>
    ));
  };

  const handleItemExpansionToggle = (event, itemId, isExpanded) => {
    console.log(event, itemId, isExpanded);
    setAction({ itemId, isExpanded });
  };

  // const getItemLabel = (item) => { return item.CONSTRAINT_PROPERTIES }

  const handleSelectedItemsChange = (event, itemIds) => {
    setSelectedConstraintProps(itemIds);

    const filteredVargroups = new Set();
    for (const [vgroup, propsMap] of vargroupsMap.entries()) {
      const vgroupProps = Array.from(propsMap.keys());
      if (isSubset(new (vgroupProps)(), new Set(itemIds))) filteredVargroups.add(vgroup);
    }

    console.log(filteredVargroups);
    setVargroupItems(filteredVargroups);
  };
  const isSubset = (set1, set2) => Array.from(set1).every((element) => set2.has(element));
  const getItemId = (item) => (item.isParent ? item.label : item.id);

  const CustomTreeItem = React.forwardRef((
    {
      id, itemId, label, disabled, children,
    },
    ref,
  ) => {
    const {
      getRootProps,
      getContentProps,
      getIconContainerProps,
      getCheckboxProps,
      getLabelProps,
      getGroupTransitionProps,
      status,
    } = useTreeItem2({
      id, itemId, children, label, disabled, rootRef: ref,
    });
    return (
      <TreeItem2Provider itemId={itemId}>
        <TreeItem2Root {...getRootProps()}>
          <TreeItem2Content {...getContentProps()}>
            <TreeItem2IconContainer {...getIconContainerProps()}>
              <TreeItem2Icon status={status} />
            </TreeItem2IconContainer>
            {!children && <TreeItem2Checkbox {...getCheckboxProps()} />}
            <TreeItem2Label {...getLabelProps()} />
          </TreeItem2Content>
          {children && <TreeItem2GroupTransition {...getGroupTransitionProps()} />}
        </TreeItem2Root>
      </TreeItem2Provider>
    );
  });

  return (
    // <div className="tree-container">
    //   {!isLoading&&<RichTreeView items={items} checkboxSelection={true} />}
    // </div>
    <div className="tree-container">
      {!isLoading && (
      <RichTreeView
        items={items}
        getItemId={getItemId}
        defaultExpandedItems={[]}
        slots={{ item: CustomTreeItem }}
        checkboxSelection
        multiSelect
        onSelectedItemsChange={handleSelectedItemsChange}
      />
      )}
      {!isLoading && selectedConstraintProps.length > 0 && (
      <div>
        <ul>
          {Array.from(vargroupItems).map((vg) => (
            <li key={vg}>
              <label>
                <input
                  type="checkbox"
                  value={vg}
                />
                {vg}
              </label>
            </li>
          ))}
        </ul>
      </div>
      )}
    </div>
  );
}

export default EGTreeView;
