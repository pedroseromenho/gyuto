import React, { Component } from 'react';
import { videos } from "../../../data";

class MandalaHoverGif extends Component {
    render() {
        const { id } = this.props;
        let video = videos[id];       
        if(video){
            return (
                <div className="mandalaHoverGif">
                    <img src={video.gif} alt="" srcSet="" />
                </div>
            );
        }else{
            return(
                <div className="mandalaHoverGif">
                </div>
            )
        }
    }
}

export default MandalaHoverGif;