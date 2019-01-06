import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Vimeo from '@u-wave/react-vimeo';
import { introduction } from "../../../data.js";
import { Col, Row } from "react-flexbox-grid";
import { Link } from "react-router-dom";

class PageHomeMobile extends Component {
    render() {
        return (
            <Fragment>
                <Helmet>
                    {/* <title>Gyütö</title> */}
                    <style>{'body { background-color: #f5f5f5; } a.itemsColor{color: black}'}</style>
                </Helmet>
                <Row>
                    <Col xs={12} sm={12} md={0} lg={0} key={introduction.id} className="containerMobile">
                        <Vimeo
                            video={introduction.url}
                            className="video"
                            volume={0}
                        />
                        <h3>{introduction.quote.fr}</h3>
                        <p className="description">{introduction.legend.fr}</p>
                        <div className="buttonContainer">
                            <button type="button" className="button"><Link to="/doclist">Doc List</Link></button>
                        </div>
                        {/* <ul className="fotterMenu">
                            <li><a href="#">FR</a></li>
                        </ul> */}
                    </Col>
                </Row>

            </Fragment>
        );
    }
}

export default PageHomeMobile;