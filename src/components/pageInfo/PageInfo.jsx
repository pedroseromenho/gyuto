import React, { Component, Fragment } from "react";
// import { Helmet } from "react-helmet";
import { Row, Col } from "react-flexbox-grid";
import InfoIndex from "./assets/infoIndex/InfoIndex";
import InfoText from "./assets/infoText/InfoText";
import { info } from "../data";
import ToggleBox from "../toggleBox/ToggleBox";
import ToggleBoxChild from "../toggleBox/ToggleBoxChild";
import Media from "react-media";

import { withNamespaces } from 'react-i18next';


class PageInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0
    };
  }

  makeActive = id => {
    this.setState({
      id
    });
  };

  componentDidMount() {
    document.title = this.props.t('nav.info');
  }

  render() {
    return (
      <Fragment>
        <Media
          query="(max-width: 700px)"
          render={() =>
            info.map(inf => {
              return (
                <div key={inf.id} className="InfoMobileCtr">
                  <ToggleBox title={inf.index_title + " " + inf.title.fr} >
                    <Row className="infoContainer">
                      {inf.paragraphes.map(para => {
                        return (
                          <Col
                            xs={12}
                            sm={12}
                            md={12}
                            lg={12}
                            className="infoCol"
                            key={para.id}
                          >
                            <p>{para.text.fr}</p>
                            {para.galery &&
                              para.galery.length > 0 &&
                              para.galery.map(gal => {
                                return (
                                  <img
                                    key={gal.image.id}
                                    src={gal.image.url}
                                    alt={gal.image.title.fr}
                                  />
                                );
                              }
                              )}
                          </Col>
                        );
                      })}
                    </Row>
                    {inf.sub_category &&
                      inf.sub_category.length > 0 &&
                      inf.sub_category.map(sub => {
                        return (
                          <Fragment key={sub.id}>
                            <ToggleBoxChild title={sub.index_title + " " + sub.title.fr}>
                              <Row className="infoContainer">
                                {sub.paragraphes.map(
                                  para => {
                                    return (
                                      <Col
                                        xs={12}
                                        sm={12}
                                        md={12}
                                        lg={12}
                                        className="infoCol"
                                        key={para.id}
                                      >
                                        <p>
                                          {para.text.fr}
                                        </p>
                                        {para.galery &&
                                          para.galery.length > 0 &&
                                          para.galery.map(
                                            gal => {
                                              return (
                                                <img
                                                  key={gal.image.id}
                                                  src={gal.image.url}
                                                  alt={gal.image.title.fr}
                                                />
                                              );
                                            }
                                          )}
                                      </Col>
                                    );
                                  }
                                )}
                              </Row>
                              {sub.sub_category &&
                                sub.sub_category.length > 0 &&
                                sub.sub_category.map(
                                  subsub => {
                                    return (
                                      <ToggleBoxChild
                                        key={subsub.id}
                                        title={subsub.index_title + " " + subsub.title.fr}
                                      />
                                    );
                                  }
                                )}
                            </ToggleBoxChild>
                          </Fragment>
                        );
                      })}
                  </ToggleBox>
                </div>
              );
            })
          }
        />
        <Media
          query="(min-width: 701px)"
          render={() => (
            <Fragment>
              <Row className="pageInfo">
                <InfoIndex
                  info={info}
                  active={this.makeActive}
                  id={this.state}
                />
                <InfoText info={info} id={this.state} />
              </Row>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default withNamespaces('common')(PageInfo);