const languages = {
    js: 'javascript',
    rb: 'ruby',
    cpp: 'c++'
}

for (const key in languages) {
    console.log(`languages are ${key} and values are ${languages[key]}`);
} /*
for (const key of languages) {
    console.log(key);
}*/

for (const key in languages) {
    console.log(`languages are ${key} and values are ${languages[key]}`);
}

console.log("forin loop in maps")
const map = new Map();

map.set('IN', "INDIA");
map.set('RS', "RUSSIA");
map.set('DB', "DUBAI");

for (const key in map) {
    console.log(key);
}
// only executes
// Reason

// 👉 for...in works on:

// Object properties (keys)