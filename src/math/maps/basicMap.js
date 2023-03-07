class BasicMap {
  constructor(map, key, value = "1x1") {
    this.map = map;
    this.key = key;
    this.value = value;

    this.processMap = () => {
      const processedMap = [];
      for (let i = 0; i < this.map.length; i++) {
        this.row = this.map[i];

        for (let j = 0; j < this.row.length; j++) {
          const text = this.row[j];

          for (let k = 0; k < text.length; k++) {
            const cell = text[k];

            if (cell != "") {
              processedMap.push([
                cell,
                { x: j * Number(this.value[0]), y: i * Number(this.value[2]) },
              ]);
            }
          }
        }
      }
      return processedMap;
    };
    this.processedMap = this.processMap();
  }
}

export { BasicMap };
