import React, { Component, Fragment } from "react";
import { events } from "../data";
import { Row, Col } from "react-flexbox-grid";
import { NavLink } from "react-router-dom";

import { withNamespaces } from 'react-i18next';

class PageEventDetails extends Component {

  componentDidMount() {
    document.title = this.props.t('nav.events');
  }

  render() {
    const id = parseInt(this.props.match.params.id);
    const prev = (id === 0 ? id : id - 1);
    const next = id + 1;

    if (events[id]) {
      return (
        <Fragment>
          <Row>
            <Col xs={0} sm={0} md={2} lg={3} />
            <Col xs={12} sm={12} md={8} lg={6} className="colEventDetails">
              <div className="eventDetailsContainer">
                <div className="headingWrapper">
                  <h2>{events[id].title}</h2>
                  <h3>
                    {this.props.t('eventsString.from')} {events[id].date.start} {this.props.t('eventsString.to')}  {events[id].date.start} {this.props.t('eventsString.fromBis')} {" "}
                    {events[id].hour.start} {this.props.t('eventsString.toBis')}  {events[id].hour.end}, {this.props.t('eventsString.in')} {" "}
                    {events[id].adress.city}
                  </h3>
                </div>

                <img src={events[id].image} alt="Event cover" />
                <p>{events[id].description.fr}</p>
                <p className="bold">
                  {this.props.t('eventsString.place')} : {events[id].adress.place} , {events[id].adress.number}{" "}
                  {events[id].adress.street}, {events[id].adress.zipcode}{" "}
                  {events[id].adress.city}, {events[id].adress.country}
                </p>
                <a href={events[id].url} target="blank">{this.props.t('nav.moreInfo')}</a>
              </div>
            </Col>
            <Col xs={0} sm={0} md={2} lg={3} />
          </Row>
          <ul className="navigationMobile">
            <NavLink to={"/events/" + prev} className="snapCursor js-click" data-snap-scale="3.5">
              <li>
                <img src="../assets/images/right-arrow.svg" alt="prev" width={20} />
              </li>
            </NavLink>
            <NavLink to="/events" className="itemsColor snapCursor js-click" data-snap-scale="3.5">
              <li className="snapCursor" data-snap-scale="3.5">{this.props.t('nav.back')}</li>
            </NavLink>
            {events[id + 1] &&
              <NavLink to={"/events/" + next} className="snapCursor js-click" data-snap-scale="3.5">
                <li style={{ paddingRight: "15px" }}>
                  <img src="../assets/images/left-arrow.svg" alt="prev" width={20} />
                </li>
              </NavLink>
            }
          </ul>
        </Fragment >
      );
    } else {
      return (
        <Fragment>
          <div className="pageNotFoundCtr">
            <p>
              {this.props.t('nav.notFound')}
            </p>
            <p>
              <NavLink to={"/events/0"} className="snapCursor js-click" data-snap-scale="3.5">
                {this.props.t('nav.backToWebsite')}
              </NavLink>
            </p>
          </div>
        </Fragment>
      )
    }
  }
}

export default withNamespaces('common')(PageEventDetails);