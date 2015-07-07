angular.module("formApp", [])
	.controller("FormController", function ($scope) {

		$scope.submitForm = function(){
			
			$scope.invalid = {
			    name: !($scope.name),
				email: !($scope.email),
				website: !($scope.websit),
				message: !($scope.message)
			}
		}
	})