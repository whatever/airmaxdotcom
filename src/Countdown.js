/**
 * Countdown
 */
export class Countdown {

  constructor(el) {
    this.el = el;
    this.target = new Date("2024-03-25T12:00:00");
    this.target = new Date("2024-03-25T09:00:00");
    this.target = new Date(1711371600000);
    this.until = undefined;
    this.setup();
  }

  setup() {
    let container = document.createElement("div");
    container.classList.add("countdown-grid");

    container.innerHTML = `
      <!-- DAYS -->
      <div class="days">
        <div class="numeric" id="countdown-days"></div><div class="label">&nbsp;days</div>
      </div>

      <!-- HOURS -->
      <div class="hours">
        <div class="numeric" id="countdown-hours"></div>
        <div class="label">HR</div>
      </div>

      <!-- MINUTES -->
      <div class="minutes" id="countdown-minutes">
        <div class="numeric"></div>
        <div class="label">MIN</div>
      </div>

      <!-- SECONDS -->
      <div class="seconds">
        <div class="numeric" id="countdown-seconds"></div>
        <div class="label">SEC</div>
      </div>
    `;

    this.days = container.querySelector("#countdown-days");
    this.hours = container.querySelector("#countdown-hours");
    this.minutes = container.querySelector("#countdown-minutes");
    this.seconds = container.querySelector("#countdown-seconds");
    this.el.appendChild(container);
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

    this.days.textContent = days;
    this.hours.textContent = ":" + hours;
    this.minutes.querySelector(".numeric").textContent = ":" + minutes;
    this.seconds.textContent = ":" + seconds;

  }
}
