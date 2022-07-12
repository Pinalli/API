const url = "http://localhost:5500/api";

const newUser = {
    name: "Olivia Zarski",
    avatar: "http://lorempixel.com.br/400/200",
    city: "São Paulo"
}
const updatedUser = {
    name: "João Batista",
    avatar: "http://lorempixel.com.br/400/200",
    city: "Curitiba"
}

function getUsers() {
    fetch(url)
        .then(response => (response.json()))
        .then(data => renderApiResult.textContent = JSON.stringify(data))
        .catch(error => console.log(error))
}

function getUser(id) {
    fetch(`${url}/${id}`)
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


//PUT
function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
        .then(response => (response.json()))
        .then(data => alertAPI.textContent = data)
        .catch(error => console.log(error))
}




addUser(newUser);
getUsers();
getUser(6);
updateUser(updatedUser, 6);