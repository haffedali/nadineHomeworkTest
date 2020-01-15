// import orm.js 
const orm = require('../config/orm.js');

// call functions from orm file
var burger = {
    all: function(cb){
        orm.all('burgers', function(res){
            cb(res);
        });
    },
    update: function(id, cb) {
        // console.log(id)
        orm.update('burgers', id, cb, function(res){
            cb(res);
        });
    },
    create: function(name, cb) {
        orm.create('burgers', name, cb);
    }
};

// export
module.exports = burger;