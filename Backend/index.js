const ConnectToMongo= require('./db')

ConnectToMongo();

const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());// middleware used for the usage of req.body to get the data from web pages
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
    console.log(`My app listening at http://localhost:${port}`);
});