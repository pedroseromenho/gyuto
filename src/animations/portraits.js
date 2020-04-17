import { TweenMax } from 'gsap';

export const infoEnter = (gallery,text) => {
  if(gallery){
    new TweenMax.from(gallery, 1, {x: -50}, 0.2)
    new TweenMax.to(gallery, 1, {x: 0}, 0.2)
  }
  if(text){
    new TweenMax.from(text, 1.1, {x: 50}, 0.3);
    new TweenMax.to(text, 1.1, {x: 0}, 0.3);
  }
}