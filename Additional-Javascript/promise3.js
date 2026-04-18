async function users() {
    try {
        const responsee = await fetch("https://jsonplaceholder.typicode.com/users");
        const dataa = await responsee.json();
        console.log(dataa);
    }
    catch (error) {
        console.log(error);
    }
}

users();


fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

const data = {
    tittle: "This is a title",
    body: 'this is post body',
    userid: 2
}

fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-type": "application/json",
    }
}).then(res => res.json())
    .then(data => console.log(data));

console.log("GET request");

function getuser() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log("GET", data);
        })
        .catch((error) => {
            console.log(error);
        });
}

getuser();

console.log("POST request");
function adduser() {
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(
            {
                name: "SHREDHAYA GOEL",
                EMAIL: "123@EMAPLE.COM"
            }
        ),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => console.log("POST request", data));
}

adduser();

function updateUser() {
    fetch("https://jsonplaceholder.typicode.com/users/10", {
        method: "PUT",
        body: JSON.stringify({
            name: "SHUBH GOEL",
            email: "SG@gmail.com"
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => console.log("PUT:", data));
}

updateUser();

function deleteUser() {
    fetch("https://jsonplaceholder.typicode.com/users/1", {
        method: "DELETE"
    })
        .then(() => console.log("DELETE: User deleted"));
}

deleteUser();