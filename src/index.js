// AIRMAXDOTCOM

import {Countdown} from "./Countdown.js";
import {ScrollingText} from "./ScrollingText.js";

import {io} from "socket.io-client";

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
  setTimeout(() => {
    document.getElementById("splash-page").style.display = "none";
  }, 300);
}


window.addEventListener("load", function() {
  window.addEventListener("click", clickThrough);
  window.addEventListener("touchstart", clickThrough);
  window.addEventListener("wheel", clickThrough);

	let el = document.getElementById("countdown-jr");

	if (el) {
		airmaxdotcom.startCountdown(el);
	}

  let url = "https://live.airmax.com";
  url = "http://localhost:8080";

  let socket = io.connect(url, {transports: ["websocket"]});

  socket.on("update", () => {
    console.log("(:");
  });

});


console.log("seek me out =", AIRMAX_SOCKETIO_URL);
