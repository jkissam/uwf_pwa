import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from './logo.png';
import './App.css';

const Page = ({ title }) => (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{title}</h2>
      </div>
      <p className="App-intro">
        This is the {title} page.
      </p>
      <p>
        <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
      </p>
      <p>
        <Link to={`${process.env.PUBLIC_URL}/about`}>About</Link>
      </p>
      <p>
        <Link to={`${process.env.PUBLIC_URL}/settings`}>Settings</Link>
      </p>
    </div>
);

const Home = (props) => (
  <Page title="Home"/>
);

const About = (props) => (
  <Page title="About"/>
);

const Settings = (props) => (
  <Page title="Settings"/>
);

class App extends Component {
  render() {
    return (
      <Router basename={'/uwf_pwa'} history={browserHistory}>
        <Route path={`${process.env.PUBLIC_URL}/`} component={Home}/>
        <Route path={`${process.env.PUBLIC_URL}/about`} component={About}/>
        <Route path={`${process.env.PUBLIC_URL}/settings`} component={Settings}/>
      </Router>
    );
  }
}

export default App;
