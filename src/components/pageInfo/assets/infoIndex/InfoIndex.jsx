import React, { Component } from "react";
import { Col } from "react-flexbox-grid";

class InfoIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    toggleElement(name) {
        this.setState({ [name]: !this.state[name] });
    }

    render() {
        const infos = this.props.info.map(inf => {
            return (
                <div key={"indexTitle" + inf.id}>
                    <h2
                        className={
                            this.props.id.id !== inf.id
                                ? "indexTitle"
                                : "indexTitle active"
                        }
                        onClick={() => {
                            this.toggleElement("indexTitle" + inf.id);
                            this.props.active(inf.id);
                        }}
                    >
                        {inf.index_title} {inf.title.fr}
                        {/* {this.state["indexTitle" + inf.id] === true ? "↑" : "↓"} */}
                    </h2>
                    {inf.sub_category &&
                        inf.sub_category.length > 0 &&
                        this.state["indexTitle" + inf.id] === true &&
                        inf.sub_category.map(sub => {
                            return (
                                <div key={"indexSub" + sub.id}>
                                    <h3
                                        className={
                                            this.props.id.id !== inf.id + sub.id
                                                ? "indexSubtitle"
                                                : "indexSubtitle active"
                                        }
                                        onClick={() => {
                                            this.toggleElement(
                                                "indexSub" + sub.id
                                            );
                                            this.props.active(inf.id + sub.id);
                                        }}
                                    >
                                        {sub.index_title} {sub.title.fr}
                                    </h3>
                                    {sub.sub_category &&
                                        sub.sub_category.length > 0 &&
                                        this.state["indexSub" + sub.id] ===
                                        true &&
                                        sub.sub_category.map(subsub => {
                                            return (
                                                <h4
                                                    className={
                                                        this.props.id.id !==
                                                            inf.id +
                                                            sub.id +
                                                            subsub.id
                                                            ? "indexSubsubtitle"
                                                            : "indexSubsubtitle active"
                                                    }
                                                    key={subsub.id}
                                                    onClick={() =>
                                                        this.props.active(
                                                            inf.id +
                                                            sub.id +
                                                            subsub.id
                                                        )
                                                    }
                                                >
                                                    {subsub.index_title}{" "}
                                                    {subsub.title.fr}
                                                </h4>
                                            );
                                        })}
                                </div>
                            );
                        })}
                </div>
            );
        });
        return (
            <Col className="infoIndex" xs={12} sm={12} md={3} lg={3}>
                {infos}
            </Col>
        );
    }
}

export default InfoIndex;