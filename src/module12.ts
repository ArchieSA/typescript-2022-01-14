export class Animal {
    feed() {
        console.log('feed');
    }
}

class Movable {
    move() {
        console.log('move');
    }
}

export class Horse {

}

export interface Horse extends Animal, Movable {}

type ClassType = new (...args: any[]) => {};

function applyMixins(destinationClass: ClassType, sourceClasses: ClassType[]) {
    sourceClasses.forEach(source => {
        Object.getOwnPropertyNames(source.prototype).forEach(name => {
            destinationClass.prototype[name] = source.prototype[name];
        })
    })
}

applyMixins(Horse, [Animal, Movable]);

const horse = new Horse();
horse.move();
horse.feed();