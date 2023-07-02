import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import App from './containers/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'))
.render(
<StrictMode>
  <App/>
</StrictMode>
);

// reportWebVitals();
