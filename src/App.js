import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { intro } from './data/intro';

import Layout from './components/Layout';
import Header from './containers/Header';
import PageHome from './containers/PageHome';
import PageInfo from './containers/PageInfo';
import PageImages from './containers/PageImages';
import PageMusic from './containers/PageMusic';
import PageCredits from './containers/PageCredits';
import PageDocList from './containers/PageDocList';
import Footer from './containers/Footer';

import './App.module.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: null,
      playIntro: false,
    }
    this.openModalVideo = this.openModalVideo.bind(this)
    this.closeModalVideo = this.closeModalVideo.bind(this)
  }

  componentDidMount(){
    const lsIntro = localStorage.getItem('intro');
    if(lsIntro === null){
      this.setState({
        video: intro,
        playIntro: true,
      });
    }
  }

  openModalVideo(selectedVideo) {
    const { video } = this.state;
    if(video === null){
      this.setState({video: selectedVideo});
    }
  }

  closeModalVideo() {
    const lsIntro = localStorage.getItem('intro');
    this.setState({ video: null})
    if(lsIntro === null){
      localStorage.setItem("intro", true);
      this.setState({ 
        video: null,
        playIntro: false,
      })
    }
  }

  render() {
    const { video, playIntro } = this.state;
    return (
      <Router>
        <Layout 
          header={<Header />}
          main={(
            <Switch>
              <Route exact path="/" render={(props) =>
                <PageHome {...props}
                  openModalVideo={this.openModalVideo}
                />}
              />
              <Route path="/info" component={PageInfo}/>
              <Route path="/images" component={PageImages}/>
              <Route path="/music" component={PageMusic}/>
              <Route path="/doclist" render={(props) => 
                <PageDocList {...props}
                  openModalVideo={this.openModalVideo}
                />
              }/>
              <Route path="/credits" component={PageCredits}/>
            </Switch>
          )}
          footer={<Footer/>}
          closeModalVideo={this.closeModalVideo}
          video={video}
          playIntro={playIntro}
        />
      </Router>
    );
  }
}

export default App; 