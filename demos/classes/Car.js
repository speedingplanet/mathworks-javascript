import { Vehicle } from './Vehicle.js';

const defaultConfig = {
  year: 2021,
  color: 'black',
};

export class Car extends Vehicle {
  constructor(config = {}) {
    const { make, model, ...instance } = config;
    super({ make, model });
    Object.assign(this, defaultConfig, instance);
  }

  toString() {
    return `${this.color} ${this.year} ${super.toString()}`;
  }
}
