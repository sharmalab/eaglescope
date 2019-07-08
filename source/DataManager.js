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
    let filter = filterTools.filterMerge(this.filter, e.detail.filter)
    // do we need to fire a new event?
    if (JSON.stringify(filter) == JSON.stringify(this.filter)){
      console.info("no change")
    } else {
      this.filter = filter
      // get filtered data
      this.dataSource.data(this.filter).then(data=>{
        // send event with new data
        window.__data = data
        let ev = new CustomEvent("filterOut", {detail:{"data":data, filter:filter}})
        window.dispatchEvent(ev)
        console.info("filterOut event: ", ev)
      })
    }


  }
  initialize(e){
    this.dataSource = e.detail.dataSource;
    this.dataSource.data({}).then(z=>{
      // send init event with data
      let ev = new CustomEvent("initData", {"detail":{"data":z}})
      window.__data = z
      window.__baseData = z
      window.dispatchEvent(ev)
      console.info("init event: ", ev)
    })

  }

}

export default DataManager
