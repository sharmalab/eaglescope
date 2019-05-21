function filterData(data, rules){
  return data.filter(y=>{
    for (let rule in rules){
      let broken = false
      let oprs = Object.keys(rules[rule]);
      if (oprs.includes("match")){
        broken = broken || y[rule] != rules[rule]["match"]
      }
      if (oprs.includes("regex")){
        let re = new RegExp(rules[rule]["regex"])
        broken = broken || !re.test(y[rule])
      }
      if (oprs.includes("less")){
        broken = broken || y[rule] >= rules[rule]["less"]
      }
      if (oprs.includes("greater")){
        broken = broken || y[rule] <= rules[rule]["greater"]
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
