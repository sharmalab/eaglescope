// in this mode greater and less should always be used together.
function filterData(dataObj, rules) {
  if (JSON.stringify(rules) == '{}') {
    return dataObj.xf.all();
  }
  for (const rule in rules) {
    if (dataObj.dims[rule]) {
      const oprs = Object.keys(rules[rule]);
      if (oprs.includes('clear')) {
        dataObj.dims[rule].filter(null);
      }
      if (oprs.includes('match')) {
        dataObj.dims[rule].filter(rules[rule].match);
      } else if (oprs.includes('less') && oprs.includes('greater')) {
        dataObj.dims[rule].filter([rules[rule].greater, rules[rule].less]);
      } else if (oprs.includes('regex')) {
        dataObj.dims[rule].filterFunction((y) => {
          const re = new RegExp(rules[rule].regex);
          return re.test(y);
        });
      }
    } else {
      console.warn(`no dimension matching ${rule}`);
    }
  }
  return dataObj.xf.allFiltered() || [];
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
