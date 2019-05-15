import filterData from './filterData.js'

var dataSource = {}
// todo make work at least
let ev = new CustomEvent("dataSourceReady", {detail:{dataSouce:dataSource}})
window.dispatchEvent(ev)
