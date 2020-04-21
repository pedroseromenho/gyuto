import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setHoverVideo } from 'actions/appActions';
import CoverMedia from './CoverMedia';

const mapStateToProps = (state) => {
  const { app } = state;
  return {
    hoverVideo: app.hoverVideo
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions:{
    setHoverVideo: bindActionCreators(setHoverVideo, dispatch),
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoverMedia);
