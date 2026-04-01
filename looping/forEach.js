const coding = [
    {
        "lang-name": "java",
        "lang-file": "java"
    },
    {
        "lang-name": "java-script",
        "lang-file": "js"
    },
    {
        "lang-name": "phython",
        "lang-file": "py"
    }
]
// by traditional function 

console.log("traditional function");

// in forEach loop we can pass single function at a time not two or three if pass then 1 st functon willl be executed 
coding.forEach(
    function (item, index, arr) {
        console.log(index, item, arr);
        console.log(item["lang-name"]);

    },
    function (item) {
        console.log(item);
    }



)
function printdetails(item) {
    console.log(item);
}
// by function passing in forEach loop

console.log("by function passing in forEach loop");
coding.forEach(printdetails);

coding.forEach(function (item) {
    console.log(item["lang-name"]);
})
