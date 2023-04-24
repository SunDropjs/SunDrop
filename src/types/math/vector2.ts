import { randomFloat } from "../utils.js";

class Vec2 {
  public x: number;
  public y: number;

  public constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public get xPos(): number {
    // Get X position
    return this.x;
  }
  public get yPos(): number {
    // Get Y position
    return this.y;
  }
  public set xPos(x: number) {
    // Set X position
    this.x = x;
  }
  public set yPos(y: number) {
    // Set Y position
    this.y = y;
  }
  public set(x: number, y: number) {
    // Both X and Y
    this.x = x;
    this.y = y;
  }
  public setPostion(v: number): number[] {
    // set Both X and Y to the same value
    this.x = v;
    this.y = v;

    return [this.x, this.y];
  }
  public clone(): this {
    // Create a new Vec2
    return this.constructor(this.x, this.y);
  }
  public scale(s: number): number[] {
    // Scale both X and Y
    this.x *= s;
    this.y *= s;

    return [this.x, this.y];
  }
  getPosition(): number[] {
    // Get the position of the Vec2

    return [this.x, this.y];
  }
  divide(s: number): number[] {
    this.x = this.x / s;
    this.y = this.y / s;

    return [this.x, this.y];
  }
  add(s: number): void {
    this.x = this.x + s;
    this.y = this.y + s;
  }
  random(min: number, max: number): number[] {
    this.x = randomFloat(min, max);
    this.y = randomFloat(min, max);

    return [this.x, this.y];
  }
}

export { Vec2 };
