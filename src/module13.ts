export class Animal {
    feed() {
        console.log('feed');
    }
}

// class Movable {
//     move() {
//         console.log('move');
//     }
// }

export class Horse extends Animal{

}

// class MovableHorse extends Horse {
//     speed = 0;
//     move() {
//
//     }
// }

export class Car{

}

// class MovableCar extends Car {
//     speed = 0;
//     move() {
//
//     }
// }



type ClassType = new (...args: any[]) => {};


function Movable<T extends ClassType>(BaseClass: T) {
    return class MovableClass extends BaseClass {
        speed = 0;
        move() {

        }
    }
}

const MovableHorse = Movable(Horse);
const MovableCar = Movable(Car);

const horse = new MovableHorse();
horse.move()
const car = new MovableCar();
car.move()