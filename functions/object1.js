function calculatecarprice(num) {
    return num;
}
console.log(calculatecarprice(5));

console.log(calculatecarprice(5, 9));

function calculateprice(...num1) {
    return num1;
}

const arr = calculateprice(250, 854, 792, 52, 65, 2, 5, 8, 5, 25, 5, 6, 45, 55, 6, 5, 585, 85);

console.log(arr);

function calculateprice2(val1, val2, ...num1) {
    return num1;
}
console.log(calculateprice2(4545, 56565, 545454, 74, 5, 7, 8, 4, 5, 5, 6, 5, 4, 7, 5, 5, 4, 7, 65, 7, 6, 5, 6, 5, 6, 6, 5, 5, 5, 4, 5, 5, 5, 5))

// passing arrays in functions 

const arr1 = [25, 48, 75, 9695, 98, 5, 86, 85, 85, 78];

function arrayreturn(...arr) {
    return [arr[0], arr[1]];
}
console.log("array passing 1");
console.log(arrayreturn(arr1, [1, 2, 3, 4, 5, 6, 7, 8, 9]));

// arrays and rest operator   

function array2(...arr) {

    return [arr, arr[0], arr[1]];

}
console.log(array2(...arr1));

console.log(array2(arr1, [1, 2, 3, 4, 5, 6, 7, 8, 9]))

console.log(array2([5, 5], [3.6], [4, 8]));
