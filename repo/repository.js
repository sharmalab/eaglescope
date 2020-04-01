// let data;
const __data = [];

// for term list
const __threshold = 10;

const terms = [];
let fieldz = [
  {title: "project", value: "project"},
  {title: "modality", value: "modality"},
  {title: "site", value: "site"},
  {title: "subjectCount", value: "subjectCount"},
  {title: "studyCount", value: "studyCount"},
  {title: "seriesCount", value: "seriesCount"},
  {title: "iamgeCount", value: "iamgeCount"},
];

const sumz = {
  'subject':0,
  'image':0,
  'study':0,
  'series':0
}

const selections = {
  "site": [],
  "modality": []
}

let quantityField = 'subjectCount'; // studyCount, seriesCount, iamgeCount
// treemaps.js
// inference ingestion
const stacked_data = [];



function createFlexBox(tagName, direction = 'row') {
  const elt = document.createElement(tagName);
  elt.style.display = 'flex';
  elt.style.flexDirection = direction == 'row' ? 'row' : 'column';
  elt.style.boxSizing = 'border-box';
  elt.style.position = 'relative';
  elt.style.outline = 'none';
  return elt;
}


function createHeader(opt, search = true, reset = false) {
  const title = opt.name;
  const items = opt.items;
  let hidden = '';
  if (opt.items < __threshold) hidden = 'hidden'
  const div = createFlexBox('div');
  div.classList.add('facet-header');
  const htmlText = `<span style="cursor: pointer;">
			<i class=" fa fa-angle-down" style="width:15px;text-align:center;"></i>
			${title}
		</span>
		<div>
			<i class="fa fa-search ${hidden}" ></i>
			
			<a style="display: none;">
				<i class="fa fa-undo"></i>
			</a>
		</div>`
  div.innerHTML = htmlText;
  return div;
}
function createFooter(items) {
  const div = document.createElement('div');
  div.classList.add('facet-footer');
  const htmlText = `<a> ${items.length - __threshold}&nbsp;More...</a>`
  div.innerHTML = htmlText;
  return div;
}

function createTerm(term) {


  // create panel
  const elt = document.createElement('div');
  elt.classList.add('term');

  // create head
  const head = document.createElement('a');
  head.classList.add('term-head');
  const chk = document.createElement('input');
  chk.type = 'checkbox';

  if (typeof term != 'string') {
    chk.value = term.name;
    chk.id = term.name;

    const label = document.createElement('label');
    label.textContent = term.name;
    label.htmlFor = term.name;
    head.appendChild(chk)
    head.appendChild(label)

    // create tial
    const tail = document.createElement('a');
    tail.classList.add('term-tail');
    tail.textContent = term.sum;
    elt.appendChild(head)
    elt.appendChild(tail)
  } else {
    chk.value = term;
    chk.id = term;

    const label = document.createElement('label');
    label.textContent = term;
    label.htmlFor = term;
    head.appendChild(chk)
    head.appendChild(label)
    elt.appendChild(head)
  }


  // return term
  return elt;

}
function createSearch() {
  const search_panel = document.createElement('div')
  search_panel.classList.add('terms-search');
  search_panel.classList.add('hidden');
  const search = document.createElement('input');
  search.type = 'text';
  search.classList.add('terms-search-input');
  const close = document.createElement('i');
  close.classList.add('fa');
  close.classList.add('fa-close');
  close.classList.add('close');
  close.classList.add('hidden');


  search_panel.appendChild(search);
  search_panel.appendChild(close);

  return search_panel;
}


function createAggregations(terms) {
  const panel = document.createElement('div');
  panel.classList.add('terms-aggregation');

  panel.appendChild(createSearch());
  const tip = document.createElement('span');
  tip.classList.add('tip')
  panel.appendChild(tip);
  terms.forEach((term, idx) => {
    const _elt = createTerm(term)
    if (idx >= __threshold) _elt.classList.add('hidden');
    panel.appendChild(_elt);
  });

  return panel;

}

function removeClassForList(list, className) {
  list.forEach(i => i.classList.remove(className));
}

function addClassForList(list, className) {
  list.forEach(i => i.classList.add(className));
}

