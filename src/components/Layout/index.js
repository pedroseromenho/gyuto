import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
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
  location,
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

  useEffect(() => {
    const audio = new Audio('/assets/click.wav');
    const links = document.querySelectorAll('.hoverable');
    links.forEach((e, index) => {
      links[index].addEventListener('click', () => {
        audio.play();
      })
    })
    // document.body.addEventListener('click', () => {
    //   audio.play();
    // })
  }, [location.pathname])

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
  location: PropTypes.any.isRequired,
};

Layout.defaultProps = {
  video: null,
}

export default withRouter(Layout);