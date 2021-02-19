const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 3001;
const DB = require("./models")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client"));
}
app.use(cors());



// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/MM",{
  useNewUrlParser: true,
  useUnifiedTopology: true, 
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  console.log('mongoDB connected')
  
});
//connecting to the database
app.get('/api/mms/', ({body}, res) => {
    DB.find({}, (err, data) => {
        if(err){
            res.send(err)
        } else{
            res.json(data)
        }
    })
    
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});