import * as SUN from "../../build/sundrop.module.js";

const renderer = new SUN.Renderer();
const camera = new SUN.Camera();

renderer.setColor("#47f6ff");

document.body.appendChild(renderer.domElement);

const map = new SUN.BasicMap(
  [
    ["                                    "],
    ["                                    "],
    ["                                    "],
    ["                                    "],
    ["                                    "],
    ["                                    "],
    ["            #v#v#                   "],
    ["                                    "],
    ["                                    "],
    ["                                    "],
    ["                                   g"],
    ["                                  gg"],
    ["        z                        ggg"],
    ["xxxxxxxxxxxxxxxxxxxxxx   xxxxxxxxxxx"],
    ["xxxxxxxxxxxxxxxxxxxxxx   xxxxxxxxxxx"],
  ],
  {
    x: {
      visible: true,
      drawStyle: "fill",
      type: "box",
      color: "green",
    },
    v: {
      visible: true,
      drawStyle: "stroke",
      type: "box",
      stroke: { color: "#cfc736", width: 5 },
    },
    "#": {
      visible: true,
      type: "box",
      drawStyle: "fill",
      color: "#a86632",
    },
    g: {
      visible: true,
      type: "box",
      drawStyle: "fill",
      color: "grey",
    },
    z: {
      color: "red",
      drawStyle: "fill",
      type: "circle",
      visible: true,
      radius: 20,
      moveX: (self) => {
        self.pos.x += 1;
        return self.pos.x;
      },
    },
  },
  "50x50"
);

renderer.add(map);

function animate() {
  renderer.render(camera);
  renderer.update();
  requestAnimationFrame(animate);
}

animate(0)
