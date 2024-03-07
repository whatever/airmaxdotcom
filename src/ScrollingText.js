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

  connectedCallback() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = 300;
    this.canvas.height = 20;
    this.text = "THE MOST EXCLUSIVE AIR MAX DROP EVER";
    this.canvas.style.height = "100px";
    this.app = new ScrollingTextApp(
      this.canvas,
      this.text,
      this.attributes.direction.value == "left",
    );

  console.log(this.attributes.direction);
    this.appendChild(this.canvas);

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
    console.log(this.reverse);
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
    let t = new Date() / 60. % this.blurb.width;
    this.offset = Math.floor(t);
  }

  draw() {
    this.el.width = this.el.width;
    this.elheight = this.el.height;

    let w = this.el.width;
    let h = this.el.height;

    const ctx = this.context;

    // ctx.fillStyle = "black";
    // ctx.fillRect(0, 0, w, h);
    //
    let x = this.offset * (this.reverse ? -1 : 1);


    ctx.save();
    ctx.fillStyle = "yellow";
    ctx.fillText(this.blurb.text, x - this.blurb.width, h*3/4);
    ctx.fillStyle = "yellow";
    ctx.fillText(this.blurb.text, x, h*3/4);
    ctx.fillStyle = "yellow";
    ctx.fillText(this.blurb.text, x + this.blurb.width, h*3/4);
    ctx.restore();
  }
}

