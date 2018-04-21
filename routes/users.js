var express = require('express');
var router = express.Router();
var final = require('../models/final')
/* GET users listing. */
router.get('/', function(req, res) {
    res.render('users');
});
router.get('/getUsers',function(req,res){
  console.log("-------------------->>>huzaif ahmad");
  final.findAll().then(function(data){
      res.send(data);
    console.log(data);
    })

});

router.post("/deleteUser1",function(req,res){

    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
    console.log(req.body)
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
    final.destroy({
        where: {
            id: req.body.id
        }
    }).then(function(response) {
        console.log(response)
        res.send("Deleted")

    })
})


router.post('/updateUser',function (req,res) {
    var updatedDetails = req.body.updatedDetails
    var id = req.body.id
    final.update(updatedDetails,{
        where:{
            id:req.body.id
        }
    }).then(function(response){
        res.send(response)
    })
})
module.exports = router;
