console.log('Hi there!');


const myName: string = 'Desmond';

const ten: number = 10;
const negative: number = -1000;
const decimal: number = 10.0001;

const yes: boolean = true;

const nothinghere: null = null;

const noDefinition: undefined = undefined;

const anyTHing: any = undefined;

const antoherName = 'Vinod'; // Type inference

let secondName: string; // better to annotate to gain support

if(1 === 1) {
    secondName = 'Fernando';
} else {
    secondName = 'Saman';
}

const sentence = 'THis is a sentence';
// sentence.includes('is');

console.log(noDefinition);

// basic functions

const add = (a: number, b: number): number => {
    return a + b;
};

const joinString = (a: string, b: string): string => {
    return a + b;
};

function add_withKeyword(a: number, b: number): number  {
    return a + b;
}

const joinString_withKeyword = function(a: string, b: string): string {
    return a + b;
}

// const post: { title: string, daysOld: number, published: boolean } = {
//     title: 'Latest Typescript News',
//     daysOld: 10,
//     published: true
// };

// const printPost = (postToPrint: { title: string, daysOld: number, published: boolean }) => {
//     return `${postToPrint.title} (${postToPrint.daysOld} days old)`;
// };

// interface PostGatekeeper { 
//     title: string;
//     daysOld: number; 
//     published: boolean; 
// }

// const post = {
//     title: 'Latest Typescript News',
//     daysOld: 10,
//     published: true
// };

// const printPost = (postToPrint: PostGatekeeper) => {
//     return `${postToPrint.title} (${postToPrint.daysOld} days old)`;
// };

// printPost(post);


// class Car {

//     // color: string;
//     // year: number;

//     // constructor(color: string, year: number) {
//     //     this.color = color;
//     //     this.year = year;
//     // }

//     constructor(public color: string, private year: number) {}

//     drive() {
//         console.log('Vroom');
//         console.log(this.color);
//     }
// }

// const myCar = new Car('red', 2000);
// myCar.drive();
// myCar.color = 'green';
// myCar.drive();


const Component = (target: any) => {
    console.log(target);
};

@Component
class Engine {
    // @Component year: string;

    // @Component
    // drive(@Component speed: number) {

    // }

    // @Component //accessors
    // get year {

    // }
}

import { Car } from './Car';

const myCar =  new Car();
myCar.stop();