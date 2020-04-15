import { TweenMax } from 'gsap';

export const imgEnter = (img) => {
  if(img){
    new TweenMax.from(img, 0.3, {x: 30, opacity: 0}, 1);
    new TweenMax.to(img, 0.6, {x: 0, opacity: 1}, 1);
  }
}

export const textEnter = (text) => {
  if(text){
    new TweenMax.from(text, 0.3, {x: -30, opacity: 0}, 1);
    new TweenMax.to(text, 0.6, {x: 0, opacity: 1}, 1);
  }
}