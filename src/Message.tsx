
class Person {
    
    constructor(
        public name: string,
        public age: number
    ) {}
    
    string() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }

}

export default function Message() {

    let person: Person;

    person = new Person('John', 25);

    if (person) {
        return <p>{person.string()}</p>
    }
    
    person = new Person('Adam', 19);

    return <p>Name: {person.name}, Age: {person.age}</p>
}