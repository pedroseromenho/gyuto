import { connect } from 'react-redux';
import Layout from './Layout';
import { setVideo } from 'actions/appActions';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
  const { app } = state;
  return {
    video: app.video,
    playIntro: app.playIntro,
    hoverVideo: app.hoverVideo
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions:{
    setVideo: bindActionCreators(setVideo, dispatch),
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Layout);
