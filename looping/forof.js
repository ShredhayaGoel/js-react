const arr = [
    obj1 = {
        name: 'shredhaya goel',
        age: 21
    },
    obj2 = {
        obj: {
            name: "shubh goel",
            age: 21
        }
    }
]

for (const key of arr) {
    console.log(key);
}
console.log(`${arr[1]}`);
/* 
output is [object object]
reason 
${} this calls this 
arr[1].obj.toString()
${} always converts to string
👉 Objects → [object Object]
👉 So always:

Access properties OR
Use JSON.stringify()
*/
console.log(arr[1].obj.name);
console.log(`obj2 has ${(JSON.stringify(arr[1]))} and inside it has nested object called ${'obj'} and inside that it has key name ${arr[1].obj.name}  and age is${arr[1].obj.age}`);

// Maps 

console.log("MAPS");

const map = new Map();

map.set('IN', "INDIA");
map.set('RS', "RUSSIA");
map.set('DB', "DUBAI");


for (const key of map) {

    console.log(key);
}
console.log(map);



for (const [key, values] of map) {

    console.log(key, ":-", values);
}
console.log("different methods");

for (const key of map.keys()) {
    console.log(key);
} for (const key of map.values()) {
    console.log(key);
}
for (const key of map.entries()) {
    console.log(key);
}