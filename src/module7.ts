export interface Dog {
    weight: number;
    color: number;
    owner: {
        name: string
    }
    bark(): void
}


abstract class AbstractDog {
    static a = '';
    b = '';

    static calculate() {
        this.a;
    }

    calculateWeight(): string {
        return AbstractDog.a;
    }

    abstract calculateHeight(): void;
}

class DogClass extends AbstractDog{

    constructor(public _weight: number) {
        super();
    }

    get weight(): number {
        return this._weight;
    }

    set weight(value: number) {
        this._weight = value;
    }

    calculateHeight() {

    }
}

class Pet extends DogClass {

    constructor(weight: number) {
        super(weight);
    }
    calcualteWeight(): void {
        this.weight;
    }

}

const dog = new DogClass(12);
console.log(dog.weight);


abstract class Node {
    calculatePosition() {

    }

    abstract paint(): void;
}