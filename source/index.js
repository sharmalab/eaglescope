import React from 'react';
import { createRoot } from 'react-dom/client';
import Application from './Application';

// style
import './components/VisualTools/Chart/style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './style/main.scss';
import 'react-virtualized/styles.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Application tab="home" />);
