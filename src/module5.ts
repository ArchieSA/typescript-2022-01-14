type Size  = string;
export type Seconds = 's' | 'm' | 'l';

type Dog = {
    weight: number;
    color: number;
    owner: {
        name: string
    }
}

type Dog2 = { color: string | 5 | 7, owner: {age: number}};

type Bulldog = Dog & Dog2;

const dog: Bulldog = {
    weight: 12,
    color: 5,
    owner: {
        name: '',
        age: 99,
    }
}