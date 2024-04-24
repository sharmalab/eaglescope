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

// create a matrix
export function createMatrix(rows, cols = rows) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix[i] = new Array(cols);
  }
  return matrix;
}
// has Space
export function hasSpace(matrix, pos, size) {
  if (matrix.length === 0) return true;
  let isHasSpace = true;
  if ((size[0] > 1 && pos[0] % 2 !== 0) || (size[1] > 1 && pos[1] % 2 !== 1)) {
    isHasSpace = false;
  }
  if (isHasSpace) {
    for (let i = pos[1]; i < pos[1] + size[1]; i++) {
      if (i >= matrix.length) {
        break;
      }
      for (let j = pos[0]; j < pos[0] + size[0]; j++) {
        if (j >= matrix[0].length || matrix[i][j]) {
          isHasSpace = false;
          break;
        }
      }
      if (!isHasSpace) {
        break;
      }
    }
  }
  return isHasSpace;
}
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
// get the chart position
function getPosition(matrix, size) {
  let position;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!matrix[i][j] && hasSpace(matrix, [j, i], size)) {
        position = [j, i];
        break;
      }
    }
    if (position) break;
  }

  if (!position) {
    return [0, matrix.length];
  }
  return position;
}

export function fillMatrix(matrix, val, pos = [0, 0], size = [matrix[0].length, matrix.length]) {
  for (let i = pos[1]; i < pos[1] + size[1]; i++) {
    for (let j = pos[0]; j < pos[0] + size[0]; j++) {
      matrix[i][j] = val;
    }
  }
}

// get layout for react-grid-layout
export function getLayoutConfig(chartsConfig, cols, resiziable = false) {
  const layout = [];
  const matrix = createMatrix(cols);
  // sort charts by priority
  const chartsConfigSorted = chartsConfig.sort(
    (a, b) => b.priority - a.priority || a.title.localeCompare(b.displayName),
  );

  // TODO for some charts that requests a particular position in matrix
  // 1. do we need to put charts in a particular position?
  // 2. compute the new charts' layout config
  // 3. add new charts' layout config into layout array.
  // filter out the solid chart before compute the position of the rest of charts

  // make an arrangement for the rest of charts
  chartsConfigSorted.forEach((chart) => {
    // get the size of a chart; default size is [1,1] (w,h)
    const size = chart.size || [1, 1];
    const pos = matrix.length === 0 ? [0, 0] : getPosition(matrix, size);

    // grow up if the matrix is small than the expectation
    while (matrix.length <= pos[1] + size[1]) {
      matrix.push(new Array(cols));
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
      isResizable: resiziable,
    });
  });

  return { layout, rows: matrix[0].length };
}
