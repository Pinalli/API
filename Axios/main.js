const url = "http://localhost:5500/api";

const newUser = {
    name: "Valéria Valença",
    avatar: "http://picsum.com.br/200/300",
    city: "Santos"
};

//GET
function getUsers() {
    axios.get(url)
        .then(response => {
            apiResult.textContent = JSON.stringify(response.data);
        })
        .catch(error => console.error(error));
}
//POST = envia para a API e retorna
function addNewUser(newUser) {

    axios.post(url, newUser)

        .then(response => {
            console.log(response);
        })
        .catch(error => console.error(error));
}
//GET = busca um usuário específico
function getUser(id) {
    axios.get(`${url}/${id}`)
        .then(response => {

            userName.textContent = response.data.name;
            userCity.textContent = response.data.city;
            userID.textContent = response.data.id;
            userAvatar.src = response.data.avatar;
        })
        .catch(error => console.error(error));
}
//PUT = atualiza/altera um usuário específico
function updatedUser(id, userUpdated) {
    axios.put(`${url}/${id}`, userUpdated)
        .then(response => {
            console.log(response);
        })
        .catch(error => console.error(error));
}
const userUpdated = {
    name: "Casemiro de Abreu",
    avatar: "http://picsum.com.br/200/300",
    city: "Cruz Alta"
}

getUsers();
getUser(2);
updatedUser(4, userUpdated);
//addNewUser(newUser);

