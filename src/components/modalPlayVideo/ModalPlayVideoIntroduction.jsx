import React, { Component } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import Vimeo from '@u-wave/react-vimeo';

class ModalPlayVideoIntroduction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            autoplay: true,
            link: 'https://player.vimeo.com/video/',
            toggleVideo: true,
            volume: true,
        };
    }
    hide() {
        this.props.onCloseModalIntroduction();
    }
    changeVideo() {
        this.setState({ toggleVideo: false });
        setTimeout(() => {
            this.setState({ toggleVideo: true });
        }, 200)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.link !== this.state.link && nextProps.link !== "" && nextProps.link) {
            this.changeVideo()
            this.setState({ link: nextProps.link })
        }
    }

    togglePlay() {
        this.setState ({volume: !this.state.volume})
    }

    render() {
        return (
            <div>
                <Rodal visible={this.props.visible} onClose={() => this.hide()} showCloseButton={false} width={"100vw"} leaveAnimation="fade" duration={1000} closeOnEsc={true}>
                    {this.state.toggleVideo &&
                        <div className="containerVideoModal">
                            <Vimeo video={this.state.link} className="video" volume={this.state.volume ? 0 : 1} autoplay={true} paused={!this.props.visible} background={false} />
                            <div className="introButtonContainer">
                                <button type="button" onClick={() => this.hide()}>skip</button>
                                <button type="button" onClick={this.togglePlay.bind(this)}>{this.state.volume ? 'Unmute' : 'Mute'}</button>
                            </div>
                        </div>
                    }
                </Rodal>
            </div>);
    }
}
export default ModalPlayVideoIntroduction;