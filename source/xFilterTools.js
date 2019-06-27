// in this mode greater and less should always be used together.
function filterData(dataObj, rules){
  console.log(dataObj)
  if (rules == {}) {
    return dataObj.xf.all()
  } else {
    for (let rule in rules){
      if (dataObj.dims[rule]){
        let oprs = Object.keys(rules[rule]);
        if (oprs.includes("clear")){
          dataObj.dims[rule].filter(null)
        }
        if (oprs.includes("match")){
          dataObj.dims[rule].filter(rules[rule]["match"])
        }
        else if (oprs.includes("less") && oprs.includes("greater")){
          dataObj.dims[rule].filter([rules[rule]["greater"], rules[rule]["less"]])
        }
        else if (oprs.includes("regex")){
          dataObj.dims[rule].filter(y=>{
            let re = new RegExp(rules[rule]["regex"])
            return !re.test(y)
          })
        }
      } else {
        console.warn("no dimension matching " + dataObj.dims[rule])
      }
    }
    return dataObj.xf.allFiltered()
  }
}

function filterMerge(filter, additions, mergeMethod){
  return additions
}

var filterTools = {filterData:filterData, filterMerge: filterMerge}

export default filterTools
