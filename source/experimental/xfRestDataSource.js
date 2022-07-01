import crossfilter from 'crossfilter2';
import filterTools from './xFilterTools.js';

class RestDataSource {
  constructor(url) {
    this._records = fetch(url).then((x) => x.json()).then((x) => {
      const xf = crossfilter(x);
      const dims = {};
      for (const i in Object.keys(x[0])) {
        var k = Object.keys(x[0])[i];
        dims[k] = xf.dimension((d) => d[k]);
      }
      dims.__ALL = xf.dimension((d) => JSON.stringify(d));
      return { xf, raw: x, dims };
    });
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
