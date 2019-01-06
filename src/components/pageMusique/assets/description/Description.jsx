import React, { Component, Fragment } from 'react';
import Media from "react-media";
import ToggleBox from "../../../toggleBox/ToggleBox";

class Description extends Component {

    render() {
        return (
            <Fragment>
                <Media query="(max-width: 700px)" render={() => (
                    <ToggleBox title={this.props.musicObject.text.title.fr} duration={""}>
                        <p className="musicTextDescription">{this.props.musicObject.text.text.fr}</p>
                    </ToggleBox>
                )} />
                <Media query="(min-width: 701px)" render={() => (
                    <Fragment>
                        <h3 className="musicTextTitle">{this.props.musicObject.text.title.fr}</h3>
                        <p>{this.props.musicObject.text.text.fr}</p>
                    </Fragment>
                )} />
            </Fragment>
        );
    }
}

export default Description;