import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { Router, Route, Switch, Link, matchPath } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const routes = [{ path: '/about' }, { path: '/user/:id' }, { path: '/' }];

Sentry.init({
  dsn:'http://770e5c1447d34453858394602ef4ae7d@118.195.203.216:9000/2',
  environment:'localhost',
  integrations: [new Integrations.BrowserTracing({
    routingInstrumentation: Sentry.reactRouterV5Instrumentation(history, routes, matchPath),
  })],
  tracesSampleRate: 1.0,
  release: '0.0.1',
})

ReactDOM.render(
  <React.StrictMode>
    <div style={{ padding: '20px' }}>
      <Router history={history}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {' '}
            <Link to="/about">About</Link>
          </li>
          <li>
            {' '}
            <Link to="/user/1">user1</Link>
          </li>
          <li>
            {' '}
            <Link to="/user/2">user2</Link>
          </li>
          <li>
            {' '}
            <Link to="/app">app</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/about" children={()=><div>about</div>}></Route>
          <Route path="/app" children={<App />}></Route>
          <Route path="/user/:id" children={()=><div>user</div>}></Route>
          <Route
            path="/"
            children={()=><button onClick={() => {}}>Break the world</button>}
          ></Route>
        </Switch>
      </Router>
      {/* <App /> */}
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
