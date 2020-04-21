import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Header from './containers/Header';
import PageHome from './containers/PageHome';
import PageInfo from './containers/PageInfo';
import PagePortraits from './containers/PagePortraits';
import PageMusic from './containers/PageMusic';
import PageCredits from './containers/PageCredits';
import PageDocList from './containers/PageDocList';
import Footer from './containers/Footer';
import NoMatch from 'containers/NoMatch';

import './App.module.scss';

const App = () => (
  <Router>
    <Layout 
      header={<Header />}
      main={(
        <Switch>
          <Route exact path="/" component={PageHome} />
          <Route path="/info" component={PageInfo}/>
          <Route path="/portraits" component={PagePortraits}/>
          <Route path="/music" component={PageMusic}/>
          <Route path="/doclist" component={PageDocList}/>
          <Route path="/credits" component={PageCredits}/>
          <Route component={NoMatch} />
        </Switch>
      )}
      footer={<Footer/>}
    />
  </Router>
)

export default App;