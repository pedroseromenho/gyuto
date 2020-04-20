import React, {useEffect, useState} from 'react';
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
  playIntro,
}) => {
  
  const [modalFullSize, setModalFullSize] = useState(false);

  const setFullSize = () => {
    setModalFullSize(true);
  }

  const removeFullSize = () => {
    setModalFullSize(false);
  }

  useEffect(() => {
    if(modalFullSize){
      return document.body.classList.add('videoOpen');
    }else{
      return document.body.classList.remove('videoOpen');
    }
  }, [modalFullSize]);

  return(
    <div className={s.container}>
      <Media queries={{
        small: "(max-width: 719px)"
      }}>
        {matches => (
          <>
            <header>{header}</header>
            <main>{main}</main>
            <footer>{footer}</footer>
            {video !== null && !matches.small && (
              <ModalVideo 
                video={video} 
                close={closeModalVideo} 
                playIntro={playIntro} 
                setFullSize={setFullSize}
                removeFullSize={removeFullSize}
              />
            )}
            {!modalFullSize && !matches.small && (
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
  closeModalVideo: PropTypes.func.isRequired,
  video: PropTypes.any,
  playIntro: PropTypes.bool.isRequired,
};

Layout.defaultProps = {
  video: null,
}

export default Layout;