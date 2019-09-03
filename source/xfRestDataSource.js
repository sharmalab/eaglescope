import filterTools from './xFilterTools.js'
import crossfilter from 'crossfilter2'

class RestDataSource{
  constructor(url){
    this._records = fetch(url, {mode:"no-cors"}).then(x=>x.json()).then(x=>{
      var xf = crossfilter(x)
      var dims = {}
      for (let i in Object.keys(x[0])){
        var k =Object.keys(x[0])[i]
        dims[k] = xf.dimension(d=>d[k])
      }
      dims['__ALL'] = xf.dimension(d=>JSON.stringify(d))
      return {xf: xf, raw: x, dims: dims}
    })
    let ev = new CustomEvent("dataSourceReady", {detail:{dataSource:this}})
    window.dispatchEvent(ev)
    console.info("dataSourceReady event: ", ev)
  }
  data(filter){
    return new Promise(function(resolve, reject){
      this._records.then(data=>{resolve(filterTools.filterData(data, filter))})
    }.bind(this))
  }
}

export default RestDataSource
