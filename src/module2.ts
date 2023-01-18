// Boolean
export let isTrue: boolean = true;

// Number
let emptyNum: number;
let num: number = 10;
let float: number = 10.5;
let binary: number = 0b101;

// BigInt
Number.MAX_SAFE_INTEGER
let bigNumber: bigint = 100n;

// String
let str: string = 'string';

// Null
let nullVar: null = null;

// Undefined
let undefinedVar: undefined = undefined;

// Object
let objectVar: {
    a: string;
    b: number;
    c: {
        d: boolean
    }
} = {
    a: 'a',
    b: 23,
    c: {
        d: true,
    },
};

// Array
let arrayVar: string[] = ['a', 'b', 'c'];

let arrayVar2: ((((string[])[])[])[])[] = [];

let arrayVar3: {a: string}[] = [];
arrayVar3.push({a: 'a'});

arrayVar3 = [...arrayVar3, {a: ''}]

// Tuple
let tuple: [number, number, string, boolean, number] = [1, 3, 'a', true, 5];

tuple = [1, 3, 'a', true, 5];

let tuple2: [string, number] = ['a', 2];

// any
let anyVar: any = '123';
anyVar = {};
anyVar = 23;

let anyCustomVar: {a: string} = anyVar;

// unknown
let unknownVar: unknown = {a: ''};

// let unknownCustomVar: {a: string} = unknownVar;
// unknownVar.a;

//Void
function testFunction(a: string, c: {a: number}, b?: object ): string {
    return 'string';
}

testFunction('123', {a: 23});
function testFunctionVoid() {
}

// Literal
let fontWeight: 500 | 600 | 700 = 500;
let position: 'fixed' | 'absolute' = 'fixed';

