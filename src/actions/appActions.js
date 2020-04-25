import { appTypes } from './actionTypes';

export const setVideo = (video) => ({
  type: appTypes.SET_VIDEO,
  payload: { video },
});

export const setUserCoords = (userCoords) => ({
  type: appTypes.SET_USER_COORDS,
  payload: { userCoords },
});

export const setPlayIntro = (playIntro) => ({
  type: appTypes.SET_PLAY_INTRO,
  payload: { playIntro },
});

export const setHoverVideo = (hoverVideo) => ({
  type: appTypes.SET_HOVER_VIDEO,
  payload: { hoverVideo },
});