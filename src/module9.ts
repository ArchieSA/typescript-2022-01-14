// 1
export function calculateHeight(a: number | null, b?: number): number {
    let result = 0;

    if (a) {
        result += a;
    }

    if (b) {
        result += b;
    }

    return result;
}

// 2
export function calculateHeight2(a: number | null, b?: number): number {
    let result = 0;

    if (a === b) {
        result = a + b;
    }

    return result;
}

//3
export function calculateHeight3(a: number | string | boolean, b?: number): number {
    let result = 0;

    if (typeof a === 'number') {
        result += a;
    } else if(typeof a === 'string') {
        result += Number(a) || 0;
    } else {
        result += a ? 10 : 0;
    }

    if (typeof b === 'number') {
        result += b;
    }

    return result;
}

//4

interface Dog {
    name: string;
    bark(): void;
}
interface Wolf {
    bark(): void;
    loudBark(): void;
}
interface Cat {
    meow(): void;
}

function makeSomeNoize(animal: Dog | Cat | Wolf) {
    if ("bark" in animal) {
        animal.bark()

        if ("name" in animal) {
            console.log(animal.name);
        } else {
            animal.loudBark();
        }
    } else {
        animal.meow();
    }
}

//5
function logValue(value: string | Date) {
    if (value instanceof Date) {
        console.log(value.toUTCString())
    } else {
        console.log(value);
    }
}

//6
interface Dog {
    name: string;
    bark(): void;
}
interface Wolf {
    bark(): void;
    loudBark(): void;
}
interface Cat {
    meow(): void;
}

function isDog(animal: unknown): animal is Dog {
    const dog = animal as Dog;

    if (!dog) {
        return false;
    }

    if ('loudBark' in dog) {
        return false;
    }

    return typeof dog.name === 'string' && typeof dog.bark === 'function';
}

function isWolf(animal: unknown): animal is Dog {
    const wolf = animal as Wolf;

    return typeof wolf.loudBark === 'function' && typeof wolf.loudBark === 'function';
}

function makeSomeNoize2(animal: unknown) {
    if (isDog(animal)) {
        animal.bark();
    } else {
        animal;
    }
}

// 7

interface Film {
    __typename: 'Film',
    duration: number;
}

interface Series {
    __typename: 'Series',
    seasonCount: number
}

function watch(movie: Film | Series) {
    if (movie.__typename === 'Film') {
        console.log(movie.duration);
    }

    if (movie.__typename === 'Series') {
        console.log(movie.seasonCount);
    }
}