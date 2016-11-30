angular.module('pearParty.currentsession', [])

.controller('CurrentSession', function ($scope, $location, Sessions) {
  $scope.sprint ='';
  $scope.primUser = {};
  $scope.primUser.name = '';
  $scope.primUser.drivePercent = 50;
  $scope.secondUser= {};
  $scope.secondUser.name = '';
  $scope.secondUser.drivePercent = 50;
  $scope.driver='';
  $scope.navigator='';
  var primDriver = true;
  var startTime=0;
  var totalTime=0;
  var primDriveTime=0; 


  $scope.startPear = function() {
    startTime = Date.now(); 
  };

  $scope.initPear = function() {
    $scope.driver = $scope.primUser.name;  
    $scope.navigator = $scope.secondUser.name;
    $scope.startPear();
    $location.path('/pairing');

  }

  $scope.takeBreak = function () {
    var tempDriver = $scope.driver;
    totalTime += Date.now() - startTime;
    if(primDriver) {
      primDriveTime += Date.now() - startTime
    }
    primDriver = !primDriver;
    $scope.driver = $scope.navigator;
    $scope.navigator = tempDriver;

    $scope.primUser.drivePercent = Math.floor(primDriveTime/totalTime*100);
    $scope.secondUser.drivePercent = 100 - $scope.primUser.drivePercent;
  
  };

  $scope.switch = function () {
    $scope.takeBreak();
    $scope.startPear();  
  };

  $scope.finishPear = function () {
    $scope.takeBreak();
    //let the server know
    $location.path('/home');
  
  };

  
});