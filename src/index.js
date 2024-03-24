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


function socket() {

  let sock = io.connect(AIRMAX_SOCKETIO_URL);

  sock.on("subscribe", (blob) => {
    console.log("(:");
  });

  sock.on("visit", (data) => {
    console.log("data =", data);
  });

  sock.on("bid", (data) => {
    console.log("data =", data);
  });

  sock.on("subscribe", (blob) => {
    updateBids(blob.data.total_bids);
  });

  return sock;
}

function updateBids(count) {
  let el = document.getElementById("its-the-bids-for-me");

  if (!el) {
    return;
  }

  if (count === undefined) {
    return;
  }

  el.innerHTML = "<span id=\"total-bids\">" + count + "</span> bidders so far";
}


function status() {
  let url =  AIRMAX_URL;
  fetch(url).then((response) => {
    return response.json();
  }).then((blob) => {
    let { data } = blob;
    let { total_bids } = data;
    updateBids(total_bids);
  }).catch((err) => {;
    updateBids(undefined);
  });
}

function hasSubscribed() {
  let resp = document.getElementById("mce-success-response");
  if (!resp) {
    return false;
  }
  return resp.style.display !== "none";
}

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

  const sock = socket();

  status();

  document.getElementById("mc-embedded-subscribe-form").addEventListener("reset", () => {
    if (!hasSubscribed()) {
      return;
    }
    let yikes = document.getElementById("email-signup-section");
    yikes.classList.add("subscribed");
  });
});


customElements.define("scrolling-text", ScrollingText);
