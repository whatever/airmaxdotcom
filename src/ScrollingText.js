function mod(x, n) {
  while (x < 0) {
    x += n;
  }
  return x % n;
}

export class ScrollingText extends HTMLElement {
  constructor() {
    super();

  }

  resize() {
  }

  connectedCallback() {
    this.resize();
    this.canvas = document.createElement("canvas");
    this.text = "THE MOST EXCLUSIVE AIR MAX DROP EVER";
    this.canvas.style.height = "100%";
    this.canvas.style.width = "100%";

    this.appendChild(this.canvas);

    this.app = new ScrollingTextApp(
      this.canvas,
      this.text,
      this.attributes.direction.value == "left",
    );

    let app = this.app;

    (function loop() {
      app.update();
      app.draw();
      requestAnimationFrame(loop);
    }());
  }
}


class ScrollingTextApp {

  constructor(el, text, reverse) {
    this.el = el;
    this.text = text;
    this.reverse = !!reverse;
    this.context = this.el.getContext("2d");
    this.blurb = this.generateBlurb();
  }

  generateBlurb() {
    const ctx = this.context;
    const w = this.el.width;
    const h = this.el.height;

    let text = this.text + " " + this.text + " ";
    let measurements;

    ctx.save();
    ctx.font = "bold italic " + h + "px Franie";;
    measurements = ctx.measureText(text);
    ctx.restore();

    return {
      width: measurements.width,
      height: measurements.height,
      text: text,
    };
  }

  update() {
    const w = Math.max(this.blurb.width, 1);
    const t = (new Date() / 9.5) % this.blurb.width;
    this.offset = Math.floor(t);
  }

  draw() {
    const bbox = this.el.getBoundingClientRect();

    this.el.width = bbox.width;
    this.el.height = bbox.height;

    let w = this.el.width;
    let h = this.el.height;

    const ctx = this.context;
    ctx.clearRect(0, 0, w, h);

    //
    let x = this.offset * (this.reverse ? -1 : 1);
    let y = h-10;

    ctx.save();
    ctx.font = "bold italic " + (h-10) + "px Franie";;
    ctx.lineWidth = 2;
    ctx.strokeStyle = "yellow";
    ctx.fillStyle = "yellow";
    let box = ctx.measureText(this.blurb.text);
    ctx.strokeText(this.blurb.text, x - 2*box.width, y);
    ctx.strokeText(this.blurb.text, x - box.width, y);
    ctx.strokeText(this.blurb.text, x, y);
    ctx.strokeText(this.blurb.text, x + box.width, y);
    ctx.strokeText(this.blurb.text, x + 2*box.width, y);
    ctx.restore();
  }
}

