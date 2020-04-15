import { TweenMax, Power2 } from 'gsap';

export const modalLeave = (modal) => {
  if(modal){
    TweenMax.to(modal, 0.4, {
      css: {        
        scaleX: 0.1,
        scaleY: 0.1, 
        transformOrigin: "center center",
        autoAlpha: 0 }, 
      ease: Power2.easeOut });
  }
}

export const modalEnter = (modal) => {
  if(modal){
    TweenMax.from(modal, 0.1, {
      css: { 
        scaleX: 0,
        scaleY: 0,
        transformOrigin: "center center",
        autoAlpha: 0 }, 
      ease: Power2.easeOut });
  }
  TweenMax.to(modal, 0.4, {
    css: { 
      scaleX: 1,
      scaleY: 1,
      transformOrigin: "center center",
      autoAlpha: 1 }, 
    ease: Power2.easeOut });
}