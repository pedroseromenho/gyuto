import { TweenMax } from 'gsap';

export const navEnter = (nav) => {
  if(nav){
    new TweenMax.from(nav, 0.5, { x: 1000 }, 0.2)
    new TweenMax.to(nav, 0.5, { x: 0 }, 0.2)
  }
}

export const navLeave = (nav) => {
  if(nav){
    new TweenMax.from(nav, 0.5, { x: 0 }, 0.2)
    new TweenMax.to(nav, 0.5, { x: 1000 }, 0.2)
  }
}