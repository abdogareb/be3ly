const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')

// DB Config
const db = require('./config/keys').mongoURI

// Connect to mongo
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors())

const apartments = require('./routes/api/apartments.js'); 


 app.use('/apartments', apartments);
 app.use((req,res) => res.status(404).send(`<h1>Can not find what you're looking for</h1>`))

 const port = process.env.PORT || 3000;
 
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});