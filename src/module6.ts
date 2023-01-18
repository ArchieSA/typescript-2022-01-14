import {Cat} from "./module4";

export type Options = {
    a: string;
    [key: number]: string
}

const options: Options = {
    a: '',
    3: '',
    4: '',
    0xfff: ''
}

interface Dog {
    weight: number;
    color: number;
    owner?: {
        name: string
    }
}

const color: Dog['color'] = 123;


type CopyDog = {
    [Property in keyof Dog]: Dog[Property]
}

type PartialDog = {
    [Property in keyof Dog]?: Dog[Property]
}

type RequiredDog = {
    [Property in keyof Dog]-?: Dog[Property]
}

type ReadonlyDog = {
    readonly [Property in keyof Dog]: Dog[Property]
}

type NotReadonlyDog = {
    -readonly [Property in keyof Dog]: Dog[Property]
}

type DogGetters = {
    [Property in keyof Dog as `get${Capitalize<Property>}`]: () => Dog[Property]
}

type DogSetters = {
    [Property in keyof Dog as `set${Capitalize<Property>}`]: (value: Dog[Property]) => void
}

// class DogClass implements Dog, DogGetters, DogSetters {
//     color: number;
//
//     getColor(): Dog["color"] {
//         return undefined;
//     }
//
//     getOwner(): Dog["owner"] {
//         return undefined;
//     }
//
//     getWeight(): Dog["weight"] {
//         return undefined;
//     }
//
//     owner: { name: string };
//
//     setColor(value: Dog["color"]): void {
//     }
//
//     setOwner(value: Dog["owner"]): void {
//     }
//
//     setWeight(value: Dog["weight"]): void {
//     }
//
//     weight: number;
//
// }

type Getters<T> = {
    [Property in keyof T as `get${Capitalize<string & Property>}`]: () => T[Property]
}

type Setters<T> = {
    [Property in keyof T as `set${Capitalize<string & Property>}`]: (value: T[Property]) => void
}

type CompleteType<T> = T & Getters<T> & Setters<T>

// class DogClass implements CompleteType<Dog> {
//     color: number;
//
//     getColor(): Dog["color"] {
//         return undefined;
//     }
//
//     getOwner(): Dog["owner"] {
//         return undefined;
//     }
//
//     getWeight(): Dog["weight"] {
//         return undefined;
//     }
//
//     owner: { name: string };
//
//     setColor<Property>(value: Dog["color"]): void {
//     }
//
//     setOwner<Property>(value: Dog["owner"]): void {
//     }
//
//     setWeight<Property>(value: Dog["weight"]): void {
//     }
//
//     weight: number;
//
// }
//
// class CatClass implements CompleteType<Cat>{
//     age: number;
//
//     getAge(): Cat["age"] {
//         return undefined;
//     }
//
//     getName(): Cat["name"] {
//         return undefined;
//     }
//
//     getOwner(): Cat["owner"] {
//         return undefined;
//     }
//
//     name: string;
//     owner: Owner;
//
//     setAge<Property>(value: Cat["age"]): void {
//     }
//
//     setName<Property>(value: Cat["name"]): void {
//     }
//
//     setOwner<Property>(value: Cat["owner"]): void {
//     }
//
// }
