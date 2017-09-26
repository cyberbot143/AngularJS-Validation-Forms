
var validationApp = angular.module('validationApp', []);

	// create angular controller
	validationApp.controller('mainController', function($scope,$http,$timeout) {
	
		$scope.user = {};		   
		// function to submit the form after all validation has occurred			
		$scope.submitForm = function() {

			// check to make sure the form is completely valid
			if ($scope.userForm.$valid) {
				$scope.user = { 'Name':$scope.user.username, 'Age': $scope.user.age, 'Email':$scope.user.email };
				$http.post('/adduser', $scope.user).then(function (res) {
					alert('Succesfully Added a user');
				}, function (err) {
					alert('error in adding error');
				});     
			}

		};

		$timeout(callAtTimeOut, 1000);
		function callAtTimeOut(){
			$http.post("/get")
			.then(function(response) {
				console.log(response.data.docs);
				$scope.users = response.data.docs;
			});
		}
		

	});
	
