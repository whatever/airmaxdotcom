// AIRMAXDOTCOM


/**
 * Countdown
 */
export class Countdown {

  constructor(el) {
    this.el = el;
    this.target = new Date("2024-03-26T12:00:00");
    this.until = undefined;
  }

  update() {
    let until = this.target - new Date();

    let seconds = Math.floor(until / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    this.until = {
      milliseconds: until % 1000,
      seconds: seconds % 60 + (until % 1000) / 1000,
      minutes: minutes % 60,
      hours: hours % 24,
      days: days
    };
  }

  draw() {

    let { seconds, minutes, hours, days } = this.until;

    let frac = this.until.milliseconds / 1000;

    this.el.innerHTML = `
    <div>${days}<br>days</div>
    <br>
    <div>
      <span>${hours}</span>
      <span>${minutes}</span>
      <span>${seconds.toFixed(3)}</span>
    </div>
    `;
  }
}


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



