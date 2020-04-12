import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Header from './containers/Header';
import PageHome from './containers/PageHome';
import PageInfo from './containers/PageInfo';
import PageImages from './containers/PageImages';
import PageMusic from './containers/PageMusic';
import PageCredits from './containers/PageCredits';
import PageDocList from './containers/PageDocList';
import Footer from './containers/Footer';
import { intro } from './data/intro';
import './App.module.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: '',
      playIntro: false,
    }
  }

  componentDidMount(){
    const lsIntro = localStorage.getItem('intro');
    if(lsIntro === null){
      this.setState({
        video: intro.url,
        playIntro: true,
      });
    }
    
  }

  openModalVideo(video) {
    this.setState({ video })
  }

  closeModalVideo() {
    const lsIntro = localStorage.getItem('intro');
    this.setState({ video: ''})
    if(lsIntro === null){
      localStorage.setItem("intro", true);
      this.setState({ 
        video: '',
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
                  openModalVideo={this.openModalVideo.bind(this)}
                />}
              />
              <Route path="/info" component={PageInfo}/>
              <Route path="/images" component={PageImages}/>
              <Route path="/music" component={PageMusic}/>
              <Route path="/doclist" component={PageDocList}/>
              <Route path="/credits" component={PageCredits}/>
            </Switch>
          )}
          footer={<Footer/>}
          closeModalVideo={this.closeModalVideo.bind(this)}
          video={video}
          playIntro={playIntro}
        />
      </Router>
    );
  }
}

export default App; 