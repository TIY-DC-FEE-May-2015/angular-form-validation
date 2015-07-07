angular.module("contactInfoApp", [])
	.controller("ListController", function($scope) {

		$scope.invalid = {}

		$scope.people = []

		var nameDiv = document.getElementById("nameDiv")

		$scope.$watch("name", function() {
			if ($scope.name !== undefined) {
				nameDiv.setAttribute("class", "none")
			}
		})

		var emailDiv = document.getElementById("emailDiv")

		$scope.$watch("email", function() {
			var email = $scope.email
			console.log(email, email.includes("@"))
			if (email.includes("@") === true) {
				emailDiv.setAttribute("class", "none")
			}
		})

		var webDiv = document.getElementById("webDiv")

		$scope.$watch("website", function() {
			if ($scope.website === "http://") {
				webDiv.setAttribute("class", "none")
			}
		})

		var messageDiv = document.getElementById("messageDiv")

		$scope.$watch("message", function() {
			if ($scope.message !== undefined) {
				messageDiv.setAttribute("class", "none")
			}
		})

// Add New Person Button
		$scope.submitButton = function() {

		// Checks to see if fields are filled
			$scope.invalid = {
				name: !($scope.name),
				email: !($scope.email),
				website: !($scope.website),
				message: !($scope.message)
			}

			if(_.some($scope.invalid)) {
				return
			}

		// check if email had @
			var emailString = ($scope.email).split("")

			var validEmail = function() {
				if (_.find(emailString, function(at) { return at === "@" })) {
				return true
				}
				else {
					alert("invalid email")
					return false
				}
			}

			if (validEmail() === false) {
				return
			}
		// check if website starts with http://
			var websiteString = ($scope.website).split("")
			var first = _.first(websiteString, 7)

			var validWebsite = function() {
				if ( first.join("") !== "http://") {
					alert("Enter website starting with 'http://'")
					return false
				}
			}

			if (validWebsite() === false) {
				return
			}
			
			
		
			$scope.people.push({
				name: $scope.name,
				email: $scope.email,
				website: $scope.website,
				message: $scope.message
			})
			console.log($scope.people)
			alert("Form Submitted.  Thanks!")

			$scope.name = ""
			$scope.email = ""
			$scope.website = ""
			$scope.message = ""
		}

	})