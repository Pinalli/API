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

getUsers();
getUser(2);
//addNewUser(newUser);

