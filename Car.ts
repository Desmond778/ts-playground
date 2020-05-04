interface Drivable {
    speed: number;
    drive(): string;
}

export class Car implements Drivable{
    year = 2000;
    speed = 10;

    drive() {
        // console.log(`I am drving at ${ this.speed }`);
        return `I am drving at ${ this.speed }`;
    }

    stop() {
        console.log('Stoping a car');
    }
}

const myCar = new Car();

const startDriving = (vehicle: Drivable) => {
    vehicle.drive();
};

startDriving(myCar);


class ValueHolder<T> {
    value: T
}

const numberHolder = new ValueHolder<number>();
numberHolder.value = 10;

const stringHolder = new ValueHolder<string>();
stringHolder.value = 'Desmond';

const valueWrapper = <T>(value: T): T[] => {
    return [value];
};

valueWrapper<number>(10);
valueWrapper<boolean>(true);
valueWrapper<string>('dsfsdf');

const value = valueWrapper(20); // Type inference

