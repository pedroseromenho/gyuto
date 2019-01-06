import React, { Component } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import Vimeo from '@u-wave/react-vimeo';

class ModalPlayVideo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            autoplay: true,
            link: 'https://player.vimeo.com/video/',
            toggleVideo: true,
        };
    }

    hide() {
        this.props.onCloseModal();
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

    render() {
        return (
            <div>
                <Rodal visible={this.props.visible} onClose={() => this.hide()} showCloseButton={true} width={"100vw"}>
                    {this.state.toggleVideo &&
                        <div className="containerVideoModal">
                            <Vimeo video={this.state.link} className="video" volume={1} autoplay={true} paused={!this.props.visible} background={false} />
                        </div>
                    }
                </Rodal>
            </div>);
    }
}

export default ModalPlayVideo;