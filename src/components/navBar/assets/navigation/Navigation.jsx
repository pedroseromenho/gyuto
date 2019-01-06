import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Media from "react-media";

import { withNamespaces } from 'react-i18next';

class Navigation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menu: false,
      selectOpen: false
    };
    this.openSelect = this.openSelect.bind(this);
  }

  toggleMenu(state) {
    this.setState({ menu: !this.state.menu })
  }

  openSelect() {
    this.setState({
      selectOpen: !this.state.selectOpen
    })
  }


  render() {
    const { i18n } = this.props;
    return (
      <Fragment>
        <Media query="(max-width: 700px)" render={() => (
          <nav className="nav-mobile">
            <div className="backgroundMobile" />
            <div className={this.state.menu ? 'open' : ''}>
              <label htmlFor="menu-toggler-input" className="menu-toggler" onClick={() => this.toggleMenu()}>
                <span className="menu-toggler__line"></span>
                <span className="menu-toggler__line"></span>
                <span className="menu-toggler__line"></span>
              </label>
              <div className="side-bar">
                <ul className="side-menu">
                  <li className="side-menu__item" onClick={() => this.toggleMenu()}><Link to="/doclist">{this.props.t('nav.doclist')}</Link></li>
                  <li className="side-menu__item" onClick={() => this.toggleMenu()}><Link to="/info">{this.props.t('nav.info')}</Link></li>
                  <li className="side-menu__item" onClick={() => this.toggleMenu()}><Link to="/music">{this.props.t('nav.music')}</Link></li>
                  <li className="side-menu__item" onClick={() => this.toggleMenu()}><Link to="/images">{this.props.t('nav.images')}</Link></li>
                  <li className="side-menu__item" onClick={() => this.toggleMenu()}><Link to="/events">{this.props.t('nav.events')}</Link></li>
                </ul>
                <ul className="fotterMenu">
                  {/* Pour afficher le menu FR/EN, il faut enlever le display none ci-dessous */}
                  <li><div className="select" style={{ display: "none" }}>
                    <a onClick={() => i18n.changeLanguage('fr')} className="itemsColor">FR</a>
                    <a onClick={() => i18n.changeLanguage('en')} className="itemsColor">EN</a>
                  </div></li>
                  <li><p>{this.props.t('nav.rights')} {new Date().getFullYear()}</p></li>
                </ul>
              </div>
            </div>
          </nav>
        )} />

        <Media query="(min-width: 701px)" render={() => (
          <nav>
            <ul className="menu">
              <li><Link to="/info" className="itemsColor snapCursor homelinkhover js-click" data-snap-scale="3.5">{this.props.t('nav.info')}</Link></li>
              <li><Link to="/music" className="itemsColor snapCursor homelinkhover js-click" data-snap-scale="3.5">{this.props.t('nav.music')}</Link></li>
              <li><Link to="/images" className="itemsColor snapCursor homelinkhover js-click" data-snap-scale="3.5">{this.props.t('nav.images')}</Link></li>
              <li><Link to="/events" className="itemsColor snapCursor homelinkhover js-click" data-snap-scale="3.5">{this.props.t('nav.events')}</Link></li>
              {/* Pour afficher le menu FR/EN, il faut enlever le display none ci-dessous, ensuite activer le padding-right: 40px du .menu li&:nth-last-child(2) dans _navigation.scss */}
              <li className="itemsColor" style={{ display: "none" }}>
                <a onClick={() => i18n.changeLanguage('fr')} data-snap-scale="3" className="itemsColor snapCursor homelinkhover js-click">FR</a>
                <a onClick={() => i18n.changeLanguage('en')} data-snap-scale="3" className="itemsColor snapCursor homelinkhover js-click">EN</a>
              </li>
            </ul>
          </nav>
        )} />
      </Fragment>
    )
  }
}

export default withNamespaces('common')(Navigation);