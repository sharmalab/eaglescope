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

function filterMerge(filter, additions){
  return filter
}

var filterTools = {filterData:filterData, filterMerge: filterMerge}

export default filterTools
