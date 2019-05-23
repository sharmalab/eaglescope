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
  var outFilter = {}
  for (let rule in additions){
    if (!outFilter[rule]){
      outFilter[rule] = {}
    }
    let oprs = Object.keys(additions[rule]);
    if (oprs.includes("match")){
      outFilter[rule].match = additions[rule].match
    }
    if (oprs.includes("regex")){
      outFilter[rule].regex = additions[rule].regex
    }
    if (oprs.includes("less")){
      outFilter[rule].less = additions[rule].less
    }
    if (oprs.includes("greater")){
      outFilter[rule].greater = additions[rule].greater
    }
  }
  return outFilter
}

var filterTools = {filterData:filterData, filterMerge: filterMerge}

export default filterTools
