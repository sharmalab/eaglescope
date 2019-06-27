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
          dataObj.dims[test_val].filter(y=>{
            let re = new RegExp(rules[rule]["regex"])
            return !re.test(test_val)
          })
        }
      }
    }
    return dataObj.xf.allFiltered()
  }
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
