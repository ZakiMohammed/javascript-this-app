// Lexical Environment: The area where we write the code
// Execution Context: The area where program runs
// Execution Record: The resource (variables, functions, objects) which helps to run the code in execution context
// Binding: When code runs, the resource gets available in the execution record, this process is called as binding

// -------------------------------------------------------------------------------------
// 1. Implicit Binding

const hero = {
    firstName: 'Peter',
    lastName: 'Parker',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log('1. Implicit Binding');
console.log('Full Name: ', hero.fullName());

// -------------------------------------------------------------------------------------
// 2. Explicit Binding

function areaOfRectangle() {
    return this.length * this.width;
}

const rectangle1 = { length: 2, width: 2 };
const rectangle2 = { length: 3, width: 2 };

const area1 = areaOfRectangle.call(rectangle1);
const area2 = areaOfRectangle.apply(rectangle2);

console.log('2. Explicit Binding');
console.log('Area 1: ', area1);
console.log('Area 2: ', area2);

const rectangle3 = { length: 4, width: 2 };

const areaOfRectangleRevised = areaOfRectangle.bind(rectangle3);

console.log('Area 3: ', areaOfRectangleRevised());

const rectangle4 = { length: 5, width: 2 };

const areaOfRectangleRevisedRevised = areaOfRectangleRevised.bind(rectangle4);  // lol, won't bind to new one

console.log('Area 4: ', areaOfRectangleRevisedRevised());

// -------------------------------------------------------------------------------------
// 3. Function with new constructor

function Book(title, author) {
    this.title = title;
    this.author = author;
};

const book1 = new Book('Harry Potter', 'J. K. Rowling');
const book2 = new Book('A Game of Thrones', 'George R. R. Martin');

console.log('3. Function with new constructor');
console.log('Book 1', book1);
console.log('Book 2', book2);

// -------------------------------------------------------------------------------------
// 4. HTML Event

console.log('4. HTML Event');

const click1 = document.getElementById('click1');
const click2 = document.getElementById('click2');

click1.addEventListener('click', function () {
    console.log('Click 1 Handler: ', this);
})

function click2Handler() {
    // 'use strict'
    console.log('Click 2 Handler: ', this);
}

click1.click();
click2.click();

// -------------------------------------------------------------------------------------
// 5. Global Object

console.log('5. Global Object');

console.log('Object: ', this);