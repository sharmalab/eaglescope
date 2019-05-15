// handle data events
class DataManager{
  constructor(){
    this.dataSource = null;
    this.filter = {}
    window.addEventListner("filterIn", this.filter, false)
    window.addEventListner("dataSourceReady", this.initialize, false)
  }
  filter(e){
    filter = e.detail.filter
    // TODO -- combine filters, unless filter is reset all
    this.filter = filter;
    // get filtered data
    var data = this.dataSource.data(this.filter)
    // send event with new data
    let ev = new CustomEvent("filterOut", {detail:{data:data}})
    window.dispatchEvent(ev)
  }
  initialize(ds){
    ds = this.detail.dataSource
    this.dataSource = ds;
    var data = this.dataSource.data({})
    // send init event with data
    let ev = new CustomEvent("initData", {detail:{data:data}})
    window.dispatchEvent(ev)
  }

}
