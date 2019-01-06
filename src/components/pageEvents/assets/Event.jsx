import React, { Component } from "react";

class Event extends Component {
  render() {
    return (
      <div className="container">
        <div className="parentZoomIn">
            <div
              className="childZoomIn"
              style={{
                backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url("${this.props.eventObject.image}")`,
              }}
            >
              <div className="text">
                <p>{this.props.eventObject.title},</p>
                <p>{this.props.eventObject.adress.place},</p>
                <p>{this.props.eventObject.adress.city}</p>
                <p>{this.props.eventObject.date.start} > {this.props.eventObject.date.end}</p>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
export default Event;
