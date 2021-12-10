import { FollowerStyles } from './Follower.styles';

function Follower() {

  document.addEventListener('DOMContentLoaded', () => {
    
    let mousePosX = 0,
        mousePosY = 0,
        mouseCircle = document.getElementById('Follower');

    document.onmousemove = (e) => {
      mousePosX = e.pageX;
      mousePosY = e.pageY;
    };
  
    let delay = 10,
        revisedMousePosX = 0,
        revisedMousePosY = 0;
  
    function delayMouseFollow() {
      requestAnimationFrame(delayMouseFollow);
      revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
      revisedMousePosY += (mousePosY - revisedMousePosY) / delay;
      mouseCircle.style.top = (revisedMousePosY - window.scrollY) + "px";
      mouseCircle.style.left = revisedMousePosX + "px";
    }

    delayMouseFollow();
  });
  
  return (
    <FollowerStyles id='Follower' />
  );
}

export default Follower;
