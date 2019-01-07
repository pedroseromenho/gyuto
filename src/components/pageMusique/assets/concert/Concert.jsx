import React, { Component, Fragment } from 'react';
import Vimeo from '@u-wave/react-vimeo';
import { withNamespaces } from 'react-i18next';

class Concert extends Component {

    render() {
        return (
            <Fragment>
                <h3>&nbsp;</h3>
                {/* <h3>{this.props.t('musicPage.concert')}</h3> */}
                <div className="containerVideoConcert">
                    <Vimeo video={this.props.musicObject.video.url.fr} className="video" volume={1} showPortrait={false} showTitle={false} showByline={false} />
                </div>
                <h5>{this.props.musicObject.video.legend.fr}</h5>
            </Fragment>
        );
    }
}

export default withNamespaces('common')(Concert);