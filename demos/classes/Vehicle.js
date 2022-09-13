import { cloneDeep } from '../../node_modules/lodash-es/lodash.js';

const defaultConfig = {
  make: 'unspecified make',
  model: 'unspecified model',
  engine: {
    size: '1.8l',
  },
};

export class Vehicle {
  // Static variable
  static vin = 0;

  static nextVin() {
    Vehicle.vin++;
    return Vehicle.vin;
  }

  // Instance variables (or fields)
  make = defaultConfig.make;
  model = defaultConfig.model;
  engine = { ...defaultConfig.engine };

  /*
  // Per argument style
  constructor( make = 'Default make', model = 'Default model' ) {
    this.make = make;
    this.model = model;

    this._vin = ++Vehicle.vin;

    // Intended private, the underscore _ is a convention, it does not
    // actually make the properties private
    this._odometer = 0;
  }
  */

  // Config style
  constructor(config = {}) {
    // Be cautious if your props are object refs and not primitives
    Object.assign(this, cloneDeep(defaultConfig), config);
    // Object.assign( this, config );

    Vehicle.vin = Vehicle.vin + 1;
    this._vin = Vehicle.vin;

    // Intended private, the underscore _ is a convention, it does not
    // actually make the properties private
    this._odometer = 0;
  }

  getMake() {
    return this.make;
  }

  setMake(make) {
    this.make = make;
  }

  toString() {
    return `${this.make} ${this.model}`;
  }

  getVin() {
    return this._vin;
  }

  /*
  get vin() {
    return this._vin;
  }
  */

  set mileage(miles) {
    this._odometer += miles;
  }

  speed = 0;
  /*
  get speed() {
    return this.speed;
  }
  */

  get mileage() {
    return this._odometer;
  }
}

const v = new Vehicle();
v.mileage = 100;
v.getMake();
v.setMake('Ford');
console.log(v.speed);
