
import React, { Component } from 'react';
import Navigation from "./assets/navigation/Navigation";
import Logo from "./assets/logo/Logo";
class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <Logo />
                <Navigation changeLanguage={this.props.changeLanguage} {...this.props} />
            </div>
        );
    }
}

export default NavBar;