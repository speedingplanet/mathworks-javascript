import { Car } from './Car.js';
import { Vehicle } from './Vehicle.js';

const honda = new Car({ make: 'Honda', model: 'Civic', color: 'red' });
console.log('honda: ', honda);
console.log('honda: ' + honda);

const defaultCar = new Car();
console.log('defaultCar: ', defaultCar);

globalThis.honda = honda;
globalThis.Vehicle = Vehicle;
