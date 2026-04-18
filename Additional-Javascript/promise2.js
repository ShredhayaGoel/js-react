async function getdata() {
    try {
        const response = await fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json");
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.log("E", error)
    }
}
getdata();

fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json")
    .then((response) => {
        //    const data = response.json();
        return response.json();
    }).then(
        (data) => {
            console.log(data);

        }
    )
    .catch((error) => {
        console.log(error);
    })