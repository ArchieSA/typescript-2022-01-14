enum Size {
    s = 's',
    m = 'm',
}

interface Owner {
    name: string;
    age: number;
}

interface Pet {
    owner: Owner;
    size: string;
}

interface Dog {
    weight: number;
    readonly color: string;
}

interface Bulldog extends Pet, Dog {
    snoringVolume: number;
    size: 's' | 'm';
}

export interface Cat {
    name?: string
    age: number
}

export interface Cat {
    owner?: Owner;
}

const owner: Owner = {
    name: 'Artem',
    age: 1000,
}

export const frenchBulldog: Bulldog = {
    weight: 12,
    color: 'fawn',
    owner,
    snoringVolume: 9,
    size: 'm'
}

const corgi: Dog = {
    weight: 9,
    color: 'golden',
}

const cat: Cat = {
    age: 7,
};