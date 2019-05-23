function filterData(data, rules){
  return data.filter(y=>{
    for (let rule in rules){
      var test_val;
      if(rule === "__all" || rule === "__ALL"){
        // we only care about VALUES, not keys
        test_val = JSON.stringify(Object.values(y))
      } else {
        test_val = y[rule]
      }
      let broken = false
      let oprs = Object.keys(rules[rule]);
      if (oprs.includes("match")){
        broken = broken || test_val != rules[rule]["match"]
      }
      if (oprs.includes("regex")){
        let re = new RegExp(rules[rule]["regex"])
        broken = broken || !re.test(test_val)
      }
      if (oprs.includes("less")){
        broken = broken || test_val >= rules[rule]["less"]
      }
      if (oprs.includes("greater")){
        broken = broken || test_val <= rules[rule]["greater"]
      }
      if (broken){
        return false
      }

    }
    // all rules met
    return true
  })
}

function filterMerge(filter, additions, mergeMethod){
  filter = filter || {}
  var outFilter = JSON.parse(JSON.stringify(filter))
  for (let rule in additions){
    outFilter[rule] = additions[rule]
  }
  return outFilter
}

var filterTools = {filterData:filterData, filterMerge: filterMerge}

export default filterTools
