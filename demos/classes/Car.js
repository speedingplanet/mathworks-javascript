import { Vehicle } from './Vehicle.js';

const defaultConfig = {
  make: 'unspecified make',
  model: 'unspecified model',
  year: 2021,
  color: 'black',
};

export class Car extends Vehicle {
  constructor( config = {} ) {
    super( config );
    Object.assign( this, defaultConfig, config );
  }

  toString() {
    return `${this.color} ${this.year} ${super.toString()}`;
  }
}
