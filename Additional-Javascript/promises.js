const promiseone = new Promise(
    function (resolve1, reject) {
        setTimeout(function () {
            console.log("promise 1 done");
            resolve1()
        }, 3000)
    }
)
promiseone.then(function () {
    console.log("promise 1 consumed");
})



const promisetwo = new Promise(
    function (resolve2, reject) {
        setTimeout(() => {
            console.log("promise two done");
            resolve2();
        }, 2000);
    }
).then(function () {
    console.log("promise 2 consumed");
})


const promise3 = new Promise(
    function (resolve3, reject) {
        setTimeout(() => {
            resolve3(
                {
                    username: "Shredhaya Goel",
                    email: "sh@example.com"
                }
            )
        }, 1000);
    }
)
promise3.then(
    (user) => {
        console.log(user);
    }
)
/*
promise3.then(funtion (user) {
    console.log(user)
})*/

const promise4 = new Promise(
    function (resolve4, reject) {
        setTimeout(() => {
            let error = true;
            if (!error) {
                resolve4({ username: "shubh goel", passwrod: "123" })
            }
            else {
                reject('Error : something went wrong');
            }
        }, 5000)
    }
) /* givess error because we have not handled the rejected promise with .catch() method. So we will handle it with .catch() method. *
const ttry = promise4.then((user) => { // UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, 
// or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "Error : something went wrong".
    console.log(user);
    return user.username;
})
console.log(ttry);*/

promise4
    .then((user) => {
        console.log(user);
        return user.username;
    }
    )
    .then((username) => {
        console.log(username);
    }
    )
    .catch(
        function (error) {
            console.log(error);
        }
    )
    .finally(() => {
        console.log("finally block executed");
    }
    )

const promise5 = new Promise(
    function (resolve5, reject) {
        setTimeout(() => {
            let error = true;
            console.log("promise 5 is coming")
            if (error) {
                resolve5({ username: "shubh goel", passwrod: "123" })
            }
            else {
                reject('Error : js went wrong');
            }
        }, 5000)
    }
)

async function consumepromise5() {
    try {
        const reponse = await promise5
        console.log(reponse);
    }

    catch (error) {
        console.log(error);
    }
}

consumepromise5()
