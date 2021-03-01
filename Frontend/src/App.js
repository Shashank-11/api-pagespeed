import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { Managesites } from "./Managesites";
import { References } from "./References";
import { Pagenotfound } from "./Pagenotfound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='dom-wrapper'>
          <Header />

          <Router>
            <Switch>
              <Route exact path='/' component={Dashboard}></Route>
              <Route path='/manage-sites' component={Managesites}></Route>
              <Route path='/references' component={References}></Route>
              <Route component={Pagenotfound}></Route>
            </Switch>
          </Router>
        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;
