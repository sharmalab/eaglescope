var dataSouce = {}
// todo make work at least
let ev = new CustomEvent("dataSourceReady", {detail:{dataSouce:dataSource}})
window.dispatchEvent(ev)
