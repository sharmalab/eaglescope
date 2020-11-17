

function GroupByField(data,feild){
    return d3.nest().key(d=>d[feild]).entries(data);
}

function groupByFieldAndCountElements(data, field){
    return d3.nest().key(d => d[field]).rollup(v=>v.length).entries(data);
}

function groupByFieldAndSumElements(data, keyField, valueFeild){
    return d3.nest().key(d=>d[keyField]).rollup(v => {return {"length": v.length, "total": d3.sum(v, d=>parseFloat(d[valueFeild]))}}).entries(data);
}

