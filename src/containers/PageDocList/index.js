import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setVideo } from 'actions/appActions';
import PageDocList from './PageDocList';

const mapDispatchToProps = (dispatch) => ({
  actions:{
    setVideo: bindActionCreators(setVideo, dispatch),
  }
});

export default connect(
  null,
  mapDispatchToProps,
)(PageDocList);
