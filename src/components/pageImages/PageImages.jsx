import React, { Component, Fragment } from "react";
import { Helmet } from 'react-helmet';
import { images } from "../data";
import { Row, Col } from "react-flexbox-grid";
import { Link, NavLink } from "react-router-dom";
import Image from "./assets/Image";

import { withNamespaces } from 'react-i18next';

class PageImages extends Component {

  componentDidMount() {
    document.title = this.props.t('nav.images');
  }

  render() {
    const listGaleries = images.map(i => {
      if (i.id) {
        return (
          <Col key={i.id} xs={12} sm={6} md={6} lg={4}>
            <Link to={`/images/${i.id}`}>
              <Image imagesObject={i} />
            </Link>
          </Col>
        );
      } else {
        return (
          <Fragment>
            <div className="pageNotFoundCtr">
              <p>
                {this.props.t('nav.soon')}
              </p>
              <p>
                <NavLink to={"/doclist"} className="snapCursor js-click" data-snap-scale="3.5">
                  {this.props.t('nav.doclistPage')}
                </NavLink>
              </p>
            </div>
          </Fragment>
        )
      }
    })

    return (
      <Fragment>
        <Row className="imagesRow">{listGaleries}</Row>
      </Fragment>
    );
  }
}

export default withNamespaces('common')(PageImages);