//import
const express = require('express');
const axios = require('axios');


const app = express();
app.listen('3000')
let author = "Alberto";


// app.listen(3000, () => {
//     console.log('Server started on port 3000');
// })


//GET == pegar
// app.route('/').get((req, res) =>
//     res.send('Hello World')
// )
// app.route('/sobre').get((req, res) =>
//     res.send('Hello, sobre')
// )

//middleware
// app.use((express.json()))
//POST
// app.route('/').post((req, res) => res.send(req.body))

//PUT  == editar ou alterar
// app.use((express.json()))
// let author = "Alberto";

// app.route('/').get((req, res) => res.send(author))

// app.route('/').put((req, res) => {
//     author = req.body.author;  //.author só mostra o valor, sem o json inteiro
//     res.send(author)
// })

//DELETE == deletar
// app.route('/:id').delete((req, res) => {
//     res.send(req.params.id)
// })


//middleware
// app.use((express.json()))
// app.route('/').post((req, res) => {
//     const { nome, cidade } = req.body;
//     res.send(`Meu nome é ${nome} e eu moro em ${cidade}`)
//     // res.send(req.body)
//     //console.log(req.body)
// })

//parametros pela rota
// app.route('/').get((req, res) => res.send("Olá"))
// app.route('/:variavel').get((req, res) => res.send(req.params.variavel))
// app.route('/:id/:nome').get((req, res) => res.send(req.params.nome))

//query params == parametros que vem na url
// app.route('/').get((req, res) => res.send(req.query))
// app.route('/about/user').get((req, res) => res.send(req.query))

//busca API  
//npm i axios   
//axios.get('https://jsonplaceholder.typicode.com/users')
app.route('/').get((req, res) => {
    axios.get('https://api.github.com/users/pinalli')
        .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))  //template string
        .catch(error => console.log(error))
})