// AIRMAXDOTCOM

import {Countdown} from "./Countdown.js";
import {NotSneaker} from "./NotSneaker.js";

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
