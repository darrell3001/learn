export class Animal {
    constructor (type, legs, sound) {
        this.type = type;
        this.legs = legs;
        this.sound = sound;
    }

    makeNoise() {
        console.log(this.sound);
    }

    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}, Sound: {$sound}`;
    }
}

export class Cat extends Animal {
    constructor(type = "cat", legs = 4, sound = "meow") {
        super(type,legs,sound);
    }

}

export class Dog extends Animal {
    constructor(type = "dog", legs = 4, sound = "woof") {
        super(type,legs,sound);
    }

}
