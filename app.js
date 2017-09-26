
var validationApp = angular.module('validationApp', []);

	// create angular controller
	validationApp.controller('mainController', function($scope) {
	
		$scope.users = [];

		// function to submit the form after all validation has occurred			
		$scope.submitForm = function() {

			// check to make sure the form is completely valid
			if ($scope.userForm.$valid) {

				$scope.users.push({ 'Name':$scope.user.username, 'Age': $scope.user.age, 'Email':$scope.user.email });
			    console.log($scope.users);
			     
			}

		};

	});