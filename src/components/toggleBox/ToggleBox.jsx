import React, { Component } from 'react';

class ToggleBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false,
        };
        this.toggleBox = this.toggleBox.bind(this);
    }

    toggleBox() {
        const { isOpened } = this.state;
        this.setState({
            isOpened: !isOpened,

        });
    }

    render() {
        const { title, children, duration } = this.props;
        const { isOpened } = this.state;
        return (
            <div className="box">
                <div className="boxTitle" onClick={this.toggleBox}>
                    <h1>{title}</h1>
                    <p>{duration}</p>
                </div>
                {isOpened && children && (
                    <div className="boxContent">
                        {children}
                    </div>
                )}
            </div>
        );
    }
}

export default ToggleBox;