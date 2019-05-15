function filterData(data, rules){
  return data.filter(y=>{
    for (rule in rules){
      let broken = false
      let oprs = Object.keys(rules[rule]);
      console.log(oprs)
      if (oprs.includes("match")){
        console.log(y[rule])
        broken = broken || y[rule] != rules[rule]["match"]
      }
      if (oprs.includes("regex")){
        console.log(y[rule])
        let re = new RegExp(rules[rule]["regex"])
        broken = broken || !re.test(y[rule])
      }
      if (oprs.includes("less")){
        console.log(y[rule])
        broken = broken || y[rule] >= rules[rule]["less"]
      }
      if (oprs.includes("greater")){
        console.log(y[rule])
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

export default filterData
