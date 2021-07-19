// Lexical Environment: The area where we write the code
// Execution Context: The area where program runs
// Execution Record: The resource (variables, functions, objects) which helps to run the code in execution context
// Binding: When code runs, the resource gets available in the execution record, this process is called as binding

// -------------------------------------------------------------------------------------
// 1. Implicit Binding

const spidey = {
    firstName: 'Peter',
    lastName: 'Parker',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log('1. Implicit Binding');
console.log('Spidey:', spidey.fullName());

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
console.log('Area 1:', area1);
console.log('Area 2:', area2);

const rectangle3 = { length: 4, width: 2 };

const areaOfRectangleRevised = areaOfRectangle.bind(rectangle3);

console.log('Area 3:', areaOfRectangleRevised());

const rectangle4 = { length: 5, width: 2 };

const areaOfRectangleRevisedRevised = areaOfRectangleRevised.bind(rectangle4);  // lol, won't bind to new one

console.log('Area 4:', areaOfRectangleRevisedRevised());

// -------------------------------------------------------------------------------------
// 3. Constructor Function/Classes

// class Book {
//     constructor(title, author) {
//         this.title = title;
//         this.author = author;
//     }
// };
function Book(title, author) {
    this.title = title;
    this.author = author;
};

const book1 = new Book('Harry Potter', 'J. K. Rowling');
const book2 = new Book('A Game of Thrones', 'George R. R. Martin');

console.log('3. Constructor Function/Classes');
console.log('Book 1:', book1);
console.log('Book 2:', book2);

// -------------------------------------------------------------------------------------
// 4. HTML Event Listeners

console.log('4. HTML Event');

const click1 = document.getElementById('click1');

click1.addEventListener('click', function () {
    console.log('Click 1 Handler:', this.innerHTML);
});

click1.click();

// -------------------------------------------------------------------------------------
// 5. Global Object

console.log('5. Global Object');

console.log('Root Level:', this);

// -------------------------------------------------------------------------------------
// 6. Strict Mode

console.log('6. Strict Mode');

function damnStrict() {
    'use strict'
    console.log('Damn Strict:', this);
}

function prettyCasual() {
    console.log('Pretty Casual:', this);
}

damnStrict();
prettyCasual();

// -------------------------------------------------------------------------------------
// 6. Arrow Functions/Methods

const openArrow = () => {
    'use strict'
    console.log('Arrow Function:', this);
};

const arrowGuy1 = {
    arrowCount: 5,
    shootArrow: () => {
        console.log('Guy 1, Arrow Count:', this.arrowCount);
    }
};

const arrowGuy2 = {
    arrowCount: 3,
    shootArrow: function () {
        setTimeout(() => {
            console.log('Guy 2, Arrow Count:', this.arrowCount);
        }, 500);
    }
};

console.log('6. Arrow Functions/Methods');

openArrow();

arrowGuy1.shootArrow();
arrowGuy2.shootArrow();