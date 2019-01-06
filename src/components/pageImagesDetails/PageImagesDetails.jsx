import React, { Component, Fragment } from "react";
import { images } from "../data";
import { Row, Col } from "react-flexbox-grid";
import Media from "react-media";
import { NavLink } from "react-router-dom";

import { withNamespaces } from 'react-i18next';

class PageImagesDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
        };
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.history.goBack();
    }


    onNextPic = () => {
        const id = `${this.props.match.params.id}`;
        const albumLength = images[id].galery.image.length;
        if (this.state.activeIndex === albumLength - 1) {
            this.setState({
                activeIndex: 0,
            })
        } else {
            this.setState({
                activeIndex: this.state.activeIndex + 1
            })
        }
    }

    onPreviousPic = () => {
        const id = `${this.props.match.params.id}`;
        const albumLength = images[id].galery.image.length;
        if (this.state.activeIndex === 0) {
            this.setState({
                activeIndex: albumLength - 1,
            })
        } else {
            this.setState({
                activeIndex: this.state.activeIndex - 1
            })
        }
    };

    componentDidMount() {
        document.title = this.props.t('nav.images');
    }

    render() {
        const id = `${this.props.match.params.id}`;
        if (images[id]) {
            return (
                <Fragment>
                    <Media query="(max-width: 769px)" render={() => (
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <div className="pageImageWrapper">
                                    <div className="imageContainer">
                                        <img src={images[id].galery.image[this.state.activeIndex].url} alt={images[id].galery.image[this.state.activeIndex].title.fr} />
                                        <h2>{images[id].galery.image[this.state.activeIndex].title.fr}</h2>
                                        <p>{images[id].galery.image[this.state.activeIndex].legend.fr}</p>
                                    </div>
                                    <ul className="navigationMobile">
                                        <li onClick={this.onPreviousPic}><img src="../assets/images/right-arrow.svg" alt="prev" width={20} /></li>
                                        <li onClick={this.goBack}>{this.props.t('nav.back')}</li>
                                        <li onClick={this.onNextPic} style={{ paddingRight: "15px" }}><img src="../assets/images/left-arrow.svg" alt="prev" width={20} /></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    )} />
                    <Media query="(min-width: 768px)" render={() => (
                        <Fragment>
                            <Row>
                                <Col xs={0} sm={0} md={1} lg={1} style={{ alignItems: "center", display: "flex", justifyContent: "center" }} className="colImagesDetails">
                                    <img src="../assets/images/left.svg" alt="prev" onClick={this.onPreviousPic} width={40} className="snapCursor" data-snap-scale="3.5" />
                                </Col>
                                <Col xs={12} sm={12} md={10} lg={10}>
                                    <div className="pageImageWrapper">
                                        <div className="imageContainer">
                                            <img src={images[id].galery.image[this.state.activeIndex].url} alt={images[id].galery.image[this.state.activeIndex].title.fr} />
                                            <h2>{images[id].galery.image[this.state.activeIndex].title.fr}</h2>
                                            <p>{images[id].galery.image[this.state.activeIndex].legend.fr}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={0} sm={0} md={1} lg={1} style={{ alignItems: "center", display: "flex", justifyContent: "center" }} className="colImagesDetails">
                                    <img src='../assets/images/right.svg' alt="next" width={40} onClick={this.onNextPic} className="snapCursor" data-snap-scale="3.5" />
                                </Col>
                            </Row>
                            <ul className="navigationMobile">
                                <NavLink to="/images" className="itemsColor snapCursor" data-snap-scale="3.5">
                                    <li className="snapCursor" data-snap-scale="3.5">{this.props.t('nav.back')}</li>
                                </NavLink>
                            </ul>
                        </Fragment>
                    )} />
                </Fragment>
            );
        } else {
            return (
                <Fragment>
                    <div className="pageNotFoundCtr">
                        <p>{this.props.t('nav.notFound')}</p>
                        <p><NavLink to={"/images"} className="snapCursor js-click" data-snap-scale="3.5">
                            {this.props.t('nav.backToWebsite')}
                        </NavLink></p>
                    </div>
                </Fragment>
            )
        }
    }
}

export default withNamespaces('common')(PageImagesDetails);