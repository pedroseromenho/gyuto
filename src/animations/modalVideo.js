import { TweenMax, Power2, gsap } from 'gsap';

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

export const modalMinimize = (modal) => {
  gsap.config({
    nullTargetWarn: false,
  });

  if(modal){
    TweenMax.to(modal, 0.4, {
      css: {        
        scaleX: 0.9,
        scaleY: 0.9, 
        transformOrigin: "bottom right"}, 
      ease: Power2.easeOut });
  }
}

export const modalMaximize = (modal) => {
  gsap.config({
    nullTargetWarn: false,
  });
  if(modal){
    TweenMax.from(modal, 0.4, {
      css: {        
        scaleX: 0.9,
        scaleY: 0.9, 
        transformOrigin: "bottom right"}, 
      ease: Power2.easeOut });
    TweenMax.to(modal, 0.4, {
      css: {        
        scaleX: 1,
        scaleY: 1, 
        transformOrigin: "top left"}, 
      ease: Power2.easeOut });
  }
}