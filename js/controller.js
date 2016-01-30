app.controller("Search", function($scope, $rootScope, $routeParams, $http, $location) {
	$scope.movies = $rootScope.movies;
	$rootScope.query = $scope.query; 

	$scope.performSearch = function (query) {
		var searchUrl = "http://www.omdbapi.com/?s=" + query;

		var omdbQueryRequest = $http({
			method: "GET",
			url: searchUrl
		});

		omdbQueryRequest.then(function(data) {
			$rootScope.movies = data.data.Search;
			$location.path('search');
			$location.search({ search: query });
		})
	}

	$scope.movieRedirect = function(id) {
		$location.path('/movie/' + id);

	}
});

app.controller("Movie", function($scope, $routeParams, $rootScope, $location) {
	$scope.movieBack = function() {
		debugger;
		$location.path("search");
		$location.search({ search: $routeParams.search });
	}
});