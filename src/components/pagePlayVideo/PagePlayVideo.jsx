import React, { Component, Fragment } from 'react';
import Vimeo from '@u-wave/react-vimeo';
import { videos } from "../data";
import { Helmet } from 'react-helmet';


class PagePlayVideo extends Component {

    render() {
        return (
            <Fragment>
                <Helmet>
                    <style>{'html{background-color: black;} body{ background-color: black; max-height: 100vh} .App{padding: 0} .container-fluid{padding: 0} .navbar{display: none} .containerFooter{display: none} .light{display: none !important} .shadow{display: none !important} .lightclick{display: none !important}'}</style>
                </Helmet>
                <div className="containerVideoPage">
                    <Vimeo video={this.props} volume={0} background={true} className="video" />
                </div>
            </Fragment>
        );
    }
}

export default PagePlayVideo;