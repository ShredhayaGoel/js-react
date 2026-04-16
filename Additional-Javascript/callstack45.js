function first() {
    console.log("first");
    second();
    console.log("first again");
}
function second() {
    console.log("second");
    console.log(third());
    console.log("second again");
}
function third() {
    console.log("third");
    console.log("third again");
    return "hello";
}
first();
second();
third();