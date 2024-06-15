// chart = {
//   id: UniqueKey.WITH_CNA_DATA,
//   title: "With CNA Data",
//   description: "With CNA Data",
//   chartType: ChartTypeEnum.PIE_CHART,
//   //dataType: ChartMetaDataTypeEnum.GENOMIC,
//   //patientAttribute: false,
//   size: [w, h], // size [width, height]
//   priority: 0 //
//   //renderWhenDataChange: false
// };

// layout = {
//   i: "key",
//   x: "x",
//   y: "y",
//   w: "width",
//   h: "height",
//   isResizable: false
// };


export function numFixed(num, digits = 2) {
  return Number.isInteger(num) ? num : num.toFixed(digits);
}
export function isEquivalent(a, b) {
  // Create arrays of property names
  const aProps = Object.getOwnPropertyNames(a);
  const bProps = Object.getOwnPropertyNames(b);

  // If number of properties is different,
  // objects are not equivalent
  if (aProps.length !== bProps.length) {
    return false;
  }

  for (let i = 0; i < aProps.length; i++) {
    const propName = aProps[i];

    // If values of same property are not equal,
    // objects are not equivalent
    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  // If we made it this far, objects
  // are considered equivalent
  return true;
}

/// create a matrix
export function createMatrix(rows, cols = rows) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix[i] = new Array(cols).fill(null);
  }
  return matrix;
}

// has Space
export function hasSpace(matrix, pos, size) {
  if (matrix.length === 0) return true;
  for (let i = pos[1]; i < pos[1] + size[1]; i++) {
    if (i >= matrix.length) return false;
    for (let j = pos[0]; j < pos[0] + size[0]; j++) {
      if (j >= matrix[0].length || matrix[i][j] !== null) return false;
    }
  }
  return true;
}

export function fillMatrix(matrix, val, pos = [0, 0], size = [matrix[0].length, matrix.length]) {
  for (let i = pos[1]; i < pos[1] + size[1]; i++) {
    for (let j = pos[0]; j < pos[0] + size[0]; j++) {
      matrix[i][j] = val;
    }
  }
}

// get the chart position
function getPosition(matrix, size) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === null && hasSpace(matrix, [j, i], size)) {
        return [j, i];
      }
    }
  }
  return [0, matrix.length];
}

// get layout for react-grid-layout
export function getLayoutConfig(chartsConfig, cols, resizable = false) {
  const layout = [];
  const matrix = createMatrix(cols);
  
  // sort charts by priority
  const chartsConfigSorted = chartsConfig.sort(
    (a, b) => Number(b.priority) - Number(a.priority) || a.title.localeCompare(b.title)
  );
  console.log("sorted as");
  console.log(chartsConfigSorted);

  chartsConfigSorted.forEach((chart) => {
    // get the size of a chart; default size is [1,1] (w,h)
    const size = chart.size || [1, 1];
    const pos = matrix.length === 0 ? [0, 0] : getPosition(matrix, size);

    // grow matrix if the position is out of bounds
    while (matrix.length <= pos[1] + size[1]) {
      matrix.push(new Array(cols).fill(null));
    }

    // fill Matrix
    fillMatrix(matrix, chart.id, pos, size);

    // create layout config
    layout.push({
      i: chart.id,
      x: pos[0],
      y: pos[1],
      w: size[0],
      h: size[1],
      isResizable: resizable,
    });
  });

  return { layout, rows: matrix.length };
}



// Grid includes 10px margin
export function getSizeOfGridContent(gridSize, margin) {
  return [
    STUDY_VIEW_CONFIG.layout.grid.w * gridSize[0]
      + (chartDimension.w - 1) * STUDY_VIEW_CONFIG.layout.gridMargin.x
      - borderWidth * 2,
    STUDY_VIEW_CONFIG.layout.grid.h * gridSize[1]
      + (chartDimension.h - 1) * STUDY_VIEW_CONFIG.layout.gridMargin.y
      - chartHeight,
  ];
}
