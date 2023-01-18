const testConst = 234

export enum TestEnum {
    A = testConst,
    B = 2,
    C,
    D
}

console.log(TestEnum.A);
console.log(TestEnum[99]);

const enum Size {
    s = 's',
    m = 'm',
    l = 'l'
}

function getEnumValue(a: TestEnum) {

}

getEnumValue(TestEnum.D);
getEnumValue(TestEnum.A);
getEnumValue(TestEnum.B);
getEnumValue(TestEnum.C);

let enumVar: TestEnum;

enumVar = TestEnum.A;

Object.keys(TestEnum);

let buttonSize: Size = Size.m;

buttonSize = Size.l;

console.log(Size.m === 'm');


const UiSizes = {
    xs: 'xs',
    m: 'm',
    l: 'l',
} as const;

type UiSizes = keyof typeof UiSizes;

// type UiSizes = 's' | 'm' | 'l';

const textSize: UiSizes = UiSizes.xs;