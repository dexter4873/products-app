const express = require('express');
const morgan = require('morgan');
const ejs = require('ejs');


// Initializations
const app = express();

// Settings
app.use(express.static('./public'))
app.set('views', './views')
app.set('view-engine', 'ejs') 
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('tiny'));

// Routes
app.get('/', (req, res) => {
    res.render('index.ejs')
});

// Server running 
app.listen(app.get('port'), () => {
    console.log('Running server at http://localhost:' + app.get('port'));
});