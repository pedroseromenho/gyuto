import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setVideo, setPlayIntro, setHoverVideo } from 'actions/appActions';
import ModalVideo from './ModalVideo';

const mapStateToProps = (state) => {
  const { app } = state;
  return {
    playIntro: app.playIntro,
    hoverVideo: app.hoverVideo
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions:{
    setVideo: bindActionCreators(setVideo, dispatch),
    setPlayIntro: bindActionCreators(setPlayIntro, dispatch),
    setHoverVideo: bindActionCreators(setHoverVideo, dispatch),
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalVideo);
