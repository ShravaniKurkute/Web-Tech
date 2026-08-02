fetch("navbar.html").then(response => response.text())
.then(data => {
    document.getElementById("navbar-container").innerHTML = data;
});

fetch("footer.html").then(response => response.text())
.then(data => {
    document.getElementById("footer-container").innerHTML = data;
});


const url = "https://jsonplaceholder.typicode.com/users";

const apiCard = document.querySelector("#api-card");

console.log("Getting data from api");

const getapidata = async () => {

    let response = await fetch(url);

    console.log(response);
    console.log(response.status);

    let data = await response.json();

    console.log(data);

    for(let i = 0; i < 5; i++){

        apiCard.innerHTML += `
            <div class="guest">
                <p>Name: ${data[i].name}</p>
                <p>Email: ${data[i].email}</p>
            </div>
        `;
    }
};

getapidata();