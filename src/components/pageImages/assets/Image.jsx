import React, { Component } from "react";

class Image extends Component {
    render() {
        return (
            <div className="galeries container">
                <div className="parentZoomIn">
                    <div
                        className="childZoomIn"
                        style={{
                            backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url("${
                                this.props.imagesObject.cover
                                }")`
                        }}
                    >
                        <div className="text">
                            <p>{this.props.imagesObject.title.fr}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Image;