function displayMatches(e) { // this -> element
  const text_tip = this.querySelector('.terms-aggregation span.tip');
  const footer = this.querySelector('.terms-aggregation .facet-footer');
  const list = [...this.querySelectorAll('.terms-aggregation .term')];
  const clean_icon = this.querySelector('.terms-aggregation .terms-search i.fa.fa-close');
  const value = e.target.value;
  // e.target.value = value;
  if (value) { // has text
    // show close/clean icon
    clean_icon.classList.remove('hidden');

    const __list = findMatches(value, list);
    if (__list.length == 0)
      text_tip.textContent = 'No Matching Items';
    else
      text_tip.textContent = '';
    // hidden all
    addClassForList(list, 'hidden');

    // show matching item
    removeClassForList(__list, 'hidden');

    // hidden footer
    footer.classList.add('hidden')


  } else { // no text
    text_tip.textContent = '';
    clean_icon.classList.add('hidden');
    removeClassForList(list, 'hidden');

    if (this.querySelector('.terms-aggregation').dataset['isMore'] == 'true') {
      list.forEach((t, idx) => {
        if (idx >= __threshold) t.classList.add('hidden');
      });
    } else {
      list.forEach((t, idx) => {
        t.classList.remove('hidden');
      });
    }

    // show footer
    footer.classList.remove('hidden')

  }
  //console.log(list);
}

function findMatches(wordToMatch, list) {
  return list.filter(item => {
    const item_name = item.querySelector('.term-head input[type=checkbox]').value;
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return item_name.match(regex);
  });
}

function createTerms(opt) {
  const elt = document.createElement('div');

  elt.classList.add('facet-panel');
  const cls = fieldz.find(e => e.title == opt.name).value;
  elt.classList.add(cls);


  const head = createHeader(opt);
  const list = createAggregations(opt.items);



  /*  open/close search */
  const search_panel = list.querySelector('.terms-search');
  const search_icon = head.querySelector('i.fa.fa-search');
  search_icon.addEventListener('click', (e) => {
    // open
    if (search_panel.classList.contains('hidden')) {
      search_panel.classList.remove('hidden');

    } else {
      // close
      search_panel.classList.add('hidden');
    }
  })
  /* search event */
  const search_input = list.querySelector('.terms-search input[type=text].terms-search-input')
  search_input.addEventListener('change', displayMatches.bind(elt));
  search_input.addEventListener('keyup', displayMatches.bind(elt));
  /* clean search test */
  list.querySelector('.terms-search i.fa.fa-close').addEventListener('click', e => {
    search_input.value = '';
    list.querySelector('span.tip').textContent = '';
    list.querySelector('.terms-search i.fa.fa-close').classList.add('hidden');
    const children = [...list.querySelectorAll('.term')];
    removeClassForList(children, 'hidden');

    if (list.dataset['isMore'] == 'true') {
      children.forEach((t, idx) => {
        if (idx >= __threshold) t.classList.add('hidden');
      });
    } else {
      children.forEach((t, idx) => {
        t.classList.remove('hidden');
      });
    }

    // show footer
    list.querySelector('.facet-footer').classList.remove('hidden')

  });

  /* clean */
  const icon = head.querySelector('a');
  icon.addEventListener('click', e => {
    icon.style.display = 'none';
    //
    clean(cls);
  });

  /* open/close aggregation panel */
  head.querySelector('span').addEventListener('click', e => {
    const icon = head.querySelector('span i.fa');
    if (icon.classList.contains('fa-angle-down')) {
      icon.classList.remove('fa-angle-down')
      icon.classList.add('fa-angle-right')
      list.style.display = 'none';
    } else {
      icon.classList.remove('fa-angle-right')
      icon.classList.add('fa-angle-down')
      list.style.display = '';
    }
  })
  elt.appendChild(head);
  elt.appendChild(list);

  // footer
  if (opt.items.length > 5) {
    const foot = createFooter(opt.items);
    list.appendChild(foot);
    list.dataset['isMore'] = true;
    /* expand/collapse terms*/
    const a = foot.querySelector('a');
    a.addEventListener('click', e => {
      //const child = list.querySelector('.term:nth-child(5)');
      const children = list.querySelectorAll('.term');
      if (list.dataset['isMore'] == 'true') {
        list.dataset['isMore'] = 'false';
        // expand
        children.forEach((t, idx) => {
          t.classList.remove('hidden');
        });
        a.textContent = 'Less...';
      } else {
        list.dataset['isMore'] = 'true';
        // collapse
        children.forEach((t, idx) => {
          if (idx >= __threshold) t.classList.add('hidden');
        });
        a.textContent = `${children.length - __threshold} More...`;
      }
    })
  }
  return elt;
}


