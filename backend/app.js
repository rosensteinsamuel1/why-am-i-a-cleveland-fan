const express = require('express');
const bodyParser = require('body-parser');

const postsRoutes = require('./routes/postsRoutes')

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
    next();
})

// app.get('/comments', mongoPrac.getPosts);

app.listen(5000);