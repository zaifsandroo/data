var express = require('express');
var router = express.Router();
var final=require('../models/final')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
  });


  router.post('/createUser',function(req,res){
    console.log(req.body)
    final.create(req.body).then(function(data){
        console.log(data)
        if(data!==null){

            res.send(data)

        }else{
            res.send(err);
        }

    })

  })


module.exports = router;
