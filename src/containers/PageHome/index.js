import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Media from 'react-media';
import { videos } from 'data/videos';
import { selectedLang } from 'utils/lang';
import { TweenMax } from 'gsap';

import Mandala from 'components/Mandala';

import s from './style.module.scss';

const PageHome = ({openModalVideo, location }) => {
  const [selectedId, setSelectedId] = useState("");
  const { i18n } = useTranslation();

  useEffect(() => {
    const lines = document.querySelector('.tweenMax-lines');
    TweenMax.set(lines, {autoAlpha:0});
    TweenMax.to(lines, 1, {autoAlpha: 0.8});
  }, [location.pathname])

  const getSelectedId = (id) => {
    if(selectedId !== id){
      setSelectedId(id);
    }
  }

  console.log(selectedId);

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
              <Fragment>
                <div className={s.container__legend}>
                  {selectedId !== "" && (
                    <>
                      <h2 className="tweenMax-video-title">{selectedLang(i18n, videos[selectedId].title.en, videos[selectedId].title.fr)}</h2>
                      <h4>{`"${selectedLang(i18n, videos[selectedId].quote.en, videos[selectedId].quote.fr)}"`}</h4>
                      <p>{`${selectedLang(i18n, videos[selectedId].legend.en, videos[selectedId].legend.fr)} / ${videos[selectedId].duration}`}</p>
                    </>
                  )}
                </div>
                <div 
                  className={s.container__mandala}
                  // onMouseOut={() => setSelectedId("")}
                >
                  <Mandala
                    getSelectedVideo={openModalVideo}
                    getSelectedId={getSelectedId}
                    videos={videos}
                  />
                </div>
                <div className={s.container__img}>
                  {selectedId !== "" && (
                    <img 
                      src={videos[selectedId].img} 
                      alt={selectedLang(i18n, videos[selectedId].title.en, videos[selectedId].title.fr)} 
                    />
                  )}
                </div>
              </Fragment>
            )
        )}
      </Media>
    </div>
  );
}
PageHome.propTypes = {
  openModalVideo: PropTypes.func.isRequired,
  location: PropTypes.any.isRequired,
  i18n: PropTypes.any,
};

PageHome.defaultProps = {
  i18n: null,
};

export default withRouter(PageHome);