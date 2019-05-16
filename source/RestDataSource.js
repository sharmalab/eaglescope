import filterTools from './filterTools.js'

class RestDataSource{
  constructor(url){
    this._records = fetch(url)
    let ev = new CustomEvent("dataSourceReady", {detail:{dataSouce:this}})
    window.dispatchEvent(ev)
    console.info("dataSourceReady event: ", ev)
  }
  data(filter){
    return new Promise(function(resolve, reject){
      this._records.then(data=>{resolve(filterTools.filterData(data, filter))})
    })
  }
}

export default RestDataSource
