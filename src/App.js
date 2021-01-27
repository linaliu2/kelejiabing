//app.js

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import router from "./router"

function App () {
  return (
    <Router>
      {/* <nav className="nav">
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/new">新闻</Link>
          </li>
        </ul>
      </nav> */}
      {
        router.map((router, index) => {

          if (router.exact) {

            return <Route exact key={index} path={router.path}
              render={
                props => (
                  <router.component {...props} routes={router.routes} />
                )
              }
            />

          } else {

            return <Route key={index} path={router.path}
              render={
                props => (
                  <router.component {...props} routes={router.routes} />
                )
              }
            />

          }

        })
      }
    </Router>
  );
}

export default App;