angular.module("contactInfoApp", [])
	.controller("ListController", function($scope) {

		$scope.invalid = {}

		$scope.people = [
		]

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

			$scope.name = ""
			$scope.email = ""
			$scope.website = ""
			$scope.message = ""
		}

	})