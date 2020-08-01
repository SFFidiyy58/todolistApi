const createError = require('http-errors');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const config = require('./config/config');
const routes= require('./routers/Routers');
const app = express();

mongoose.connect(config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    usefindAndModify: false
});

app.use(cors()); //enable cors
app.use(logger('dev'));
app.use(express('json'));
app.use(express.urlencoded({extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/todos', routes);
//menampilkan 404
app.use((req, res, next) => {
    next(createError(404));
});

//error handler
app.use((err, req, res) => {
    //set locals, hanya menampilkan error pada deelopment
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err:{};

    //render the errpr page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(config.APP_PORT); //mendengar port yang sudah didefinisikan pada config
module.exports = app;