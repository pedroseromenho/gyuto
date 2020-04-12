import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Media from 'react-media';
import Mandala from '../../components/Mandala';
import {videos} from '../../data/videos';
import s from './style.module.scss';

class PageHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: "",
    }
  }

  getSelectedId(id) {
    const { selectedId } = this.state;
    if(selectedId !== id){
      this.setState({
        selectedId: id
      })
    }
  }

  getSelectedVideo(params) {
    const { openModalVideo } = this.props;
    openModalVideo(params);
  }

  render() {
    const { selectedId } = this.state;
    const { i18n } = this.props;
    const isEnglish = (i18n.language === 'en');
    return (
      <div className={s.container}>
        <Media queries={{
          small: "(max-width: 719px)"
        }}>
          {matches => (
            matches.small 
              ? (
                <div>Mobile</div>
              ) : (
                <>
                  <div className={s.container__legend}>
                    {selectedId !== "" && (
                      <>
                        <h2>{isEnglish ? videos[selectedId].title.en : videos[selectedId].title.fr}</h2>
                        <h4>{isEnglish ? videos[selectedId].quote.en : videos[selectedId].quote.fr}</h4>
                        <p>{isEnglish ? videos[selectedId].legend.en : videos[selectedId].legend.fr} / {videos[selectedId].duration}</p>
                      </>
                    )}
                  </div>
                  <div className={s.container__mandala}>
                    <Mandala
                      getSelectedVideo={this.getSelectedVideo.bind(this)}
                      getSelectedId={this.getSelectedId.bind(this)}
                      videos={videos}
                    />
                  </div>
                  <div className={s.container__img}>
                    {selectedId !== "" && (
                      <img 
                        src={videos[selectedId].img} 
                        alt={isEnglish ? videos[selectedId].title.fr : videos[selectedId].title.fr} 
                      />
                    )}
                  </div>
                </>
              )
          )}
        </Media>
      </div>
    );
  }
}

PageHome.propTypes = {
  openModalVideo: PropTypes.func.isRequired,
  i18n: PropTypes.any.isRequired,
};

export default withTranslation()(PageHome);
