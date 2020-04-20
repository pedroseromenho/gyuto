import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import intro from './__MOCKS__/intro';

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

const App = () => {
  const [video, setVideo] = useState(null);
  const [playIntro, setPlayIntro] = useState(false);
  
  useEffect(() => {
    const lsIntro = localStorage.getItem('intro');
    if(lsIntro === null){
      setVideo(intro);
      setPlayIntro(true);
    }
  }, [])

  const openModalVideo = (selectedVideo) => {
    if(video === null){
      setVideo(selectedVideo);
    }
  }

  const closeModalVideo = () =>{
    const lsIntro = localStorage.getItem('intro');
    setVideo(null);
    if(lsIntro === null){
      localStorage.setItem("intro", true);
      setVideo(null);
      setPlayIntro(false);
    }
  }

  return(
    <Router>
      <Layout 
        header={<Header />}
        main={(
          <Switch>
            <Route exact path="/" component={() => (
              <PageHome openModalVideo={openModalVideo}/> 
            )} />
            <Route path="/info" component={PageInfo}/>
            <Route path="/portraits" component={PagePortraits}/>
            <Route path="/music" component={PageMusic}/>
            <Route path="/doclist" component={() => (
              <PageDocList openModalVideo={openModalVideo}/>
            )}/>
            <Route path="/credits" component={PageCredits}/>
            <Route component={NoMatch} />
          </Switch>
        )}
        footer={<Footer/>}
        closeModalVideo={closeModalVideo}
        video={video}
        playIntro={playIntro}
      />
    </Router>
  )
}

export default App;