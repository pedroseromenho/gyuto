import React, { Component, Fragment } from 'react';
import { music } from "../../../data.js";
import ToggleBox from "../../../toggleBox/ToggleBox";
import Media from "react-media";
import { withNamespaces } from 'react-i18next';

class Musique extends Component {

    constructor() {
        super();
        this.state = {
            playingUrl: '',
            playing: false,
            audio: null,
            selectedId: ''
        };

        this.playAudio = this.playAudio.bind(this);
    }


    playAudio(url, id) {
        let audio = new Audio(url);
        this.setState({ selectedId: id })
        if (!this.state.playing) {
            audio.play();
            this.setState({
                playing: true,
                playingUrl: url,
                audio
            })
        } else {
            if (this.state.playingUrl === url) {
                this.state.audio.pause();
                this.setState({
                    playing: false,


                });
            } else {
                this.state.audio.pause();
                audio.play();
                this.setState({
                    playingUrl: url,
                    playing: true,
                    audio
                })
            }
        }
    }

    render() {
        return (
            <Fragment>
                <Media query="(max-width: 700px)" render={() => (
                    <ToggleBox title={this.props.t('musicPage.musics')} duration={""}>
                        {music.map(musicItem => {
                            return (
                                musicItem.albums.map(album => {
                                    if (this.props.selectAlbum === '' || this.props.selectAlbum === album.id) {
                                        return (
                                            <ul key={album.id}>
                                                <ul>
                                                    {album.musics.map((music, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <div className="musicName">
                                                                    <h5>{music.title}</h5>
                                                                </div>
                                                                <div className="musicData">
                                                                    <p>{music.duration}</p>
                                                                    <a href={music.url} download className="snapCursor" data-snap-scale="3.5">
                                                                        <img src="./assets/images/download.svg" alt="download" />
                                                                    </a>
                                                                    <img src={(this.state.selectedId === album.id + music.id && this.state.playing === true) ? './assets/images/pause.svg' : './assets/images/play.svg'} className="status snapCursor" onClick={() => this.playAudio(music.url, album.id + music.id)} alt="play" />
                                                                </div>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </ul>
                                        );
                                    }
                                })
                            )
                        })}
                    </ToggleBox>
                )} />
                <Media query="(min-width: 701px)" render={() => (
                    <Fragment>
                        <h3>{this.props.t('musicPage.musics')}</h3>
                        {music.map(musicItem => {
                            return (
                                musicItem.albums.map(album => {
                                    if (this.props.selectAlbum === '' || this.props.selectAlbum === album.id) {
                                        return (
                                            <ul key={album.id}>
                                                <ul>
                                                    {album.musics.map((music, index) => {
                                                        return (
                                                            <li key={index}>
                                                                {/* <audio title={music.title} src={music.url} controls /> */}
                                                                <div className="musicName">
                                                                    <h5>{music.title}</h5>
                                                                </div>
                                                                <div className="musicData">
                                                                    <p>{music.duration}</p>
                                                                    <a href={music.url} download className="snapCursor" data-snap-scale="2">
                                                                        <img src="./assets/images/download.svg" alt="download" />
                                                                    </a>
                                                                    <img src={(this.state.selectedId === album.id + music.id && this.state.playing === true) ? './assets/images/pause.svg' : './assets/images/play.svg'} className="status snapCursor" onClick={() => this.playAudio(music.url, album.id + music.id)} data-snap-scale="2" alt="play" />
                                                                </div>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </ul>
                                        );
                                    }
                                })
                            )
                        })}
                    </Fragment>
                )} />
            </Fragment>
        );
    }

}

export default withNamespaces('common')(Musique);