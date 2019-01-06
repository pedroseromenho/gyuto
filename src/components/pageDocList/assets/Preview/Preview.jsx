import React, { Component } from 'react';
import { introduction } from "../../../data";
import Vimeo from '@u-wave/react-vimeo';

class Preview extends Component {

    render() {

        let { videoData, selectedId } = this.props;
        if (videoData) {
            return (
                <div className="previewContainer animation">
                    <div style={{ position: "sticky", top: "10px" }}>
                        <div className="gif"
                            style={{
                                backgroundImage: `url("${videoData.gif}")`
                            }}></div>
                        <h2>{videoData.quote.fr}</h2>
                        <p>{videoData.legend.fr}</p>
                    </div>
                </div>
            );
        } else {
            if (selectedId !== 'introduction') {
                return (
                    <div className="previewContainer">
                        <div style={{ position: "sticky", top: "10px" }}>
                            <Vimeo
                                video={introduction.url}
                                className="video"
                                volume={1}
                                showPortrait={false}
                                showTitle={false}
                                showByline={false}
                            />
                            <h2>{introduction.quote.fr}</h2>
                            <p>{introduction.legend.fr}</p>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div>
                        Loading...
                    </div>
                )
            }
        }
    }
}

export default Preview;