/**
 * Created by HP-PC on 4/21/2018.
 */
var sequelize = require("sequelize");
var config = require("../database/dataconfig");

var final = config.define('final',{
    firstname:sequelize.STRING,
    lastname:sequelize.STRING,
    username:sequelize.STRING,
    age:sequelize.INTEGER,
    salary:sequelize.FLOAT,
    designation:sequelize.STRING,
    about:sequelize.TEXT,
   
});
module.exports = final;