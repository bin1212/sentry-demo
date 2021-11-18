import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import {Button } from 'antd'

Sentry.init({
  dsn:'http://770e5c1447d34453858394602ef4ae7d@118.195.203.216:9000/2',
  environment:'localhost',
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
  release: '0.0.1',
})

ReactDOM.render(
  <React.StrictMode>
    <div style={{padding:'20px'}}>
      <App/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
