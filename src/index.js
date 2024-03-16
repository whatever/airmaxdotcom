// AIRMAXDOTCOM

import {Countdown} from "./Countdown.js";
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

customElements.define("scrolling-text", ScrollingText);


export function clickThrough() {
  document.body.classList.remove("splash");
  document.body.classList.add("no-splash");
  window.removeEventListener("click", clickThrough);
  window.removeEventListener("touchstart", clickThrough);
  window.removeEventListener("wheel", clickThrough);
}
window.addEventListener("load", function() {
  window.addEventListener("click", clickThrough);
  window.addEventListener("touchstart", clickThrough);
  window.addEventListener("wheel", clickThrough);
});
