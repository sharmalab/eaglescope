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
  for (let rule in additions){
    if (!filter[rule]){
      filter[rule] = {}
    }
    let oprs = Object.keys(additions[rule]);
    console.log(filter)
    if (oprs.includes("match")){
      filter[rule].match = additions[rule].match
    }
    if (oprs.includes("regex")){
      filter[rule].regex = additions[rule].regex
    }
    if (oprs.includes("less")){
      if (filter[rule].less){
        filter[rule].less = Math.min(additions[rule].less, filter[rule].less)
      } else {
        filter[rule].less = additions[rule].less
      }
    }
    if (oprs.includes("greater")){
      if (filter[rule].greater){
        filter[rule].greater = Math.max(additions[rule].greater, filter[rule].greater)
      } else {
        filter[rule].greater = additions[rule].greater
      }
    }
  }
  console.log(filter)
  return filter
}

var filterTools = {filterData:filterData, filterMerge: filterMerge}

export default filterTools
