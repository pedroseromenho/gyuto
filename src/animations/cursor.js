
import TweenMax from 'gsap';

export const cursor = (
  bigBall, smallBall, hoverables
) => {
  function onMouseMove(e) {
    TweenMax.to(bigBall, .4, {
      x: e.pageX - 15,
      y: e.pageY - 15
    });
        
    TweenMax.to(smallBall, .1, {
      x: e.pageX - 5,
      y: e.pageY - 7
    });
  }
        
  function onMouseHover() {
    TweenMax.to(bigBall, .3, {
      scale: 4
    });
  }
  function onMouseHoverOut() {
    TweenMax.to(bigBall, .3, {
      scale: 1
    });
  }
      
  document.body.addEventListener('mousemove', onMouseMove);
  for (let i = 0; i < hoverables.length; i++) {
    hoverables[i].addEventListener('mouseenter', onMouseHover);
    hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
  }
}