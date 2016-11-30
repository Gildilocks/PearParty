
var Sequelize = require('sequelize');
var db = new Sequelize('pears', 'root', null);

//MVP MVP MVP MVP
var PairSession = db.define('PairSession', {
  primUser: {type: Sequelize.STRING, allowNull: false},
  secUser: {type: Sequelize.STRING, allowNull: false},
  isComplete:  {type: Sequelize.BOOLEAN, defaultValue: false, allowNull: false},
  primDriveTime: Sequelize.INTEGER.UNSIGNED,
  totalTime: Sequelize.INTEGER.UNSIGNED,
  sprintName: Sequelize.STRING
});

PairSession.sync();

exports.PairSession = PairSession;


// //define models
// var User = db.define('User', {
// 	username: {type: Sequelize.STRING, allowNull: false},
// 	firstName: Sequelize.STRING,
// 	lastName: Sequelize.STRING
// });

// var Group = db.define('Group', {
// 	groupname: Sequelize.STRING
// });

// var Session = db.define('Session', {

// });

// var Pair = db.define('Pair', {

// });

// var Sprint = db.define('Sprint', {
// 	sprintname: Sequelize.STRING
// });

// var Drivetime = db.define('Drivetime', {
// 	drivetime: Sequelize.INTEGER.UNSIGNED
// });

// var Feedback = db.define('Feedback', {
//   text: Sequelize.STRING(250)
// });

// //define relationships here

// //MORE RELATIONSHIPS PLS

// //sync it all up
// User.sync();
// Group.sync();
// Session.sync();
// Pair.sync();
// Sprint.sync();
// Drivetime.sync();
// Feedback.sync();

// exports.User = User;
// exports.Group = Group;
// exports.Session = Session;
// exports.Pair = Pair;
// exports.Sprint = Sprint;
// exports.Drivetime = Drivetime;
// exports.Feedback = Feedback;