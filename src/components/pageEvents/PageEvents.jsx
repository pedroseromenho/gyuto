import React, { Component, Fragment } from "react";
import { events } from "../data";
import Event from "./assets/Event";
import { Row, Col } from "react-flexbox-grid";
import { Link, NavLink } from "react-router-dom";
import { withNamespaces } from 'react-i18next';


class PageEvents extends Component {

  componentDidMount() {
    document.title = this.props.t('nav.events');
  }

  render() {
    const listEvents = events.map(event => {
      if (event.id) {
        return (
          <Col key={event.id} xs={12} sm={6} md={6} lg={4}>
            <Link to={`/events/${event.id}`}>
              <Event eventObject={event} />
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
    });

    return (
      <Fragment>
        <Row className="rowMax">{listEvents}</Row>
      </Fragment>
    );
  }
}

export default withNamespaces('common')(PageEvents);
