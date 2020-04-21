import { appTypes } from '../actions/actionTypes';

const lsCoords = localStorage.getItem("coords");
const parsedCoords = JSON.parse(localStorage.getItem('coords'));

const defaultState = {
  video: null,
  userCoords: lsCoords ? parsedCoords : [],
  playIntro: true,
  hoverVideo: false,
};

const app = (state = defaultState, action) => {
  switch (action.type) {
  case appTypes.SET_VIDEO:
    return { ...state, video: action.payload.video };
  case appTypes.SET_USER_COORDS:
    return { ...state, userCoords: action.payload.userCoords };
  case appTypes.SET_PLAY_INTRO:
    return { ...state, playIntro: action.payload.playIntro };
  case appTypes.SET_HOVER_VIDEO:
    return { ...state, hoverVideo: action.payload.hoverVideo };
  default:
    return state;
  }
};

export default app;