export class Cat {
    private _name: string;
    private _age: number;
    private _breed: string;

    constructor(name: string, age: number, breed: string) {
        this._name = name;
        this._age = age;
        this._breed = breed;
    }

    getName(): string {
        return this._name;
    }

    getAge(): number {
        return this._age;
    }

    setAge(newAge: number): void {
        if (newAge >= 0) {
            this._age = newAge;
        }
    }
}