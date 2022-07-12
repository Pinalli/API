const express = require('express');

const app = express();
app.listen('3000')

// app.listen(3000, () => {
//     console.log('Server started on port 3000');
// })

// app.route('/').get((req, res) =>
//     res.send('Hello World')
// )
// app.route('/sobre').get((req, res) =>
//     res.send('Hello, sobre')
// )
app.route('/').post((req, res) => console.log(req.body))