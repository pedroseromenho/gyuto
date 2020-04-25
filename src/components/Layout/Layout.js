import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';
import intro from '__MOCKS__/intro';

import ModalVideo from 'components/ModalVideo';
import Cursor from 'components/Cursor';

import s from './style.module.scss';

const Layout = ({
  header, 
  main, 
  footer,
  video,
  playIntro,
  actions,
  hoverVideo
}) => {

  useEffect(() => {
    if(playIntro){
      actions.setVideo(intro);
    }
  }, [playIntro]) // eslint-disable-line

  useEffect(() => {
    if(hoverVideo){
      return document.body.classList.add('videoOpen');
    }else{
      return document.body.classList.remove('videoOpen');
    }
  }, [hoverVideo]);

  return(
    <div className={s.container}>
      <Media queries={{
        small: "(max-width: 839px)"
      }}>
        {matches => (
          <>
            <header>{header}</header>
            <main>{main}</main>
            {!matches.small && (
              <footer>{footer}</footer>
            )}
            {video !== null && !matches.small && (
              <ModalVideo video={video} />
            )}
            {!hoverVideo && !matches.small && (
              <Cursor video={video}/>
            )}
          </>
        )}
      </Media>
    </div>
  )}

Layout.propTypes = {
  header: PropTypes.any.isRequired,
  main: PropTypes.any.isRequired,
  footer: PropTypes.any.isRequired,
  video: PropTypes.any,
  hoverVideo: PropTypes.bool.isRequired,
  playIntro: PropTypes.bool.isRequired,
  actions : PropTypes.shape({
    setVideo: PropTypes.func.isRequired,
  }),
};

export default Layout;