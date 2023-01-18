
function test(a: object) {
    return a;
}

const f = {}

test(f)

export interface Pet<Animal> {
    owner?: string;
    name: string;
    animalParams: Animal;
}

interface Dog {
    weight: number;
}

interface Cat {
    height: number;
}

// interface PetDog extends Pet {
//     params: Dog;
// }
//
// interface PetCat extends Pet {
//     params: Cat;
// }


type PetDog = Pet<Dog>;
// interface PetDog {
//      owner: string;
//      name: string;
//      params: Dog;
// }
//
type PetCat = Pet<Cat>;
// interface PetCat {
//      owner: string;
//      name: string;
//      params: Cat;
// }
//

class DogClass<T> {
    constructor(v: T) {
    }

    test(v: T): T {
        return v;
    }
}

const dog = new DogClass<Dog>({weight: 12})
dog.test({weight: 12});


type PetWithParams<T> = Required<Pick<Pet<T>, 'owner'>> & Readonly<Omit<Pet<T>, 'owner'>>;

let pet: PetWithParams<Dog>;

// interface PetDog {
//      owner: string;
//      readonly name: string;
//      readonly params: Dog;
// }
//

interface Base {
    a: string
}

interface A extends Base {
    a1: string
}
interface B  extends Base{
    b1: string

}
interface C extends Base {
    c1: string
}

function transform<T extends Base>(obj: T): T {
    return {
        ...obj,
        a: `a: ${obj.a}`
    }
}

function getA<T extends Base>(obj: T): string {
    return obj.a
}

// function getA<T extends string>(a: string): T {
//     return a;
// }

const a: A = {a: 'a', a1: ''};
const b: B = {a: 'a', b1: ''};
const c: C = {a: 'a', c1: ''};

const transformedA: A = transform<A>(a);
transformedA.a1;
const transformedB: B = transform<B>(b);
const transformedC: C = transform<C>(c);

function getProperty<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const abc = {a: 'a', b: 234, c: 'c'};

const result = getProperty<typeof abc, 'a' | 'b' | 'c'>(abc, 'a');


const aa: Pick<A, 'a1'> = {a1: ''}
const aaaa: Omit<A, 'a'> = {a1: ''}

enum Size {
    s = 's',
    m = 'm',
    l = 'l',
    xl = 'xl'
}

type Sizes = 'xs' | 's' | 'm' | 'l' | 'xl';

const SIZE = {
    xs: 'xs',
    s: 's',
    m: 'm',
    l: 'l',
    xl : 'xl'
} as const;

const buttonClasses: Partial<Record<Size, string>> = {
    [Size.s]: 'smallButton',
    [Size.m]: 'mediumButton',
    [Size.l]: 'largeButton',
    [Size.xl]: 'veryLargeButton',
};

let obj: object = {};
// obj.a;

// const aaa: A = {a1: ''}


