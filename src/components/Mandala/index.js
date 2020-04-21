import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setVideo, setUserCoords } from 'actions/appActions';
import Mandala from './Mandala';

const mapStateToProps = (state) => {
  const { app } = state;
  return {
    video: app.video,
    userCoords: app.userCoords,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions:{
    setVideo: bindActionCreators(setVideo, dispatch),
    setUserCoords: bindActionCreators(setUserCoords, dispatch),
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Mandala);
