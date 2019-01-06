import React, { Component, Fragment } from 'react';
import { music } from "../../../data.js";
import ToggleBox from "../../../toggleBox/ToggleBox";
import Media from "react-media";
import { withNamespaces } from 'react-i18next';
class Albums extends Component {

    render() {
        return (
            <Fragment>
                <Media query="(max-width: 700px)" render={() => (
                    <Fragment>
                        <ToggleBox title={this.props.t('musicPage.albums')} duration={""}>
                            {music.map(musicItem => {
                                return (
                                    musicItem.albums.map(album => {
                                        return (
                                            <div key={album.id} onClick={() => this.props.getAlbum(album.id)} className="albumContainer">
                                                <img src={album.cover} className="albumImage" alt={album.title} />
                                                <div className="albumOrderContainer">
                                                    <a href={album.url_order} target="blank" className="snapCursor albumOrderButton" data-snap-scale="3.5">{this.props.t('musicPage.order')}</a>
                                                </div>
                                            </div>
                                        );
                                    })
                                )
                            })}
                        </ToggleBox>
                    </Fragment>
                )} />
                <Media query="(min-width: 701px)" render={() => (
                    <Fragment>
                        <h3>{this.props.t('musicPage.albums')}</h3>
                        {music.map(musicItem => {
                            return (
                                musicItem.albums.map(album => {
                                    return (
                                        <div key={album.id} onClick={() => this.props.getAlbum(album.id)} className="albumContainer">
                                            <img src={album.cover} className="albumImage" alt={album.title} />
                                            <div className="albumOrderContainer">
                                                <a href={album.url_order} target="blank" className="snapCursor albumOrderButton" data-snap-scale="3.5">{this.props.t('musicPage.order')}</a>
                                            </div>
                                        </div>
                                    );
                                })
                            )
                        })}
                    </Fragment>
                )} />
            </Fragment>
        );
    }
}

export default withNamespaces('common')(Albums);