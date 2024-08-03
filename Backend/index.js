const ConnectToMongo= require('./db')
var cors= require('cors');


ConnectToMongo();

const express = require('express');
const app = express();
const port = 5000;

app.use(cors()) // CORS-Cross-Origin Resource Sharing - mechanism that allows a web application running on one domain to request resources from another domain
// For instance, if your frontend React application is served from http://localhost:3000 and your backend Express server is running on http://localhost:5000, the browser will block the requests from the frontend to the backend unless CORS is configured to allow this.
app.use(express.json());// middleware used for the usage of req.body to get the data from web pages
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
    console.log(`My app listening at http://localhost:${port}`);
});