export function isNumeric(str) {
  return typeof str === 'string' && /^[+-]?(?:\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(str);
}

export function covertRaw(elt) {
  Object.keys(elt).forEach((key) => {
    const raw = elt[key];
    if (isNumeric(raw)) {
      elt[key] = +raw;
    } else if (raw === 'true' || raw === 'false') {
      elt[key] = raw === 'true';
    }
  });
  return elt;
}

const NULL_VALUES = new Set([null, undefined, '', 'N/A']);

function isNull(v) {
  return NULL_VALUES.has(v);
}

export function analyzeDataset(data) {
  if (!data || data.length === 0) return { rowCount: 0, fields: [] };

  const fieldNames = Object.keys(data[0]);
  const rowCount = data.length;

  const fields = fieldNames.map((name) => {
    const values = data.map((r) => r[name]);
    const nonNull = values.filter((v) => !isNull(v));
    const nullCount = values.length - nonNull.length;

    const allNumeric = nonNull.length > 0 && nonNull.every((v) => typeof v === 'number');
    const allBoolean = nonNull.length > 0 && nonNull.every((v) => typeof v === 'boolean');

    let type;
    if (allNumeric) type = 'numeric';
    else if (allBoolean) type = 'boolean';
    else type = 'categorical';

    const uniqueSet = new Set(nonNull.map(String));
    const uniqueCount = uniqueSet.size;
    const cardinalityRatio = rowCount > 0 ? uniqueCount / rowCount : 0;

    const samples = [...uniqueSet].slice(0, 5);

    const info = {
      name,
      type,
      uniqueCount,
      nullCount,
      cardinalityRatio,
      samples,
      min: null,
      max: null,
      mean: null,
    };

    if (allNumeric) {
      info.min = Math.min(...nonNull);
      info.max = Math.max(...nonNull);
      info.mean = nonNull.reduce((a, b) => a + b, 0) / nonNull.length;
    }

    return info;
  });

  return { rowCount, fields };
}

export const RECOMMEND_THRESHOLD = 75;

const ID_LIKE = /\b(id|index|key|code)\b/i;
const CHART_SIZES = {
  PIE_CHART: [1, 1],
  BAR_CHART: [1, 1],
  HORIZONTAL_BAR_CHART: [1, 1],
  HISTOGRAM: [2, 2],
  SCATTER_CHART: [2, 2],
  DENSITY_2D: [2, 2],
  HEATMAP: [2, 2],
  PARALLEL_COORDINATES: [3, 2],
  VIS_DATA_TABLE: [4, 2],
};

function makeConfig(chartType, fields, title, rationale, score, index) {
  return {
    id: `rec-${chartType.toLowerCase()}-${index}`,
    title,
    description: rationale,
    chartType,
    fields,
    size: CHART_SIZES[chartType] || [2, 2],
    priority: score,
  };
}

export function recommendVisualizations(dataInfo) {
  const { rowCount, fields } = dataInfo;
  const recs = [];
  let idx = 0;

  const numericFields = fields.filter((f) => f.type === 'numeric');
  const categoricalFields = fields.filter((f) => f.type === 'categorical');
  const booleanFields = fields.filter((f) => f.type === 'boolean');
  const lowCardCat = [...categoricalFields, ...booleanFields].filter((f) => f.uniqueCount <= 20);

  // --- VIS_DATA_TABLE (always) ---
  {
    const tableFields = fields.map((f) => ({ dataKey: f.name, label: f.name }));
    const rationale = `Tabular view of all ${fields.length} columns across ${rowCount.toLocaleString()} rows.`;
    recs.push({
      chartType: 'VIS_DATA_TABLE',
      score: 55,
      rationale,
      config: makeConfig('VIS_DATA_TABLE', tableFields, 'Data Table', rationale, 55, idx++),
    });
  }

  // --- HISTOGRAM per numeric field ---
  {
    const histRecs = numericFields.map((f) => {
      let score = 70;
      const nullRatio = f.nullCount / (rowCount || 1);
      if (nullRatio < 0.1) score += 10;
      if (rowCount >= 100) score += 5;
      if (ID_LIKE.test(f.name)) score -= 20;
      score = Math.min(score, 90);
      const rationale = `Distribution of ${f.name} values (min ${f.min}, max ${f.max}).`;
      return {
        chartType: 'HISTOGRAM', score, rationale, field: f,
      };
    });
    histRecs.sort((a, b) => b.score - a.score);
    histRecs.slice(0, 4).forEach(({ score, rationale, field }) => {
      recs.push({
        chartType: 'HISTOGRAM',
        score,
        rationale,
        config: makeConfig('HISTOGRAM', { x: field.name }, `Distribution: ${field.name}`, rationale, score, idx++),
      });
    });
  }

  // --- PIE_CHART for low-cardinality categorical ---
  {
    const eligible = lowCardCat.filter((f) => f.uniqueCount >= 2 && f.uniqueCount <= 8);
    const pieRecs = eligible.map((f) => {
      let score = 75;
      if (f.uniqueCount <= 5) score += 10;
      if (f.uniqueCount > 6) score -= 15;
      const rationale = `Proportions of ${f.uniqueCount} distinct values in ${f.name}.`;
      return { score, rationale, field: f };
    });
    pieRecs.sort((a, b) => b.score - a.score);
    pieRecs.slice(0, 2).forEach(({ score, rationale, field }) => {
      recs.push({
        chartType: 'PIE_CHART',
        score,
        rationale,
        config: makeConfig('PIE_CHART', { x: field.name }, `${field.name} Breakdown`, rationale, score, idx++),
      });
    });
  }

  // --- BAR_CHART (≤15 unique) / HORIZONTAL_BAR_CHART (16–40 unique) ---
  {
    const barRecs = lowCardCat
      .filter((f) => f.uniqueCount >= 2 && f.uniqueCount <= 40)
      .map((f) => {
        const chartType = f.uniqueCount <= 15 ? 'BAR_CHART' : 'HORIZONTAL_BAR_CHART';
        const fieldKey = chartType === 'BAR_CHART' ? 'x' : 'y';
        const rationale = `Count of records per ${f.name} (${f.uniqueCount} categories).`;
        return {
          chartType, score: 72, rationale, field: f, fieldKey,
        };
      });
    barRecs.sort((a, b) => b.score - a.score);
    barRecs.slice(0, 2).forEach(({
      chartType, score, rationale, field, fieldKey,
    }) => {
      recs.push({
        chartType,
        score,
        rationale,
        config: makeConfig(chartType, { [fieldKey]: field.name }, `${field.name} Counts`, rationale, score, idx++),
      });
    });
  }

  // --- SCATTER_CHART (rowCount ≤ 500) / DENSITY_2D (rowCount > 500) ---
  if (numericFields.length >= 2) {
    const pairs = [];
    for (let i = 0; i < numericFields.length && pairs.length < 10; i++) {
      for (let j = i + 1; j < numericFields.length && pairs.length < 10; j++) {
        pairs.push([numericFields[i], numericFields[j]]);
      }
    }
    const useDensity = rowCount > 500;
    const chartType = useDensity ? 'DENSITY_2D' : 'SCATTER_CHART';
    const scatterRecs = pairs.map(([fx, fy]) => {
      let score = useDensity ? 72 : 68;
      if (useDensity && rowCount > 1000) score += 5;
      // boost if names share a common root word (first 4 chars)
      if (fx.name.slice(0, 4).toLowerCase() === fy.name.slice(0, 4).toLowerCase()) score += 8;
      const rationale = `Relationship between ${fx.name} and ${fy.name} across ${rowCount.toLocaleString()} rows.`;
      return {
        chartType, score, rationale, fx, fy,
      };
    });
    scatterRecs.sort((a, b) => b.score - a.score);
    scatterRecs.slice(0, 3).forEach(({
      chartType: ct, score, rationale, fx, fy,
    }) => {
      recs.push({
        chartType: ct,
        score,
        rationale,
        config: makeConfig(ct, { x: fx.name, y: fy.name }, `${fx.name} vs ${fy.name}`, rationale, score, idx++),
      });
    });
  }

  // --- PARALLEL_COORDINATES (≥3 numeric fields) ---
  if (numericFields.length >= 3) {
    let score = 62;
    if (numericFields.length >= 5) score += 10;
    const axes = numericFields.slice(0, 6).map((f) => f.name);
    const rationale = `Multi-axis view across ${axes.length} numeric dimensions.`;
    recs.push({
      chartType: 'PARALLEL_COORDINATES',
      score,
      rationale,
      config: makeConfig('PARALLEL_COORDINATES', { y: axes }, 'Parallel Coordinates', rationale, score, idx++),
    });
  }

  // --- HEATMAP (≥2 lowCardCat + ≥1 numeric) ---
  if (lowCardCat.length >= 2 && numericFields.length >= 1) {
    const catA = lowCardCat[0];
    const catB = lowCardCat[1];
    const numF = numericFields[0];
    let score = 65;
    if (catA.uniqueCount <= 10 && catB.uniqueCount <= 10) score += 10;
    const rationale = `Mean ${numF.name} grouped by ${catA.name} × ${catB.name}.`;
    recs.push({
      chartType: 'HEATMAP',
      score,
      rationale,
      config: makeConfig(
        'HEATMAP',
        { x: catA.name, y: catB.name, z: numF.name },
        `${numF.name} by ${catA.name} & ${catB.name}`,
        rationale,
        score,
        idx++,
      ),
    });
  }

  recs.sort((a, b) => b.score - a.score);
  return recs.slice(0, 12);
}
