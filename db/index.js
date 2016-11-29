
var Sequelize = require('sequelize');
var db = new Sequelize('pears', 'root', null);

//define models
var User = db.define('User', {
	username: {type: Sequelize.STRING, allowNull: false},
	firstName: Sequelize.STRING,
	lastName: Sequelize.String
});

var Group = db.define('Group', {
	groupname: Sequelize.STRING
});

var Session = db.define('Session', {

});

var Pair = db.define('Pair', {

});

var Sprint = db.define('Sprint', {
	sprintname: Sequelize.STRING
});

var Drivetime = db.define('Drivetime', {
	drivetime: DataTypes.INTEGER.UNSIGNED
})