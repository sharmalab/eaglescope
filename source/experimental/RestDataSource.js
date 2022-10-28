import filterTools from './filterTools.js';

class RestDataSource {
  constructor(url) {
    this._records = fetch(url).then((x) => x.json());

    const ev = new CustomEvent('dataSourceReady', { detail: { dataSource: this } });
    window.dispatchEvent(ev);
    console.info('dataSourceReady event: ', ev);
  }

  data(filter) {
    return new Promise((resolve, reject) => {
      this._records.then((data) => { resolve(filterTools.filterData(data, filter)); });
    });
  }
}

export default RestDataSource;