const isMatch = (v, f) => {
  if (
    Array.isArray(v) &&
    v.filter(__v => f.includes(typeof __v == 'object' ? Object.keys(__v)[0] : __v)).length > 0) {
    return true;
  } else if (typeof v == 'string' && f.includes(v)) {
    return true;
  }
  return false;
}

const init = () => {
  generateFilterTips();
  // load all terms
  const list = document.querySelector('#term-list');
  terms.forEach(term => list.appendChild(createTerms(term)));



  Object.keys(selections).forEach(field => {

    const selects = document.querySelectorAll(`.${field} .terms-aggregation div.term input[type=checkbox]`);
    selects.forEach((input) => {
      input.addEventListener('change', () => {
        const checked = document.querySelectorAll(`.${field} .terms-aggregation div.term input[type=checkbox]:checked`);
        const clean_icon = document.querySelector(`.${field} .facet-header a`)


        selections[field] = [...checked].map(input => input.value);

        // create filter area infomation
        generateFilterTips();

        // show/hide clear icon
        if (selections[field].length == 0) {
          // hide
          clean_icon.style.display = 'none';
        } else {
          // show
          clean_icon.style.display = '';
        }

        console.log(`${field}_change`, selections[field]);

        const filter_conditions = Object.entries(selections).filter(arr => Array.isArray(arr[1]) && arr[1].length > 0)

        if (filter_conditions.length < 1) {
          clean();
          return;
        }
        __filterData();
      });
    });
  })
}


function __filterData() {
  const filter_conditions = Object.entries(selections).filter(arr => Array.isArray(arr[1]) && arr[1].length > 0)
  // filter
  const after_filter = __data.filter(row => {

    return filter_conditions.reduce((rs, f_c) => {
      const field_name = f_c[0];
      const val = row[field_name];

      return rs && isMatch(val, f_c[1]);
    }, true);

  })

  let _t;
  

  if (selections['site'].length == 1) { // only one location
    //_t = createTrees2(after_filter);
    //setToolTipText('modality', 'project');
    _t = transformer(after_filter, 'modality', 'project', quantityField)
    d3_render(_t,'view_stack','modality','project', quantityField);
  }
  else if (selections['modality'].length == 1) { // only one image type

    //_t = createTrees3(after_filter);
    //setToolTipText('site', 'project');
    _t = transformer(after_filter, 'site', 'project', quantityField)
    d3_render(_t,'view_stack','site','project', quantityField);
  }
  else {
    _t = transformer(after_filter, 'site', 'modality', quantityField)
    // _t = createTrees1(after_filter);
    //setToolTipText('site', 'project');
    d3_render(_t,'view_stack','site','modality', quantityField);
  }
  //const _d = convertTreeToTableData(_t);
}

// read json data
let values;
var view_tree;
var view_stack;
let og_data;




let selectedLocations = [];
let selectedModalities = [];



const convertTree = (og_data) => {
  data = []
  data.push({
    'id': 'root',
    'name': ''
  })

  Object.keys(og_data).forEach(loc_name => {
    data.push({
      'id': loc_name,
      'name': loc_name,
      'parent': 'root'
    });
    Object.keys(og_data[loc_name]).forEach(mod_name => {

      const size = [...Object.keys(og_data[loc_name][mod_name]).map(col_name => og_data[loc_name][mod_name][col_name])].reduce((total, num) => total + num, 0);
      const d = {
        'id': `${loc_name}|${mod_name}`,
        'name': mod_name,
        'parent': loc_name,
        'subject': size
      }
      data.push(d);
      stacked_data.push(d);
    });
  });
  return data;
}

const addItems = (sub, items, set) => {
  if (typeof items == "string") {
    if (!set[items]) set[items] = 0;
    set[items] += sub;

    return;
  }

  items.forEach(i => {
    const prop_name = typeof i !== "object" ? i : Object.keys(i)[0];
    const prop_value = Math.round(sub / items.length);
    if (!set[prop_name]) set[prop_name] = 0;
    set[prop_name] += prop_value;
  })
}
const updateProfile = profile => {
  document.getElementById('series').innerHTML = profile['series'];
  document.getElementById('studies').innerHTML = profile['study'];
  document.getElementById('images').innerHTML = profile['image'];
  document.getElementById('subjects').innerHTML = profile['subject'];
}
const clearSumz = () => {
  sumz['image'] = 0;
  sumz['series'] = 0;
  sumz['study'] = 0;
  sumz['subject'] = 0;
}

