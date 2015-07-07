angular.module("validationApp", [])
.controller("FormController", function($scope){

	$scope.invalid = {},
	

	$scope.$watch('name', function(oldProp, newProp) {
  		console.log(oldProp, newProp)
  			$scope.checkNewForm(newProp)
	}, true);

	$scope.$watch('email', function(oldProp, newProp) {
  		console.log(oldProp, newProp)
  		$scope.checkNewForm(newProp)
	}, true);

	$scope.$watch('website', function(oldProp, newProp) {
  		console.log(oldProp, newProp)
  		$scope.checkNewForm(newProp)
	}, true);

	$scope.$watch('message', function(oldProp, newProp) {
  		console.log(oldProp, newProp)
  		$scope.checkNewForm(newProp)
	}, true);

	$scope.checkNewForm = function() {
		$scope.invalid = {
			name: !($scope.name) || "",
			email: !($scope.email) || "" ,
			website: !($scope.website) || "",
			message: !($scope.message) || "",
		}
	
	}

	$scope.submitNewForm = function(){
		
	}

 })