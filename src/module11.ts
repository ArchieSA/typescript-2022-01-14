export let a = 'a';

function calculate(a: number, b: number) {
    if (a > 0) {
        return `${a} + ${b}`;
    }
    return a + b;
}

function getProperty<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const abc = {a: 'a', b: 234, c: 'c'};

const result = getProperty(abc, 'b');



function call<ReturnType, Arguments extends any[]>(functionToCall: (...args: Arguments) => ReturnType, ...args: Arguments): ReturnType {
    return functionToCall(...args);
}

const result2 = call((a, b, c) => a, '1', '2', 45);


type FunctionReturnType<FunctionType extends (...args: any[]) => any> = FunctionType extends (...args: any[]) => infer ReturnType ? ReturnType : never;

// type ReturnType = FunctionReturnType<typeof call<string, [string]>>;

const result3: ReturnType<typeof calculate> = '';

