import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';

import ModalVideo from 'components/ModalVideo';
import Cursor from 'components/Cursor';

import s from './style.module.scss';

const Layout = ({
  header, 
  main, 
  footer, 
  closeModalVideo, 
  video,
  playIntro
}) => {

  useEffect(() => {
    if(video){
      return document.body.classList.add('videoOpen');
    }else{
      return document.body.classList.remove('videoOpen');
    }
  }, [video]);

  return(
    <>
      <Media queries={{
        small: "(max-width: 719px)"
      }}>
        {matches => (
          <div className={s.container}>
            <header>{header}</header>
            <main>{main}</main>
            <footer>{footer}</footer>
            {video && !matches.small && (
              <ModalVideo link={video} close={closeModalVideo} playIntro={playIntro} />
            )}
            {!video && !matches.small && (
              <Cursor isVideo={video}/>
            )}
          </div>
        )}
      </Media>
    </>
  )}

Layout.propTypes = {
  header: PropTypes.any.isRequired,
  main: PropTypes.any.isRequired,
  footer: PropTypes.any.isRequired,
  closeModalVideo: PropTypes.func.isRequired,
  video: PropTypes.any,
  playIntro: PropTypes.bool.isRequired,
};

Layout.defaultProps = {
  video: null,
}

export default Layout;