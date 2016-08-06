
var app = angular.module('myApp',[]);
app.controller('SignController',function($scope){
	$scope.userdata = {


	};

	$scope.submitForm = function(){
		console.log($scope.userdata);
	};
});
