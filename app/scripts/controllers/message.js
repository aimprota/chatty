'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, $http) {
    $http.get('http://localhost:8888/').success(function(messages) {
			$scope.messages = messages;
			console.log(messages);
    });
    $scope.addMessage = function() {

	    var newMessage = {message: $scope.newMessageText};
	    $http.post('http://localhost:8888/', newMessage)
			.success(function(){
				$scope.messages.push(newMessage);
				console.log($scope.messages);
			});
		};
  });
