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

    let text = this.text;
    let measurements;

    do {
      measurements = ctx.measureText(text);
      text += " " + this.text;
    } while(measurements.width < w);

    return {
      width: measurements.width+240,
      height: measurements.height,
      text: text,
    };
  }

  update() {
    const w = Math.max(this.blurb.width, 1);
    const t = new Date() / 10. % this.blurb.width;
    this.offset = Math.floor(t);
  }

  draw() {
    const bbox = this.el.parentNode.getBoundingClientRect();
    this.el.width = bbox.width;
    this.elheight = bbox.height;

    let w = this.el.width;
    let h = this.el.height;

    const ctx = this.context;

    // ctx.fillStyle = "black";
    // ctx.fillRect(0, 0, w, h);
    //
    let x = this.offset * (this.reverse ? -1 : 1);
    let y = h;



    ctx.save();

    ctx.fillStyle = "yellow";
    ctx.fillText(this.blurb.text, x - this.blurb.width, y);
    ctx.fillStyle = "yellow";
    ctx.fillText(this.blurb.text, x, y);
    ctx.fillStyle = "yellow";
    ctx.fillText(this.blurb.text, x + this.blurb.width, y);
    ctx.fillStyle = "yellow";
    ctx.fillText(this.blurb.text, x + 2*this.blurb.width, y);
    ctx.restore();
  }
}

