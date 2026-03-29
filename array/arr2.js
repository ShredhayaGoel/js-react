const a = [1, 2, 3, true, 'string', false]
const b = [482, 53789, 446, true, 'string', false]

//  a.push(b);
console.log(a);

console.log("concat");

console.log(a.concat(b));
console.log(a);

console.log(...a, ...b);
console.log("flat");

const c = [123, [456, 794, [455]], 'true', [[451], 1241221, 481, 756]]
console.log("a.concat(c)");

console.log(a.concat(c));

console.log(c.flat(Infinity));

console.log(a.slice(1, 2));
console.log(a);

console.log(b);

console.log(b.splice(1, 2));

console.log(b);

let score = 100;
let score1 = 200;
let score2 = 300;

console.log("Array.of")
console.log(Array.of(score, score1, score2));

console.log(Array.isArray('Shredhaya goel'));
console.log(Array.isArray(a));

console.log(Array.from("Sshredhaya Goel"));

console.log(Array.isArray('Sshredhaya Goel'));

console.log(Object.entries({ name: "Sshredhaya Goel" }));
