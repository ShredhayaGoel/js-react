const user = {
    name: 'Shredhaya Goel',
    age: 21
}
function handleuser(anyobject) {
    console.log(`username is ${anyobject.name} and  age is ${anyobject.age}`)
}
console.log("start");
console.log(handleuser(user));


console.log(handleuser(
    {
        name: 'shubh goel',
        age: 21
    }
));