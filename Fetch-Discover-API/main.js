const url = "http://localhost:5500/api";

function getUsers() {
    fetch(url)
        .then(response => (response.json()))
        .then(data => renderApiResult.textContent = JSON.stringify(data))
        .catch(error => console.log(error))
}

function getUser() {
    fetch(`${url}/1`)
        .then(response => (response.json()))
        .then(data => {
            userName.textContent = data.name;
            userCity.textContent = data.city;
            userAvatar.src = data.avatar;
        })
        .catch(error => console.log(error))
}

function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
        .then(response => (response.json()))
        .then(data => alertAPI.textContent = data)
        .catch(error => console.log(error),

        )
}

const newUser = {
    name: "Olivia Zarski",
    avatar: "http://lorempixel.com.br/400/200",
    city: "São Paulo"
}

addUser(newUser);
getUsers();
getUser();