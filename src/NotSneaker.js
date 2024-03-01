import * as THREE from "three";

export class NotSneaker extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.canvas.height = 500;
    this.app = new NotSneakerApp(this.canvas);
    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";

    this.appendChild(this.canvas);

    let app = this.app;
    (function loop() {
      app.update();
      app.draw();
      requestAnimationFrame(loop);
    }());
  }
}

export class NotSneakerApp {

  constructor(el) {
    this.el = el;
    this.init();
    this.cube = new THREE.Mesh(
      new THREE.BoxGeometry(3, 3, 3),
      new THREE.MeshBasicMaterial({color: 0x00ff00}),
    );
    this.scene.add(this.cube);
  }

  init() {
    this.ctx = this.el.getContext("webgl", {preserveDrawingBuffer: true});

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.el,
      antialias: true,
    });

    this.camera = new THREE.PerspectiveCamera(
      80,
      this.el.width / this.el.height,
      0.1,
      1000,
    );

    this.renderer.setPixelRatio(window.devicePixelRation);

    this.renderer.setSize(this.el.width, this.el.height);

    this.scene = new THREE.Scene();
  }

  update() {
    let t = +new Date() / 100.0;
    this.camera.position.set(0, 0, 5);
    this.camera.lookAt(0, 0, 0);
    this.cube.rotation.x = +0.03 * t;
    this.cube.rotation.y = -0.04 * t;
    this.cube.rotation.z = +0.01 * t;
  }

  draw() {
    this.renderer.render(this.scene, this.camera);
  }

  setSize(w, h) {
    this.renderer.setSize(w, h);
    this.camera.aspect = w/h;
    this.camera.updateProjectionMatrix();
  }

}

