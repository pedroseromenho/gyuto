import React, { Component, Fragment } from "react";
import { music } from "../data";
import { Row, Col } from "react-flexbox-grid";
import Concert from "./assets/concert/Concert";
import Description from "./assets/description/Description";
import Albums from "./assets/albums/Albums";
import Musique from "./assets/musique/Musique";
import { translate } from 'react-i18next';

class PageMusique extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectAlbum: '',
    }
  }
  getAlbum(albumsId) {
    this.setState({ selectAlbum: albumsId })
  }

  componentDidMount() {
    document.title = this.props.t('nav.music');
  }

  render() {
    const musicPage = music.map(musicItem => {
      return (
        <Row key={musicItem.id} className="musicContainer itemsColor">
          <Col xs={12} sm={12} md={6} lg={6} className="musicFirstCol">
            <Concert musicObject={musicItem} />
            <Description musicObject={musicItem} />
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <Albums musicObject={musicItem} getAlbum={this.getAlbum.bind(this)} />
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <Musique musicObject={musicItem} selectAlbum={this.state.selectAlbum} />
          </Col>
        </Row>
      );
    });
    return (
      <Fragment>
        {musicPage}
      </Fragment>
    );
  }
}

export default translate('common')(PageMusique);
