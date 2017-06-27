(function () {
"use strict"
angular.module("chat.controllers").controller('chatLaunchCtrl', ['$http', '$scope', '$rootScope',
 function ($http, $scope, $rootScope) {
  
  //user Objct
  var user = function(name){
    this.name= name;
    this.reciver=""
    this.typedMessage="";
    this.messages=[];
  }

  //Store users in an array.
  $scope.users = [];

  //Join user to the chat.
  $scope.joinUser = function(newUserName){
    if(!newUserName || newUserName == null) {
      return false;
    }
    this.user = new user(newUserName);
    $scope.users.push(this.user);
    $scope.userName = null;
  }

  //Remove user or logout user from the chat.
  $scope.removeUser = function(index){
    $scope.users.splice(index,1);
  }

  //Store messages.
  $scope.messages = [];
  
  //Send a text message.
  $scope.sendMessage = function(sender, reciver, message){
    if(!message || !sender || !reciver || message == null || sender == null || reciver == null) {
      return false;
    }
    $scope.message = {};
     $scope.message['message'] = message;
    $scope.message['sender'] = sender;
    $scope.message['reciver'] = reciver;
    $scope.messages.push($scope.message);
  }

  $scope.getChatDetails = function (sender, reciver){
   var arrayItems = $scope.messages.map(function(message){
     if((message.sender== sender && message.reciver == reciver) || (message.sender== reciver && message.reciver == sender)){
       return message;
     }
     return false;
   })
   return arrayItems? arrayItems:[];
  }

//End
  }])
})();