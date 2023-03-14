import React, { Component } from 'react'
import { Route, Routes } from "react-router"
import Header from './components/Header'
import Page from './components/Page'
import Contributor from './components/Contributor';
import Requestor from './components/Requestor';

import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Page />} />
          {/* <Route
              exact
              path="/"
              render={() => {
                return <Page title="homePage" />;
              }}
            /> */}
          <Route
            exact
            path="/con"
            element={<Contributor />}
          />
          <Route
            exact
            path="/req"
            element={<Requestor />}
          />
        </Routes>
      </div>
    )
  }
}

export default App