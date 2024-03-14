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
      seconds: seconds % 60,
      minutes: minutes % 60,
      hours: hours % 24,
      days: days
    };
  }

  draw() {

    let { seconds, minutes, hours, days } = this.until;

    seconds = String(seconds).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    hours = String(hours).padStart(2, "0");
    days = String(days).padStart(2, "0");

    let frac = this.until.milliseconds / 1000;

    this.el.innerHTML = `
    <div class="countdown-grid">

      <!-- DAYS -->
      <div class="days">
        <div class="numeric">${days}</div><div class="label">&nbsp;days</div>
      </div>

      <!-- HOURS -->
      <div class="hours">
        <div class="numeric">:${hours}</div>
        <div class="label">hours</div>
      </div>

      <!-- MINUTES -->
      <div class="minutes">
        <div class="numeric">:${minutes}</div>
        <div class="label">minutes</div>
      </div>

      <!-- SECONDS -->
      <div class="seconds">
        <div class="numeric">:${seconds}</div>
        <div class="label">seconds</div>
      </div>

    </div>
    `;
  }
}
