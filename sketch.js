let shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  strokeWeight(1);

  // 初始化幾何圖形
  for (let i = 0; i < 20; i++) {
    shapes.push({
      type: floor(random(3)),
      x: random(width),
      y: random(height),
      size: random(30, 100),
      baseX: 0,
      baseY: 0,
      color: color(random(255), random(255), random(255))
    });
  }

  setupMenu(); // 初始化選單
}

function draw() {
  background(255);

  // 繪製所有幾何圖形
  for (let shape of shapes) {
    let parallaxX = map(mouseX, 0, width, -10, 10) * 0.1;
    let parallaxY = map(mouseY, 0, height, -10, 10) * 0.1;

    shape.baseX += (parallaxX - shape.baseX) * 0.05;
    shape.baseY += (parallaxY - shape.baseY) * 0.05;

    if (random() < 0.1) {
      shape.color = color(random(255), random(255), random(255));
    }

    push();
    translate(shape.x + shape.baseX, shape.y + shape.baseY);
    stroke(shape.color);

    if (shape.type === 0) {
      ellipse(0, 0, shape.size, shape.size);
    } else if (shape.type === 1) {
      triangle(
        0, -shape.size / 2,
        -shape.size / 2, shape.size / 2,
        shape.size / 2, shape.size / 2
      );
    } else {
      beginShape();
      for (let i = 0; i < 6; i++) {
        let angle = TWO_PI / 6 * i;
        let px = cos(angle) * shape.size / 2;
        let py = sin(angle) * shape.size / 2;
        vertex(px, py);
      }
      endShape(CLOSE);
    }
    pop();
  }

  drawMenu(); // 繪製選單
}
