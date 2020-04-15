import { TweenMax } from 'gsap';

export const linesEnter = (lines) =>{
  if(lines){
    TweenMax.from(lines, {autoAlpha:0})
    TweenMax.to(lines, 1, {autoAlpha: 0.8})
  }
}