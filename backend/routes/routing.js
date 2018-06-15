var express=require('express');
var router = express.Router();

const axios = require('axios');



router.post('/login', (req, res) => {
  // This should ideally be replaced with a service that connects to MongoDB
  User.save
   res.status(200).json({'res':'success','username':req.body.username,'password':req.body.password});
    
  

});

module.exports = router;