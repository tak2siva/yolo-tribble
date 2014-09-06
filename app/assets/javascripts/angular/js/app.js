angular.module("productListing",[
	'ui.router',
	'ngResource',
	'productListing.controllers',
	'productListing.services'
]);

angular.module('productListing').config(function($stateProvider,$httpProvider){
	$stateProvider.state("products",{
		url: "products",
		templateUrl: "assets/partials/products.html",
		controller: "ProductListsController"
	});
}).run(function($state){
	$state.go("products");
});
