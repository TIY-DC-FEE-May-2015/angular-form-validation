angular.module("validationApp", [])
	.controller("listController", function($scope){

		$scope.invalid = {}

		$scope.submitNewPerson = function(){
			console.log("clicked")

			$scope.invalid = {
				name: !($scope.name),
				email: !($scope.email),
				website: !($scope.website),
				message: !($scope.message),
			}
			
			if( _.some($scope.invalid) ){
				console.log($scope.invalid)
				return
			}

				
			$scope.name =""
			$scope.email = ""
			$scope.website = ""
			$scope.message = ""

			//alert("form submitted")
		}
	


			/*$scope.people.push({
			name: $scope.name,
			email: $scope.email,
			website: $scope.website,
			message: $scope.message
			})*/






	})


		


	