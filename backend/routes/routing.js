var express=require('express');
var router = express.Router();

router.route('/login').get(function(req,res){
    res.send('success');
});
module.exports = router;