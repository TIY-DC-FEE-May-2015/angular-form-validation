var app = angular.module("formApp", [])

.controller("FormController", function($scope){

	$scope.comments = []

	$scope.submitForm=function() {

		$scope.submitted = false
		$scope.invalid = {
		/*	name: !$scope.name,
			email: !$scope.email,
			website: !$scope.website,
			message: !$scope.message, */
		}
//tried to set these if statements to evaluate if invalid was true for that key, but it wouldn't work
	//message still isn't working for reasons i don't know 
		if (!$scope.name || !$scope.email || !$scope.website || !$scope.message){
			$scope.errorMessage = "Looks like you forgot something"
			return
		}

		if ($scope.email.indexOf("@") < 0 || $scope.email.indexOf(".") < 0 || $scope.email.indexOf(" ") > -1 ){
			$scope.errorMessage = "Please enter a valid email address"
			$scope.invalid.email = true
			return
		}

		if ( !($scope.website.startsWith("http://")) || $scope.website.indexOf(".") < 0 || $scope.website.indexOf(" ") > -1 ){
			$scope.errorMessage = "Please enter a URL starting with 'http://'"
			$scope.invalid.website = true
			return
		}

			var newComment = {
				name: $scope.name,
				email: $scope.email,
				website: $scope.website,
				message: $scope.message, 	
			}

			$scope.comments.push(newComment)

			$scope.name = ""
			$scope.email = ""
			$scope.website = ""
			$scope.message = ""
			$scope.submitted = true
			$scope.errorMessage = false
			console.log($scope.comments[$scope.comments.length-1])
	}

	$scope.$watch('name', function(){
		if ($scope.name.length < 1) {
			$scope.invalid.name = true
		} else {
			$scope.invalid.name = false
		}
	})	

	$scope.$watch('message', function(){
		if ($scope.message.length < 1) {
			$scope.invalid.message = true
		} else {
			$scope.invalid.message = false
		}
	})	

	$scope.$watch('email', function(){
		if ( $scope.email.indexOf("@") < 0 || $scope.email.indexOf(".") < 0 || $scope.email.indexOf(" ") > -1 ) {
			$scope.invalid.email = true
		} else {
			$scope.invalid.email = false
		}
	})	

	$scope.$watch('website', function(){
		if (  !($scope.website.startsWith("http://")) || $scope.website.indexOf(".") < 0 || $scope.website.indexOf(" ") > -1 ) {
			$scope.invalid.website = true
		} else {
			$scope.invalid.website = false
		}
	})	



})