import React, { Component, Fragment } from 'react';
import { NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { withNamespaces } from 'react-i18next';

class NoMatch extends Component {
    render() {
        return (
            <Fragment>
                <Helmet>
                    <style>{'body { background-color: #f5f5f5 !important; } a.itemsColor{color: black} .cursor{display:none}'}</style>
                    <title>404</title>
                </Helmet>
                <div className="pageNotFoundCtr">
                    <p>{this.props.t('nav.pageNotFound')}</p>
                    <p><NavLink to={"/"} className="snapCursor" data-snap-scale="3.5">
                        {this.props.t('nav.backToWebsite')}
                    </NavLink></p>
                </div>
            </Fragment>

        );
    }
}

export default withNamespaces('common')(NoMatch);