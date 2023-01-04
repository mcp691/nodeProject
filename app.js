const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://<USERNAME>:<PASSWORD>@nodeproj.7wfqr2m.mongodb.net/?retryWrites=true&w=majority';

// remove depreciation warning
mongoose.set("strictQuery", false);

mongoose.connect(dbURI, { useNewUrlParser: true })
.then((result) => app.listen(3000))
.catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware and static files

app.use(express.static('public'));

app.use(morgan('dev'));

app.get('/', (req, res) => {
    const blogs = [

    ];
    res.render('index', { title: 'Home', blogs});
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create Blog'});
})

// 404
app.use((req, res) => {
    res.status(404).render('404', { title: '404 Page Not Found'});
});