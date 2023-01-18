export const t = '';

// import 'reflect-metadata';
//
// type Constructor<T extends object> = new (...args: any[]) => T;
//
// const instanceMap = new Map<Constructor<object>, object>();
//
// function isClassMetadata(metadata: unknown): metadata is ClassMetadata {
//     const data = metadata as ClassMetadata;
//
//     return typeof data.isSingleton === 'boolean';
// }
//
// function getInstance<T extends object>(classConstructor: Constructor<T>) {
//     const metadata = Reflect.getMetadata('classMetadata', classConstructor);
//
//     if (isClassMetadata(metadata) && metadata.isSingleton) {
//         if (!instanceMap.has(classConstructor)) {
//             instanceMap.set(classConstructor, new classConstructor());
//         }
//
//         return instanceMap.get(classConstructor);
//     }
//
//     return new classConstructor();
// }
//
// interface ClassMetadata {
//     isSingleton: boolean;
// }
//
//
// function Custom(metadata: ClassMetadata) {
//     return function (classConstructor: Constructor<object>) {
//         Reflect.defineMetadata('classMetadata', metadata, classConstructor);
//     }
// }
//
// @Custom({
//     isSingleton: true,
// })
// export class Calculator {
//     a = '';
//
//     static b = 'b';
//
//     constructor(a: string) {
//         this.a = a;
//     }
//
//     @LogTime(false)
//     calculate() {
//
//     }
//
//     @LogTime(true)
//     calculate2() {
//
//     }
//
// }
//
// function LogTime(isDev: boolean) {
//     return (target: Object, propertyName: string, descriptor: PropertyDescriptor) => {
//         console.log('target: ', target);
//         console.log('propertyName: ', propertyName);
//         console.log('descriptor: ', descriptor);
//
//         if (!isDev) {
//             return;
//         }
//
//         const method = descriptor.value;
//         descriptor.value = function (...args: any[]) {
//             console.time(propertyName);
//             const result = method.apply(this, args);
//             console.timeEnd(propertyName);
//             return result;
//         }
//     }
// }
//
//
// new Calculator('a').calculate();
//
// interface Conditions {
//     equality?: number
//     range?: {
//         from: number,
//         to: number,
//     }
// }
//
//
// function Params(conditions: Conditions) {
//     return function (object: Object, propertyName: string) {
//         Reflect.defineMetadata(`conditions_${propertyName}`, conditions, object.constructor)
//     }
// }
//
// class Bulldog {
//     @Params({
//         range: {
//             from: 10,
//             to: 14,
//         }
//     })
//     weight: number;
//
//     @Params({
//         equality: 14,
//     })
//     height: number;
//
//     constructor(weight: number, height: number) {
//         this.height = height;
//         this.weight = weight;
//     }
// }
//
//
// function isParam(metadata: unknown): metadata is Conditions {
//     const data = metadata as Conditions;
//
//     if (!data) {
//         return false;
//     }
//
//     if (typeof data.equality === 'number') {
//         return true;
//     }
//
//     if (typeof data.range?.from === "number" && typeof data.range?.to === "number") {
//         return true
//     }
//
//     return false;
// }
//
// function validate<Animal extends object>(animal: Animal) {
//     const properties = Object.getOwnPropertyNames(animal);
//
//     return properties.every(property => {
//         const metadata = Reflect.getMetadata(`conditions_${property}`, animal.constructor);
//
//         if (!isParam(metadata)) {
//             return true;
//         }
//
//         const { equality, range} = metadata
//         const value = animal[property as keyof Animal];
//
//         if (typeof value !== 'number') {
//             return false;
//         }
//
//         if (equality) {
//             return value === equality
//         }
//
//         if (range) {
//             return value >= range.from && value <= range.to;
//         }
//
//         return true;
//     })
// }
//
// console.log('isValid: ', validate(new Bulldog(11, 14)));
// console.log('isValid: ', validate(new Bulldog(9, 14)));
// console.log('isValid: ', validate(new Bulldog(11, 15)));
//
//
//
//
//
