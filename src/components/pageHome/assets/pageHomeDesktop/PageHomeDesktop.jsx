import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Col, Row } from "react-flexbox-grid";
import Mandala from "../mandala/Mandala";
import MandalaHoverLegend from "../madalaHoverLegend/MandalaHoverLegend";
import MandalaHoverGif from "../mandalaHoverGif/MandalaHoverGif"
import MandalaLegend from "../mandalaLegend/MandalaLegend";
import Media from "react-media";
import TweenMax from 'gsap';

class PageHomeDesktop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedId: "",
            selectedSymbole: "",
            play: false,
            playedIntroduction: false
        }

        this.url = "../assets/son/musicPageHome.wav";
        this.audio = new Audio(this.url);
    }

    getId(id) {
        this.setState({
            selectedId: id
        })
    }

    getVideoUrl(params) {
        this.props.onOpenModal(params);
    }

    getVideoUrlIntroduction(params) {
        this.props.onOpenModalIntroduction(params);
    }


    getSymbole(symbole) {
        this.setState({
            selectedSymbole: symbole
        })
    }

    togglePlay() {
        if (this.state.play) {
            this.audio.pause()
            this.setState({
                play: false
            });
        } else {
            this.audio.play();
            this.setState({
                play: true
            });
        }
    }

    componentDidMount() {
        var $bigBall = document.querySelector('.cursor__ball--big');
        var $smallBall = document.querySelector('.cursor__ball--small');
        var $hoverables = document.querySelectorAll('.hoverable');
        var $homelinkhover = document.querySelectorAll('.homelinkhover');
        document.body.addEventListener('mousemove', onMouseMove);
        for (var i = 0; i < $hoverables.length; i++) {
            $hoverables[i].addEventListener('mouseenter', onMouseHover);
            $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
        }
        document.body.addEventListener('mousemove', onMouseMove);
        for (var j = 0; j < $homelinkhover.length; j++) {
            $homelinkhover[j].addEventListener('mouseenter', onMouseHover);
            $homelinkhover[j].addEventListener('mouseleave', onMouseHoverOut);
        }
        function onMouseMove(e) {
            TweenMax.to($bigBall, .4, {
                x: e.pageX - 15,
                y: e.pageY - 15
            });

            TweenMax.to($smallBall, .1, {
                x: e.pageX - 5,
                y: e.pageY - 7
            });
        }

        function onMouseHover() {
            TweenMax.to($bigBall, .3, {
                scale: 4
            });
        }
        function onMouseHoverOut() {
            TweenMax.to($bigBall, .3, {
                scale: 1
            });
        }
    }

    render() {
        return (
            <Fragment>
                <Helmet>
                    <style>{' html{background-color: black;} body{ background-color: black; max-height: 100vh} a.itemsColor{color: #f5f5f5; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;} .light{mix-blend-mode: exclusion} .light-inner{background: #f5f5f5 !important} li:nth-child(2)::before{color: #f5f5f5} .containerFooter{background-color: transparent} .menu li:last-child:after{background-image: url("./assets/images/chevron-down-solid-white.svg")}  .light, .shadow, .lightclick{ display: none !important} .select{color: #f5f5f5; font-weight: normal; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;} .cursor{display: block}'}</style>
                </Helmet>
                <Fragment>
                    <Row>
                        <Media query="(min-width: 1111px)" render={() => (
                            <Col xs={3} style={{ paddingLeft: "0px" }}>
                                <MandalaHoverLegend id={this.state.selectedId} />
                            </Col>
                        )} />
                        <Col xs={6}>
                            <div className="svgContainer">
                                <Mandala symbole={this.state.selectedSymbole} getVideoUrlIntroduction={this.getVideoUrlIntroduction.bind(this)} getVideoUrl={this.getVideoUrl.bind(this)} getId={this.getId.bind(this)} />
                            </div>
                        </Col>
                        <Media query="(min-width: 1111px)" render={() => (
                            <Col xs={3} style={{ paddingRight: "0px", height: "90vh" }}>
                                <MandalaHoverGif id={this.state.selectedId} />
                            </Col>
                        )} />
                        <MandalaLegend getSymbole={this.getSymbole.bind(this)} getVideoUrl={this.getVideoUrl.bind(this)} getId={this.getId.bind(this)} />
                        <div className="buttonContainerMute homelinkhover">
                            <button type="button" onClick={this.togglePlay.bind(this)} className="buttonMute homelinkhover">{this.state.play ? 'Mute' : 'Unmute'}</button>
                        </div>
                    </Row>
                </Fragment>

            </Fragment>
        );
    }
}

export default PageHomeDesktop;
