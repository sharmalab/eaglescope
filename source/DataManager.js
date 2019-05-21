import filterTools from './filterTools.js'

// handle data Events
class DataManager{
  constructor(){
    this.dataSource = null;
    this.filter = {}
    window.addEventListener("filterIn", this.filterData, false)
    window.addEventListener("dataSourceReady", this.initialize, false)
  }
  filterData(e){
    console.log("a", this.filter)
    console.log("b", e.detail.filter)
    let filter = filterTools.filterMerge(this.filter, e.detail.filter)
    console.log("c", filter)
    // do we need to fire a new event?
    if (!(JSON.stringify(filter) == JSON.stringify(this.filter))){
      this.filter = filter
      // get filtered data
      this.dataSource.data(this.filter).then(data=>{
        // send event with new data
        let ev = new CustomEvent("filterOut", {detail:{data:data}})
        window.dispatchEvent(ev)
        console.info("filterOut event: ", ev)
      })
    }
  }
  initialize(e){
    this.dataSource = e.detail.dataSource;
    this.dataSource.data({}).then(data=>{
      // send init event with data
      let ev = new CustomEvent("initData", {detail:{data:data}})
      window.dispatchEvent(ev)
      console.info("init event: ", ev)
    })

  }

}

export default DataManager