// loading data
const getKeyAsString = d => `project:${d['project']},modality:${d['modality']},site:${d['site']}`
const getKeyAsObject = key => key.split(',').reduce((obj, d) => {
  const [key, value] = d.split(':');
  obj[key] = value;
  return obj;
}, {})


const request = async () => {

  const resp1 = await fetch('./data.json')
  const data = await resp1.json();

  const obj_data = {}
  // const rs = [];
  const loc = {};
  const collection = {};
  const mod = {};

  data.forEach(d => {
    // for create items

    const key = getKeyAsString(d)
    if(!obj_data[key]) obj_data[key] = {'subjectCount':0,'studyCount':0,'seriesCount':0,'imageCount':0}
    obj_data[key]['subjectCount'] += d['subjectCount'];
    obj_data[key]['studyCount'] += d['studyCount'];
    obj_data[key]['seriesCount'] += d['seriesCount'];
    obj_data[key]['imageCount'] += d['imageCount'];
  })

  for (let [key, values] of Object.entries(obj_data)) {
    const  categorical_fields = getKeyAsObject(key);
    const numeric_fields = values;
    __data.push(Object.assign({}, categorical_fields, numeric_fields));
  }

  //__data = rs;


  //fieldz = Object.keys(table_data[0]).map(name => { return { 'title': name, 'value': name.toLowerCase().split(' ').join('_') } });
  /*  */


  clearSumz()
  // const sup_data = {};
  __data.forEach(item => {
    addItems(+item[quantityField], item["modality"], mod);
    addItems(+item[quantityField], item["site"], loc);

    sumz['image'] += +item['imageCount'];
    sumz['series'] += +item['seriesCount'];
    sumz['study'] += +item['studyCount'];
    sumz['subject'] += +item['subjectCount'];

  })
  
  updateProfile(sumz)

  const createTermList = (obj_term, name) => {
    const term_names = Object.keys(obj_term);
    const items = [];
    term_names.forEach(_name => {
      items.push({ 'name': _name, 'sum': obj_term[_name] })

    })

    items.sort(function (a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    const term_list = {
      'name': name,
      'items': items
    }
    // name, sum
    return term_list;
  }
  terms.push(createTermList(loc, 'site'));
  terms.push(createTermList(mod, 'modality'));

  init();



  const _t = transformer(__data,'site','modality', quantityField)

  d3_render(_t,'view_stack','site','modality', quantityField);


}


request();

const __table_filter = () => {
  const f_list = Object.keys(selections).reduce((rs, key, i) => {
    const elt = selections[key];
    if (!Array.isEmpty(elt)) rs.push({ key: elt })
  }, []);
  console.log(f_list);

  __data.filter(__filter);
  // selections
}
const __filter = (data) => {
  for (fn in data) {
    const v = data[fn];
    const _fn = fn.toLowerCase().split(' ').join('_');
    const _l = selections[_fn];
    if (Array.isArray(v) && compareFilter(v, _l)) {
      return true
    } else if (typeof v == 'string' && _l && _l.length > 0 && _l.includes(v)) {
      return true;
    }
  }
  return false;
}

const AND = (test, row, func) => {
  // return test.
}

const compareFilter = (vl, l) => {

  for (var i = vl.length - 1; i >= 0; i--) {
    if (l.includes(vl[i])) return true;
  }
  return false;
}

// ["Location"]


// only one location -> set location as root, first level is image type, second level is collection
function createTrees2(data) {
  // const parent = 'Loaction';
  const parent = 'site';
  const child = 'project';

  const location_val = selections['site'][0];
  const hasTypesFilter = selections['modality'].length > 0;
  const __tree = {};

  clearSumz()
  
  data.forEach(item => {
    sumz['image'] += +item['imageCount'];
    sumz['series'] += +item['seriesCount'];
    sumz['study'] += +item['studyCount'];
    sumz['subject'] += +item['subjectCount'];
    //.forEach(type => {
      //const [t, val] = Object.entries(type)[0];
      const t = item['modality'];
      const val = item['subjectCount'];
      if (hasTypesFilter && selections['modality'].includes(t)) {
        if (!__tree[t]) __tree[t] = {};
        const col = item['project'];
        __tree[t][col] = +val;

      } else if (!hasTypesFilter) {
        if (!__tree[t]) __tree[t] = {};
        const col = item['project'];
        __tree[t][col] = +val;

      }
    //})
  })
  
  updateProfile(sumz)

  return __tree;
}

// only one image type -> remove image types from tree. The first level is location, second level is collection
function createTrees3(data) {
  const parent = 'site';
  const child = 'project';
  // const = 'Collection';

  const image_type_name = selections['modality'][0];

  const hasLocationFilter = selections['site'].length > 0;
  const __tree = {};

  clearSumz()

  data.forEach(item => {
    sumz['image'] += +item['imageCount'];
    sumz['series'] += +item['seriesCount'];
    sumz['study'] += +item['studyCount'];
    sumz['subject'] += +item['subjectCount'];

    //item['site'].forEach(loc => {
    const loc = item['site']
      if (hasLocationFilter && selections['site'].includes(loc)) {
        if (!__tree[loc]) __tree[loc] = {};
        const col = item['project'];
        if(!__tree[loc][col]) __tree[loc][col] = 0;
        __tree[loc][col]+=item['subjectCount'];

      } else if (!hasLocationFilter) {
        if (!__tree[loc]) __tree[loc] = {};
        const col = item['project'];
        //const types = item['modality'].map(e => Object.keys(e)[0]);
        if(!__tree[loc][col]) __tree[loc][col] = 0;
        __tree[loc][col]+=item['subjectCount'];
        //if (item['modality'] == image_type_name) {
        //  __tree[loc][col] = item['modality'][image_type_name]
        //}else{}

      }

    //})
  })
  
  updateProfile(sumz)

  return __tree;
}

// mutiple location and image type
function createTrees1(data) {
  const parent = 'site';
  const child = 'modality';
  // const = 'Collection';

  const hasTypesFilter = selections['modality'].length > 0;

  const hasLocationFilter = selections['site'].length > 0;
  const __tree = {};
  
  clearSumz()
  
  data.forEach(item => {
    const loc = item['site'];

    sumz['image'] += +item['imageCount'];
    sumz['series'] += +item['seriesCount'];
    sumz['study'] += +item['studyCount'];
    sumz['subject'] += +item['subjectCount'];

      if (hasLocationFilter && selections['site'].includes(loc)) {
        if (!__tree[loc]) __tree[loc] = {};
        
          // const [t, val] = Object.entries(type)[0];
          const t = item['modality'];
          const val = item['subjectCount'];

          if (hasTypesFilter && selections['modality'].includes(t)) {
            if (!__tree[loc][t]) __tree[loc][t] = 0;
            __tree[loc][t] += +val;
          } else if (!hasTypesFilter) {
            if (!__tree[loc][t]) __tree[loc][t] = 0;
            __tree[loc][t] += +val;
          }
          
      } else if (!hasLocationFilter) {
        if (!__tree[loc]) __tree[loc] = {};


        // const type = item['modality'];
          const t = item['modality'];
          const val = item['subjectCount'];
          if (hasTypesFilter && selections['modality'].includes(t)) {
            if (!__tree[loc][t]) __tree[loc][t] = 0;
            __tree[loc][t] += +val;
          } else if (!hasTypesFilter) {
            if (!__tree[loc][t]) __tree[loc][t] = 0;
            __tree[loc][t] += +val;
          }
      }
  })

  updateProfile(sumz)

  return __tree;
}


function convertTreeToTableData(tree, root = { id: 'root', name: '' }) {
  const rs = [];
  const st = [];
  rs.push(root);
  for (first in tree) {
    const node = tree[first]
    rs.push({ 'id': first, 'name': first, parent: root.id })
    for (sec in node) {
      const leaf = node[sec]
      const obj = { 'id': `${first}|${sec}`, 'name': sec, 'parent': first, 'subject': leaf };
      rs.push(obj);
      st.push(obj);
    }
  }
  return [rs, st];
}

function clean(field = 'all') {

  if (field == 'all') {
    const _t = transformer(__data,'site','modality', quantityField);
    d3_render(_t,'view_stack','site','modality', quantityField);
    generateFilterTips();
    return;
  }

  selections[field] = [];
  const checked = document.querySelectorAll(`.${field} .terms-aggregation div.term input[type=checkbox]:checked`);
  checked.forEach(c => c.checked = false);

  const filter_conditions = Object.entries(selections).filter(arr => Array.isArray(arr[1]) && arr[1].length > 0)
  if (filter_conditions.length < 1) {
    clean();
    return;
  }
  __filterData();
  generateFilterTips();
}

function setToolTipText(parent, child) {
  // tree_spec
  tree_spec.marks[1].encode.enter.tooltip.signal = `{'${parent}':datum.parent,'${child}':datum.name,'Series':datum.subject}`
  stack_spec.encoding.y.title = parent;
  stack_spec.encoding.color.title = child;
}


function createFilterConditions() {
  const div = document.querySelector('.filter-panel');
}

function generateFilterTips() {
  const panel = document.querySelector('.filter-panel');
  panel.innerHTML = createLabel('← Selecting Fields To Query.', '#fff', '#82589F');

  const list = Object.entries(selections).filter(e => e[1].length > 0);

  const html_context = list.map(e => {
    const field_name = e[0];
    const field_values = e[1];
    return `${createLabel(fieldz.find(f => f.value == field_name).title, 'rgb(105, 105, 105)')}${createLabel('IN', 'rgb(0, 138, 224)')}(${generateValues(field_values)})`
  }).join(createLabel('AND', '#82589F'));

  if (html_context) {

    panel.innerHTML = generateCleanBotton() + html_context;
    panel.querySelector('button').addEventListener('click', e => {
      // clean UI
      document.querySelectorAll('.facet-header a').forEach(a => a.style.display = 'none');
      document.querySelectorAll('.terms-aggregation div.term input[type=checkbox]').forEach(chk => chk.checked = false);
      Object.keys(selections).forEach(key => selections[key] = []);
      //

      clean();
    });
  }

}
function generateCleanBotton() {
  return `<button class="clear-btn" title="Clear Query"><span class="fa fa-close"></span>Clear</button>`
}
function generateValues(values) {
  return values.map(v => createLabel(v, 'rgb(64, 145, 64)')).join(',');

}
function createLabel(text, color = '#fff', fcolor = '#fff') {
  return `<span class='label' style='background-color:${color};color:${fcolor}'>${text}</span>`
}


function transformer(data, categoricalField, comparingField, quantityField){
  // 
  const __ = {}
  // 
  let head = [];

  clearSumz()
  data.forEach(d => {
    sumz['image'] += +d['imageCount'];
    sumz['series'] += +d['seriesCount'];
    sumz['study'] += +d['studyCount'];
    sumz['subject'] += +d['subjectCount']; 

    const categoricalData = d[categoricalField];
    
    if (!__[categoricalData]) __[categoricalData] = {};

    const comparingData = d[comparingField];
    
    const val = d[quantityField];

    head.push(comparingData)
    if (!__[categoricalData]['total']) __[categoricalData]['total'] = 0;
    if (!__[categoricalData][comparingData]) __[categoricalData][comparingData] = 0;
    __[categoricalData][comparingData] += val;
    __[categoricalData]['total'] += val;
  })

  updateProfile(sumz)

  head = Array.from(new Set(head))
  const obj_head = Array.from(new Set(head)).sort((a,b)=> a - b).reduce((obj, d) => {
    obj[d] = 0;
    return obj;
  },{})

  const rs = []
  for(var k in __){

    const record = Object.assign({}, obj_head, __[k])
    record[categoricalField] = k;
    rs.push(record)   
  }

  rs.columns = head
  return rs;
}


d3.selectAll('.term.flex-container.item-card').on('click',function(d){
  d3.selectAll('.term.flex-container.item-card').classed("active", false);
  d3.select(this).classed('active',true)
  quantityField = this.id;
  // change and render
  generateFilterTips();
  __filterData()

})
const searchInput = document.querySelector('#searcher');
const suggestions = document.querySelector('.suggestions');
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
function displayMatches() {
  if(this.value==''){
    suggestions.innerHTML = '';
    return;
  }
  const matchedData = findMatches(this.value, __data);
  console.log(matchedData)
  matchedData.sort((a,b)=> b[quantityField] - a[quantityField])
  const html = matchedData.map(d => {
    //const regex = new RegExp(this.value, 'gi');

    //const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    //const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${d.project}, ${d.modality}, ${d.site}</span>
        <span class="number">${numberWithCommas(d[quantityField])}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

function findMatches(wordToMatch, data) {
  return data.filter(record => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return record.site.match(regex) || record.modality.match(regex) || record.project.match(regex)
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

