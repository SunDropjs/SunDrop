class BasicMap {
  constructor(map, key, value = "1x1") {
    this.map = map;
    this.key = key;
    this.value = value;
    this.type = "map";

    this.processMap = () => {
      const processedMap = [];
      for (let i = 0; i < this.map.length; i++) {
        this.row = this.map[i];

        for (let j = 0; j < this.row.length; j++) {
          const text = this.row[j];

          for (let k = 0; k < text.length; k++) {
            const cell = text[k];

            if (cell != " ") {
              const x = k * Number(this.value[0]);
              const y = i * Number(this.value[2]);
              const width = Number(this.value[0]);
              const height = Number(this.value[2]);
              const polygon = this.generatePolygon(x, y, width, height);
              let props = undefined;
              for (let i = 0; i < Object.keys(this.key).length; i++) {
                if (this.key[i] == cell) {
                  props = this.key[i];
                } else if (i == Object.keys(this.key).length - 1) {
                  console.error("Key not found");
                }
              }

              processedMap.push[
                (cell,
                {
                  pos: {
                    x: x,
                    y: y,
                  },
                  width: width,
                  height: height,
                  polygon: polygon,
                  props: props,
                })
              ];
            }
          }
        }
      }
      return processedMap;
    };
    this.processedMap = this.processMap();
  }
  generatePolygon(x, y, width, height) {
    const points = [];

    points.push({
      x: x - width / 2,
      y: y - height / 2,
    });

    points.push({
      x: x + width / 2,
      y: y - height / 2,
    });

    points.push({
      x: x + width / 2,
      y: y + height / 2,
    });

    points.push({
      x: x - width / 2,
      y: y + height / 2,
    });

    return points;
  }
}

export { BasicMap };
