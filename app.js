<<<<<<< HEAD
//https://hub.packtpub.com/building-movie-api-express/
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const actors = require('./routers/actor');
const movies = require('./routers/movie');
const app = express();
app.listen(8080);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
mongoose.connect('mongodb://localhost:27017/movies',{ useNewUrlParser: true }, function (err) {
    if (err) {
        return console.log('Mongoose - connection error:', err);
    }
    console.log('Connect Successfully');
});
//Configuring Endpoints
//Actor RESTFul endpoionts 
app.get('/actors', actors.getAll);
app.get('/actors/:id', actors.getOne);

app.post('/actors', actors.createOne);
app.post('/actors/:id/:movieID', actors.addMovie);

app.put('/actors/:id', actors.updateOne);


app.delete('/actors/:id', actors.deleteOne);
app.delete('/actors/:id/:movieID', actors.removeMovie); //remove a movie from actor Task3


//Movie RESTFul  endpoints
app.get('/movies', movies.getAll);
app.get('/movies/:id', movies.getOne);
app.get('/movies/:year1/:year2', movies.getYears);

app.post('/movies', movies.createOne);
app.post('/movies/:id/:actorID', movies.addActor);

app.put('/movies/:id', movies.updateOne);

app.delete('/movies/:id', movies.deleteOne); //delete by ID
app.delete('/movies/:id/:actorID', movies.removeActor); //removie actor from a movie Task4

=======
//https://hub.packtpub.com/building-movie-api-express/
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const actors = require('./routers/actor');
const movies = require('./routers/movie');
const app = express();
app.listen(8080);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
mongoose.connect('mongodb://localhost:27017/movies',{ useNewUrlParser: true }, function (err) {
    if (err) {
        return console.log('Mongoose - connection error:', err);
    }
    console.log('Connect Successfully');
});
//Configuring Endpoints
//Actor RESTFul endpoionts 
app.get('/actors', actors.getAll);
app.get('/actors/:id', actors.getOne);

app.post('/actors', actors.createOne);
app.post('/actors/:id/:movieID', actors.addMovie);

app.put('/actors/:id', actors.updateOne);


app.delete('/actors/:id', actors.deleteOne);
app.delete('/actors/:id/:movieID', actors.removeMovie); //remove a movie from actor Task3


//Movie RESTFul  endpoints
app.get('/movies', movies.getAll);
app.get('/movies/:id', movies.getOne);
app.get('/movies/:year1/:year2', movies.getYears);

app.post('/movies', movies.createOne);
app.post('/movies/:id/:actorID', movies.addActor);

app.put('/movies/:id', movies.updateOne);

app.delete('/movies/:id', movies.deleteOne); //delete by ID
app.delete('/movies/:id/:actorID', movies.removeActor); //removie actor from a movie Task4

>>>>>>> 1237f0e271a051c185b569de1e02712d634ddecc
