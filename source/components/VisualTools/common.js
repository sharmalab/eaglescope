import * as d3 from 'd3';

export const transformList = (data, f) => {
  const map = new Map();
  data.forEach((d) => {
    const items = d[f];
    if (Array.isArray(items)) {
      items.forEach((i) => {
        if (!map.has(i)) { map.set(i, 0); }
        map.set(i, map.get(i) + 1);
      });
    } else {
      if (!map.has(items)) { map.set(items, 0); }
      map.set(items, map.get(items) + 1);
    }
  });
  return Array.from(map).map((d) => ({ key: d[0], value: d[1] }));
};

export const transform = (data, field, isList = false) => {
  if (isList) {
    return transformList(data, field);
  }
  const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
  function collSort(a, b) {
    return collator.compare(a, b);
  }
  const grouped = d3.group(data, (d) => d[field]);
  const sortedGrouped = new Map([...grouped].sort(([keyA], [keyB]) => collSort(keyA, keyB)));
  const result = Array.from(sortedGrouped, ([key, values]) => ({
    key,
    value: values.length,
  }));
  return result;
};
