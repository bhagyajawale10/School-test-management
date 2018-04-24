const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// connect 
const connect = (closure) => {
    return mongoose.connect('mongodb://localhost:27017/TestManagement',(err,db)=>{
        if(err){
            console.error('Error!'+ err);
        }
        closure(db);
    }) 
};

router.get('/user',function (req,res) {
    res.send('api works');
});

module.exports = router;