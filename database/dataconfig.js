/**
 * Created by HP-PC on 4/21/2018.
 */
var sequelize = require("sequelize");
var config    = require("../database/connectionstring.json").local;

sequelize = new sequelize(config.database,config.username,config.password,{
    host:config.host,
    dialect : 'mysql',
    pool:{
        max:5,
        min:0,
        idle:20000
    }
})
sequelize.sync({force:false})
module.exports = sequelize