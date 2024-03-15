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


export function clickThrough() {
  document.body.classList.remove("splash");
  document.body.classList.add("no-splash");
}
window.addEventListener("load", function() {
  window.addEventListener("wheel", clickThrough);
  window.addEventListener("click", clickThrough);
  window.addEventListener("touchstart", clickThrough);
});

