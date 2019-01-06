import React, { Component, Fragment } from 'react';
import { newAnim, stop } from "../mandala/functions";
import { videos } from "../../../data";

import { withNamespaces } from 'react-i18next';

class MandalaLegend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSymbole: "",
            widthSymbole: 30,
            opacityHistoires: 1,
            opacityTemoignages: 1,
            opacityMusique: 1,
        }
    }

    filterSymboles(symbole) {
        if (this.state.selectedSymbole === symbole.target.value) {
            this.setState({
                selectedSymbole: "",
                opacityHistoires: 1,
                opacityTemoignages: 1,
                opacityMusique: 1,
            })
            this.props.getSymbole("");
            this.filtreLive("");
        } else if (symbole.target.value === "stories") {
            this.setState({
                selectedSymbole: "stories",
                opacityHistoires: 1,
                opacityTemoignages: 0.3,
                opacityMusique: 0.3,
            })
            this.props.getSymbole(symbole.target.value);
            this.filtreLive(symbole.target.value);
        } else if (symbole.target.value === "testimonials") {
            this.setState({
                selectedSymbole: "testimonials",
                opacityHistoires: 0.3,
                opacityTemoignages: 1,
                opacityMusique: 0.3,
            })
            this.props.getSymbole(symbole.target.value);
            this.filtreLive(symbole.target.value);
        } else if (symbole.target.value === "music") {
            this.setState({
                selectedSymbole: "music",
                opacityHistoires: 0.3,
                opacityTemoignages: 0.3,
                opacityMusique: 1,
            })
            this.props.getSymbole(symbole.target.value);
            this.filtreLive(symbole.target.value);
        }
    }


    filtreLive(symbole) {
        newAnim(videos, symbole)
        stop(this.bertrandFiltre.bind(this), videos, symbole);
    }
    bertrandFiltre(id, event) {
        this.props.getId(id);
        if (event === "click") {
            this.props.getVideoUrl(videos[id].url.fr)
        }
    }
    componentDidMount() {
        document.getElementById("borderMandala").addEventListener("mouseenter", () => stop(this.bertrandFiltre.bind(this), videos, this.state.selectedSymbole));
    }
    componentWillUnmount() {
        document.getElementById("borderMandala").removeEventListener("mouseenter", () => stop(this.bertrandFiltre.bind(this), videos, this.state.selectedSymbole));
    }



    render() {
        return (
            <Fragment>
                <ul className="legendMandala">
                    <div id="borderMandala"></div>
                    <li style={{
                        transition: 'opacity 0.3s ease',
                        opacity: this.state.opacityHistoires,
                    }}
                    >
                        <input type="image" id="stories" alt="stories" onClick={this.filterSymboles.bind(this)} src="./assets/images/1.svg" value="stories" width={this.state.widthSymbole} />
                        <label
                            htmlFor="stories"
                        >{this.props.t('categories.stories')}</label>
                    </li>
                    <li style={{
                        transition: 'opacity 0.3s ease',
                        opacity: this.state.opacityTemoignages,
                    }}>
                        <input type="image" id="testimonials" alt="testimonials" onClick={this.filterSymboles.bind(this)} src="./assets/images/2.svg" value="testimonials" width={this.state.widthSymbole} />
                        <label
                            htmlFor="testimonials"
                        >{this.props.t('categories.testimonials')}</label>
                    </li>
                    <li style={{
                        transition: 'opacity 0.3s ease',
                        opacity: this.state.opacityMusique,
                    }}
                    >
                        <input type="image" id="music" alt="music" onClick={this.filterSymboles.bind(this)} src="./assets/images/3.svg" value="music" width={this.state.widthSymbole} />
                        <label
                            htmlFor="music"
                        >{this.props.t('categories.music')}</label>
                    </li>
                </ul>
            </Fragment>
        );
    }
}

export default withNamespaces('common')(MandalaLegend);