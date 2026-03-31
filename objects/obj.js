// STANDARD BUILT-IN-OBJECTS
// Object.assign()
// Object.Key()
//Object.values()
//Object.entries()
//Object.hasOwnProperty()

const user = {
    a: '1',
    b: '2'
}

const user2 = {
    a: "8",
    b: "9"
}

const user3 = Object.assign({}, user, user2);
console.log(user3);

const user4 = { a: '1', b: '2' }

const user5 = { a: "4", b: "5" }

const user6 = Object.assign({}, user4, user3)
console.log(user6);


const num = {
    1: 'a0',
    2: 's'
}
const num1 = {
    3: 'a0',
    4: 's'
}

console.log(Object.assign({}, num, num1));

const obj4 = { ...user, ...user2 }
console.log(obj4);

const num5 = { ...num, ...num1 }
console.log(num5);

const userarr = [
    {
        id: 1,
        name: 'Shubh Goel'
    },
    {
        id: 2,
        name: 'shubh goel'
    },
    {
        id: 3,
        name: 'SHREDHAYA GOEL'
    }
]
console.log(userarr[1].name, userarr[2].id)

console.log(userarr[2].name, userarr[1].id)

const s = Object.entries(userarr[0]);
console.log(s);

console.log(userarr[0].hasOwnProperty('id'))

console.log(user.hasOwnProperty('id'));

console.log(Object.keys(user))
console.log(Object.values(user))