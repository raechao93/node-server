
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
// mongoose.connect(
//     'mongodb://localhost:27017/whiteboard-02',
//     {useNewUrlParser: true, useUnifiedTopology: true});

app.listen(process.env.PORT || 3001)
const mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://raechao:930715@cluster0.wgztp.mongodb.net/whiteboard?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Configures CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome')
});

require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)
require('./controllers/quiz-attempts-controller')(app)

// const demo = require('./controllers/demo-controller')
// demo(app)
//
// const quizzes = require('./controllers/quizzes-controller')
// quizzes(app)
//
// const questions = require('./controllers/questions-controller')
// questions(app)

app.listen(4000)


// const express = require('express')
// const app = express()
//
// const mongoose = require('mongoose');
// // mongoose.connect(
// //     'mongodb://localhost:27017/whiteboard-02',
// //     {useNewUrlParser: true, useUnifiedTopology: true});
//
// mongoose.connect(
//     'mongodb+srv://raechao:930715@cluster0.wgztp.mongodb.net/whiteboard?retryWrites=true&w=majority',
//     {useNewUrlParser: true, useUnifiedTopology: true});
//
// //Configures CORS
// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers',
//         'Content-Type, X-Requested-With, Origin');
//     res.header('Access-Control-Allow-Methods',
//         'GET, POST, PUT, PATCH, DELETE, OPTIONS');
//     next();
// });
//
//
// const demo = require('./controllers/demo-controller')
// demo(app)
//
// const quizzes = require('./controllers/quizzes-controller')
// quizzes(app)
//
// const questions = require('./controllers/questions-controller')
// questions(app)
//
// app.listen(4000)