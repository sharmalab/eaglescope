// Create a matrix
export function createMatrix(rows, cols = rows) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix[i] = new Array(cols).fill(null);
  }
  return matrix;
}

// Check if there is space in the matrix at the given position for the given size
export function hasSpace(matrix, pos, size) {
  if (matrix.length === 0) return true;
  let isHasSpace = true;
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
  return isHasSpace;
}

// Get the position for the chart in the matrix
function getPosition(matrix, size) {
  let position;

  // Try to fit in existing rows first
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].some(cell => cell !== null)) { // Check if the row is not empty
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === null && hasSpace(matrix, [j, i], size)) {
          return [j, i];
        }
      }
    }
  }

  // If no suitable position is found, create a new row
  return [0, matrix.length];
}

// Fill the matrix with the chart id at the given position and size
export function fillMatrix(matrix, val, pos = [0, 0], size = [matrix[0].length, matrix.length]) {
  for (let i = pos[1]; i < pos[1] + size[1]; i++) {
    while (matrix.length <= i) {
      matrix.push(new Array(matrix[0].length).fill(null));
    }
    for (let j = pos[0]; j < pos[0] + size[0]; j++) {
      matrix[i][j] = val;
    }
  }
}

// Get layout for react-grid-layout
export function getLayoutConfig(chartsConfig, cols, resizable = false) {
  const layout = [];
  const matrix = createMatrix(cols);

  // Separate charts into high priority (>=100) and normal priority (<100)
  const highPriorityCharts = chartsConfig.filter(chart => Number(chart.priority) >= 100);
  const normalPriorityCharts = chartsConfig.filter(chart => Number(chart.priority) < 100);

  // Sort each group individually
  const sortedHighPriorityCharts = highPriorityCharts.sort(
    (a, b) => Number(b.priority) - Number(a.priority) || a.title.localeCompare(b.title)
  );
  const sortedNormalPriorityCharts = normalPriorityCharts.sort(
    (a, b) => Number(b.priority) - Number(a.priority) || a.title.localeCompare(b.title)
  );

  // Combine sorted charts
  const chartsConfigSorted = [...sortedHighPriorityCharts, ...sortedNormalPriorityCharts];

  chartsConfigSorted.forEach((chart) => {
    // Get the size of a chart; default size is [1,1] (w,h)
    // if expandWidth, then width is = num cols
    const size = chart.expandWidth ? [cols, chart.size?.[1] || 1] : chart.size || [1, 1];
    const pos = matrix.length === 0 ? [0, 0] : getPosition(matrix, size);

    // Grow matrix if the position is out of bounds
    while (matrix.length <= pos[1] + size[1]) {
      matrix.push(new Array(cols).fill(null));
    }

    // Fill Matrix
    fillMatrix(matrix, chart.id, pos, size);

    // Create layout config
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
