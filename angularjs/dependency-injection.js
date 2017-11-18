// BAD WAY - CREATING A DEPENDENCY
// ================================================================

var Person = function(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
}

// This creates a dependency, where if something were to change to the person constructor,
// then this function will no longer work.
function logPerson() {
    var john = new Person('John', 'Doe')
    console.log(john);
}

logPerson()



// BETTER WAY
// ================================================================

var Person = function(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
}

// logPerson is now NOT dependent on the Person constructor
function logPerson(person) {
    console.log(person);
}

var john = new Person('John', 'Doe')
logPerson(john)
