const A = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function array(...arr) {
    return [arr, arr[0], arr[1]];
}/*
console.log(array(A));
console.log(array());
console.log(array);

function array1(...arr) {
    return arr[1];
}
console.log(array1([5, 5]));

*/
console.log(array());
console.log(array(...A));
console.log(array(A,));
console.log(array(A, [1, 2, 3]));

function array1(arr) {
    return arr;
}
console.log("new array");

console.log(array1());

console.log(array1(A));
