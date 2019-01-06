import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Grid } from "react-flexbox-grid";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PageHome from "./components/pageHome/PageHome";
import PageEvents from "./components/pageEvents/PageEvents";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import PageImages from "./components/pageImages/PageImages";
import PageInfo from "./components/pageInfo/PageInfo";
import PageMusique from "./components/pageMusique/PageMusique";
import PageDocList from "./components/pageDocList/PageDocList";
import PageEventDetails from "./components/pageEventDetails/PageEventDetails";
import PageImagesDetails from "./components/pageImagesDetails/PageImagesDetails";
import ModalPlayVideo from "./components/modalPlayVideo/ModalPlayVideo";
import ModalPlayVideoIntroduction from "./components/modalPlayVideo/ModalPlayVideoIntroduction";
import { Helmet } from 'react-helmet';
import NoMatch from "./components/noMatch/NoMatch";
import { withNamespaces } from 'react-i18next';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: '',
      visible: false,
      language: true,
      linkIntroduction: '',
      visibleIntroduction: false,
    }
  }

  onOpenModal(params) {
    this.setState({ link: params, visible: true })
  }

  onCloseModal() {
    this.setState({ link: '', visible: false })
  }

  onOpenModalIntroduction(params) {
    this.setState({ linkIntroduction: params, visibleIntroduction: true })
  }

  onCloseModalIntroduction() {
    this.setState({ linkIntroduction: '', visibleIntroduction: false })
  }

  changeLanguage() {
    this.setState({
      language: !this.state.language
    })
  }



  render() {
    return (
      <div className="App">
        <Grid fluid>
          <NavBar changeLanguage={this.changeLanguage.bind(this)} {...this.state} />
          <ModalPlayVideo
            onCloseModal={this.onCloseModal.bind(this)}
            link={this.state.link}
            visible={this.state.visible}
          />
          <ModalPlayVideoIntroduction
            onCloseModalIntroduction={this.onCloseModalIntroduction.bind(this)}
            link={this.state.linkIntroduction}
            visible={this.state.visibleIntroduction}
          />
          <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={450}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route exact path="/" render={(props) =>
                    <PageHome {...props}
                      onOpenModal={this.onOpenModal.bind(this)}
                      onOpenModalIntroduction={this.onOpenModalIntroduction.bind(this)}
                    />}
                  />
                  <Route path="/info" component={PageInfo} />
                  <Route path="/music" component={PageMusique} />
                  <Route exact path="/events" component={PageEvents} />
                  <Route path="/events/:id" component={PageEventDetails} />
                  <Route exact path="/images" component={PageImages} />
                  <Route path="/images/:id" component={PageImagesDetails} />
                  <Route path="/doclist" render={(props) => <PageDocList {...props} onOpenModal={this.onOpenModal.bind(this)} />} />
                  <Route component={NoMatch} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
          <Footer onOpenModal={this.onOpenModal.bind(this)} />

        </Grid>
        {this.state.visible &&
          <Helmet>
            <style>{'.light, .shadow, .lightclick, .cursor {display: none}'}</style>
          </Helmet>
        }
        {this.state.visibleIntroduction &&
          <Helmet>
            <style>{'.light, .shadow, .lightclick, .cursor {display: none}'}</style>
          </Helmet>
        }
      </div>
    );
  }
}

export default withNamespaces('common')(App); 