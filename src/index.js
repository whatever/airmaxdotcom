// AIRMAXDOTCOM

import {Countdown} from "./Countdown.js";
import {NotSneaker} from "./NotSneaker.js";
import {ScrollingText} from "./ScrollingText.js";

/**
 * Yikes
 */
export function startCountdown(el) {

  let countdown = new Countdown(el);

  (function loop() {
    countdown.update();
    countdown.draw();
    requestAnimationFrame(loop);
  }());

}




customElements.define("not-sneaker", NotSneaker);
customElements.define("scrolling-text", ScrollingText);



window.addEventListener("load", function() {
  let splash = true;

  window.addEventListener("click", function() {
    if (splash = !splash) {
      document.body.classList.add("splash");
      document.body.classList.remove("no-splash");
    } else {
      document.body.classList.remove("splash");
      document.body.classList.add("no-splash");
    }
  });
});
