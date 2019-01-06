import React, { Component } from 'react';
import FooterNav from "./assets/footerNav/FooterNav";
import { videos } from "../data";

class Footer extends Component {

    randomModal() {
        let vid = Math.floor(Math.random() * videos.length);
        this.props.onOpenModal(videos[vid].url.fr);
    }

    render() {
        return (
            <FooterNav randomModal={this.randomModal.bind(this)} />
        );
    }
}

export default Footer;