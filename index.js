//fun statment
function run3(x, y) {
    return x + y;
}

//fun expression
const run4 = function (x, y) {
    return x + y;
}


//arrow function
const run = (x, y) => x + y;
// console.log(run(5, 15));

const run1 = (x, y) => {
    return x * y;
};
// console.log(run1(5, 10));

const run2 = x => `this is arrow fun with parameter x : ${x}`;
// console.log(run2(8));

const obj = {
    myName: 'linn pyae pyae',
    myAge: 20,
    teach() {
        console.log(this);
        return this.myName + 'can teach';
    },
    eat: (food) => obj.myName + ' can eat' + food,
    test: () => {
        console.log(this);
    },

};

// console.log(obj.teach());
// console.log(obj.eat(" hotpot"));
// console.log(obj.test());

// Call Back Function
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

function mycalc(num1, num2, callback) {
    let sum = num1 + num2;
    return callback(sum);
}

// mycalc(2, 3, function (x) {
//     console.log(x);
// });

// mycalc(6, 1, function (x) {
//     alert(x);
// });

// console.log(mycalc(2, 3, (x) => x + x));

let name = 'Hello lpp';
console.log(name);
console.log(name[7]);
const myString = new String('hello lPP');
console.log(myString);
console.log(typeof myString);
console.log(myString[0]);
console.log(myString.length);

class Me {
    a = 'a';
    b = 'b';
    x() {
        return 'x';
    }
    y() {
        return 'y';
    }
};

const me = new Me();
// console.log(me);

// console.log(myString.toUpperCase());
// console.log(myString.toLowerCase());

// console.log(myString.substr(0, 5));
// console.log(myString.search('he'));
// console.log(myString.search('za'));
// console.log(myString.replace('PP', 'oo'));
// console.log(myString.replaceAll('PP', 'oo'));


const string1 = new String('    hello   ');
// console.log(string1);
// console.log(string1.toString());
// console.log(string1.trim().length);
// console.log(string1.trimStart());
// console.log(string1.trimEnd());


// //0000 0000 0000 0000
// console.log('AB'.padStart(16, '0'));
// console.log('AB'.padEnd(16, '0 '));

// console.log(myString.split(" "));

const no = new Number("123.785641");
// console.log(no);

// console.log(no.toString());
// console.log(no.toFixed(2));
// console.log(no.toPrecision(10));
// console.log(Number(no));

const arr = new Array();
// console.log(arr);

const fruits = ['banana', 'apple', 'mango', 'lemon', 'orange'];
console.log(fruits);

//arr to string
// console.log(fruits.toString());
// console.log(fruits.join("--"));
// console.log(fruits.length);
// console.log(fruits.sort());
// console.log(fruits.reverse());

// fruits.push('aa');
// fruits.push('bb');
// console.log(fruits);

// fruits.unshift('cc');
// fruits.unshift('dd');
// fruits.unshift('ee');
// console.log(fruits);

// fruits.pop();
// fruits.pop();
// fruits.pop();
// console.log(fruits);

// fruits.shift();
// fruits.shift();
// fruits.shift();
// console.log(fruits);

// fruits.splice(2, 0, 'hi', 'hello');
// console.log(fruits);

for (fruit of fruits) {
    console.log(fruit);
}

// fruits.forEach((fruit, index, arr) => { console.log(index, fruit, arr) });

fruits.forEach(function (fruit, idx, arr) {
    console.log(fruit);
});