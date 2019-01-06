import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withNamespaces } from 'react-i18next';

class FooterNav extends Component {

  randomModal() {
    this.props.randomModal()
  }


  render() {
    return (
      <div className="containerFooter">
        <ul className="containerFooterNav">
          <li>
            <a onClick={this.randomModal.bind(this)} className="itemsColor snapCursor homelinkhover js-click" data-snap-scale="3.5">{this.props.t('nav.random')}</a>
          </li>
          <li>
            <Link to="/doclist" className="itemsColor snapCursor homelinkhover js-click" data-snap-scale="3.5">{this.props.t('nav.doclist')}</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withNamespaces('common')(FooterNav);
