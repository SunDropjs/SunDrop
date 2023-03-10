class BasicMap {
  constructor(map, key, value = "1x1") {
    this.map = map;
    this.key = key;
    this.value = value;
    this.type = "map";

    const processedMap = [];
    for (let i = 0; i < this.map.length; i++) {
      const row = this.map[i];

      for (let j = 0; j < row.length; j++) {
        const text = row[j];

        for (let k = 0; k < text.length; k++) {
          let cell = text[k];

          if (cell != " ") {
            const value = this.value.split('x')
            const x = k * Number(value[0]);
            const y = i * Number(value[1]);
            const width = Number(value[0]);
            const height = Number(value[1]);
            const polygon = this.generatePolygon(x, y, width, height);
            const generateProps = () => {
              for (let i = 0; i <= Object.keys(this.key).length; i++) {
                if (this.key[cell]) {
                  const props = this.key[cell];
                  return props;
                } else if (i == Object.keys(this.key).length) {
                  console.error("No key found");
                }
              }
            };
            const props = generateProps();
            cell = class {
              constructor(x, y, width, height, polygon, props) {
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
                this.polygon = polygon;
                this.props = props;
              }
            }

            processedMap.push(
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
            );
          }
        }
      }
    }
    this.map = processedMap;
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
