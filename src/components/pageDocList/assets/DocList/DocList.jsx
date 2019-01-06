import React, { Component, Fragment } from 'react';
import Media from "react-media";
import Vimeo from '@u-wave/react-vimeo';

import ToggleBox from "../../../toggleBox/ToggleBox"

class DocList extends Component {

    render() {
        return (
            <Fragment>
                <Media query="(max-width: 700px)" render={() => (
                    <ToggleBox title={this.props.videoObject.title.fr} duration={this.props.videoObject.duration} id={this.props.videoObject.id}>
                        <div className="containerVideoConcert">
                            <Vimeo video={this.props.videoObject.url.fr} className="video" volume={1} showPortrait={false} showTitle={false} showByline={false}/>
                        </div>
                        <h2>{this.props.videoObject.quote.fr}</h2>
                        <p>{this.props.videoObject.legend.fr}</p>
                    </ToggleBox>

                )} />
                <Media query="(min-width: 701px)" render={() => (
                    <div className="videoTitle js-click"
                        onMouseEnter={() => this.props.docHover(this.props.videoObject.id)}
                        onMouseLeave={() => this.props.docHover("introduction")}
                        onClick={() => this.props.onOpenModal(this.props.videoObject.url.fr)}
                    >
                        <h3 className="itemsColor snapCursor" data-snap-scale="3.5">{this.props.videoObject.title.fr}</h3>
                        <p>{this.props.videoObject.duration}</p>
                    </div>
                )} />
            </Fragment>
        );
    }
}

export default DocList;