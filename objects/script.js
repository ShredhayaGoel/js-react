const user = {
    name: "shubh goel",
    age: 21,
    email: "shubhgoel@gmail.com",
    bool: true,
    loginarr: [
        [1, 2, 3],
        [4, 5, 6]
    ]
}
const user2 = {
    "Full Name": "SHREDHAYA GOEL",
    'FULL-NAME': 'SHREDHAYA-GOEL',
    EMAIL: 'shredhayagoel@gmail.com',
    1: 'one'
}
console.log(user);
console.log(user.name);
console.log(user['email']);

console.log(user.age);
console.log('user.age');
console.log(user2);
console.log(user2['1']);
console.log(user2["FULL-NAME"]);
console.log(user2['FULL-NAME']);
console.log(user2[1]);
console.log(user2['Full Name']);
console.log(user2['EMAIL']);
console.log(user2.EMAIL);
console.log(user.loginarr)


