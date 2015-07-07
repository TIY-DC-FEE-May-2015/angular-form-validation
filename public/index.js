var app = angular.module("formApp", [])

.controller("FormController", function($scope){

	$scope.comments = []

	$scope.submitForm=function() {

		$scope.submitted = false
		$scope.invalid = {
			name: !$scope.name,
			email: !$scope.email,
			website: !$scope.website,
			message: !$scope.message, 

		}

		if (!$scope.name || !$scope.email || !$scope.website || !$scope.message){
			$scope.errorMessage = "Looks like you forgot something"
			return
		}

		if ( $scope.email.indexOf("@") < 0 || $scope.email.indexOf(".") < 0 || $scope.email.indexOf(" ") > -1 ){
			$scope.errorMessage = "Please enter a valid email address"
			return
		}

		if ( !($scope.website.startsWith("http://")) || $scope.website.indexOf(".") < 0 || $scope.website.indexOf(" ") > -1  ){
			$scope.errorMessage = "Please enter a URL starting with 'http://'"
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
			console.log("short")
		}
	})	

})