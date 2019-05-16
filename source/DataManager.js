// handle data Events
class DataManager{
  constructor(){
    this.dataSource = null;
    this.filter = {}
    window.addEventListener("filterIn", this.filter, false)
    window.addEventListener("dataSourceReady", this.initialize, false)
  }
  filter(e){
    filter = e.detail.filter
    // TODO -- combine filters, unless filter is reset all
    this.filter = filter;
    // get filtered data
    this.dataSource.data(this.filter).then(data=>{
      // send event with new data
      let ev = new CustomEvent("filterOut", {detail:{data:data}})
      window.dispatchEvent(ev)
      console.info("filterOut event: ", ev)
    })

  }
  initialize(ds){
    ds = this.detail.dataSource
    this.dataSource = ds;
    this.dataSource.data({}).then(data=>{
      // send init event with data
      let ev = new CustomEvent("initData", {detail:{data:data}})
      window.dispatchEvent(ev)
      console.info("init event: ", ev)
    })

  }

}

export default DataManager
