import React, { Component, Fragment } from "react";
import { Col, Row } from "react-flexbox-grid";
import Media from "react-media";
class InfoText extends Component {
    render() {
        let paragraphes = "";
        const id = this.props.id.id.toString();

        if (id.length === 1 && this.props.info[id].paragraphes) {
            paragraphes = this.props.info[id].paragraphes.map(para => {
                if (para.title_paragraphe) {
                    return (
                        <Fragment key={"para" + para.id}>
                            <Col xs={12} className="paragraphes">
                                <h5>{para.title_paragraphe.fr}</h5>
                                <p>{para.text.fr}</p>
                            </Col>
                            <Col xs={12}>
                                {para.galery && para.galery.map(gal => {
                                    return (
                                        <Fragment>
                                            <img
                                                key={gal.image.id}
                                                src={gal.image.url}
                                                alt={gal.image.title.fr}
                                            />
                                            <p className="imgLegend">{gal.image.title.fr}</p>
                                        </Fragment>
                                    );
                                })}
                            </Col>
                        </Fragment>
                    );
                } else {
                    return (
                        <Fragment key={"para" + para.id}>
                            <Col xs={12} className="paragraphes">
                                <p>{para.text.fr}</p>
                            </Col>
                            <Col xs={12}>
                                {para.galery && para.galery.map(gal => {
                                    return (
                                        <Fragment>
                                            <img
                                                key={gal.image.id}
                                                src={gal.image.url}
                                                alt={gal.image.title.fr}
                                            />
                                            <p className="imgLegend">{gal.image.title.fr}</p>
                                        </Fragment>
                                    );
                                })}
                            </Col>
                        </Fragment>
                    );
                }
            });
        } else if (
            id.length === 2 &&
            this.props.info[id.charAt(0)].sub_category[id.charAt(1)].paragraphes
        ) {
            paragraphes = this.props.info[id.charAt(0)].sub_category[
                id.charAt(1)
            ].paragraphes.map(par => {
                if (par.title_paragraphe) {
                    return (
                        <Fragment key={"par" + par.id}>
                            <Col xs={12} className="paragraphes">
                                <h5>{par.title_paragraphe.fr}</h5>
                                <p>{par.text.fr}</p>
                            </Col>
                            <Col xs={12}>
                                {par.galery && par.galery.map(gal => {
                                    return (
                                        <Fragment>
                                            <img
                                                key={gal.image.id}
                                                src={gal.image.url}
                                                alt={gal.image.title.fr}
                                            />
                                            <p className="imgLegend">{gal.image.title.fr}</p>
                                        </Fragment>
                                    );
                                })}
                            </Col>
                        </Fragment>
                    );
                } else {
                    return (
                        <Fragment key={"par" + par.id}>
                            <Col xs={12} className="paragraphes">
                                <p>{par.text.fr}</p>
                            </Col>
                            <Col xs={12}>
                                {par.galery && par.galery.map(gal => {
                                    return (
                                        <Fragment>
                                            <img
                                                key={gal.image.id}
                                                src={gal.image.url}
                                                alt={gal.image.title.fr}
                                            />
                                            <p className="imgLegend">{gal.image.title.fr}</p>
                                        </Fragment>
                                    );
                                })}
                            </Col>
                        </Fragment>
                    );
                }
            });
        } else if (
            id.length === 3 &&
            this.props.info[id.charAt(0)].sub_category[id.charAt(1)]
                .sub_category[id.charAt(2)].paragraphes
        ) {
            paragraphes = this.props.info[id.charAt(0)].sub_category[
                id.charAt(1)
            ].sub_category[id.charAt(2)].paragraphes.map(pa => {
                if (pa.title_paragraphe) {
                    return (
                        <Fragment key={"pa" + pa.id}>
                            <Col xs={12} className="paragraphes">
                                <h5>{pa.title_paragraphe.fr}</h5>
                                <p>{pa.text.fr}</p>
                            </Col>
                            <Col xs={12}>
                                {pa.galery && pa.galery.map(gal => {
                                    return (
                                        <img
                                            key={gal.image.id}
                                            src={gal.image.url}
                                            alt={gal.image.title.fr}
                                        />
                                    );
                                })}
                            </Col>
                        </Fragment>
                    );
                } else {
                    return (
                        <Fragment key={"pa" + pa.id}>
                            <Col xs={12} className="paragraphes">
                                <p>{pa.text.fr}</p>
                            </Col>
                            <Col xs={12}>
                                {pa.galery && pa.galery.map(gal => {
                                    return (
                                        <img
                                            key={gal.image.id}
                                            src={gal.image.url}
                                            alt={gal.image.title.fr}
                                        />
                                    );
                                })}
                            </Col>
                        </Fragment>
                    );
                }
            });
        }

        return (
            <Fragment>
                <Media
                    query="(max-width: 1000px)"
                    render={() => (
                        <Col xs={12} sm={12} md={9} lg={9}>
                            <Row className="infoContainer">{paragraphes}</Row>
                        </Col>
                    )} />
                <Media
                    query="(min-width: 1000px)"
                    render={() => (
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Row className="infoContainer">{paragraphes}</Row>
                        </Col>
                    )} />
            </Fragment>
        );
    }
}

export default InfoText;