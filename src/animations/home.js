import { TweenMax } from 'gsap';

export const infoEnter = (
  title, quote, legend, img
) => {
  if(title){
    new TweenMax.from(title, 1, {y: 5}, 0.2)
    new TweenMax.to(title, 1, {y: 0}, 0.2)
  }
  if(quote){
    new TweenMax.from(quote, 1.1, {y: 10}, 0.3);
    new TweenMax.to(quote, 1.1, {y: 0}, 0.3);
  }
  if(legend){
    new TweenMax.from(legend, 1.2, {y: 15}, 0.4) 
    new TweenMax.to(legend, 1.2, {y: 0}, 0.4) 
  }
  if(img) {
    new TweenMax.from(img, 1, {opacity: 0}, 1);
    new TweenMax.to(img, 1, {opacity: 1}, 1)
  }
}

export const infoLeave = (
  title, quote, legend, img
) => {
  if(title){
    new TweenMax.from(title, 1, {x: 0, opacity: 1}, 0.2);
    new TweenMax.to(title, 1, {x: -30, opacity: 0}, 0.2);
  }
  if(quote){
    new TweenMax.from(quote, 1.1, {x: 0, opacity: 1}, 0.3);
    new TweenMax.to(quote, 1.1, {x: -30, opacity: 0}, 0.3);
  }
  if(legend){
    new TweenMax.from(legend, 1.2, {x: 0, opacity: 1}, 0.4);
    new TweenMax.to(legend, 1.2, {x: -30, opacity: 0}, 0.4);
  }
  if(img){
    new TweenMax.from(img, 1, {x: 0, opacity: 1}, 1);
    new TweenMax.to(img, 1, {x: 30, opacity: 0}, 1);
  }
}