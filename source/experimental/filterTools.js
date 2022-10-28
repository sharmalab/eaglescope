function filterData(data, rules) {
  return data.filter((y) => {
    for (const rule in rules) {
      var test_val;
      if (rule === '__all' || rule === '__ALL') {
        // we only care about VALUES, not keys
        test_val = JSON.stringify(Object.values(y));
      } else {
        test_val = y[rule];
      }
      let broken = false;
      const oprs = Object.keys(rules[rule]);
      if (!broken && oprs.includes('less')) {
        broken = broken || test_val >= rules[rule].less;
      }
      if (!broken && oprs.includes('greater')) {
        broken = broken || test_val <= rules[rule].greater;
      }
      if (!broken && oprs.includes('match')) {
        broken = broken || test_val != rules[rule].match;
      }
      if (!broken && oprs.includes('regex')) {
        const re = new RegExp(rules[rule].regex);
        broken = broken || !re.test(test_val);
      }
      if (broken) {
        return false;
      }
    }
    // all rules met
    return true;
  });
}

function filterMerge(filter, additions, mergeMethod) {
  filter = filter || {};
  additions = additions || {};
  if (additions.hasOwnProperty('__RESET') || filter.hasOwnProperty('__RESET')) {
    return { __RESET: 'true' };
  }
  const outFilter = JSON.parse(JSON.stringify(filter));
  for (const rule in additions) {
    outFilter[rule] = additions[rule];
  }
  return outFilter;
}

const filterTools = { filterData, filterMerge };

export default filterTools;
