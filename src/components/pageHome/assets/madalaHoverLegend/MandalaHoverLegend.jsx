import React, { Component } from 'react';
import { videos } from "../../../data";

class MandalaHoverLegend extends Component {
    render() {
        const { id } = this.props;
        let video = videos[id];
        if (video){
            return (
                <div className="mandalaHoverLegend">
                    <h2>{video.title.fr}</h2>
                    <h4>"{video.quote.fr}"</h4>
                    <p>{video.legend.fr} / {video.duration}</p>
                </div>
            );
        }else{
            return(
                <div className="mandalaHoverLegend">
                </div>
            )
        }
    }
}

export default MandalaHoverLegend;