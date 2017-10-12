// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  update: function(id,cb){
  	orm.update('burgers',id,cb);
  },

  create: function(name,cb){
  	orm.create('burgers', name, cb);
  }
}


// Export the database functions for the controller (catsController.js).
module.exports = burger;