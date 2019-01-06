import React, { Component, Fragment } from 'react';
import Vimeo from '@u-wave/react-vimeo';
import { introduction } from "../../../data.js";
import { Col, Row } from "react-flexbox-grid";
import { Link } from "react-router-dom";

class PageHomeMobile extends Component {
    render() {
        return (
            <Fragment>
                <Row>
                    <Col xs={12} sm={12} md={0} lg={0} key={introduction.id} className="containerMobile">
                        <Vimeo
                            video={introduction.url}
                            className="video"
                            volume={0}
                            showPortrait={false}
                            showTitle={false}
                            showByline={false}
                        />
                        <h3>{introduction.quote.fr}</h3>
                        <p className="description">{introduction.legend.fr}</p>
                        <div className="buttonContainer">
                            <button type="button" className="button"><Link to="/doclist">Doc List</Link></button>
                        </div>
                    </Col>
                </Row>

            </Fragment>
        );
    }
}

export default PageHomeMobile;