const express = require('express');
const app = express();
const mongoose = require('mongoose')
const $ = require( "jquery" );

// Use this to attach style sheets
app.set('views', __dirname + '/views');
app.use(express.static('public'))

const Piano = require('./models/pianos.js');
const uri = 'mongodb://localhost:27017/DevonPianos'
        // 'mongodb+srv://Bebbs:Password123@cluster0.hdoy1.mongodb.net'

const dbUrl = 'mongodb+srv://Bebbs:Password123@yelpcampcluster.txt4o.mongodb.net/YelpCampCluster?retryWrites=true&w=majority';

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
    () => {console.log("Mongoose Connected")},
    err => {console.log(err)}
    );

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/pianos', async (req, res) => {
    const foundPianos = await Piano.find({});
    res.render('index.ejs', {foundPianos})
})

app.get('/about', (req, res) => {
    res.render('about.ejs');
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Serving on port ${port}`)
});