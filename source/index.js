import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application.js';

// style
import './components/VisualTools/Chart/style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './style/main.scss';
import 'react-virtualized/styles.css';

ReactDOM.render(<Application />, document.getElementById('root'));
