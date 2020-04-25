import { TweenMax } from 'gsap';

export const infoEnter = (
  video, text, albums
) => {
  if(video){
    new TweenMax.from(video, 1, {
      y: 50,
      autoAlpha:0
    }, 0.2)
    new TweenMax.to(video, 1, {
      y: 0,
      autoAlpha:1
    }, 0.2)
  }
  if(text){
    new TweenMax.from(text, 1.2, {
      y: 50,
      autoAlpha:0
    }, 0.3)
    new TweenMax.to(text, 1.2, {
      y: 0,
      autoAlpha: 1
    }, 0.3)
  }
  if(albums) {
    new TweenMax.from(albums, 1.4, {
      y: 50,
      autoAlpha:0
    }, 0.4)
    new TweenMax.to(albums, 1.4, {
      y: 0,
      autoAlpha: 1
    }, 0.2)
  }
}