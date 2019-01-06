import React, { Component, Fragment } from "react";
import { videos } from "../data";
import { Col } from "react-flexbox-grid";
import DocList from "./assets/DocList/DocList";
import Preview from "./assets/Preview/Preview";

import { translate } from 'react-i18next';
class PageDoclist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: 'introduction'
    }
  }

  docHover(selectedId) {
    this.setState({
      selectedId
    })
  }

  onOpenModal(params) {
    this.props.onOpenModal(params)
  }

  componentDidMount() {
    document.title = this.props.t('nav.doclist');
  }

  render() {
    const listVideos = videos.map(video => {
      return (
        <Col key={video.id} className="docListCol" xs={12} sm={12} md={12} lg={12}>
          <DocList videoObject={video} docHover={this.docHover.bind(this)} onOpenModal={this.onOpenModal.bind(this)} />
        </Col>
      );
    });

    return (
      <Fragment>
        <div className="docListPageContainer">
          <div className="docListContainer">
            {listVideos}
          </div>
          <Preview
            videoData={videos[this.state.selectedId - 1]}
            selected={this.state.selectedId}
          />
        </div>
      </Fragment>
    );
  }
}

export default translate('common')(PageDoclist);
