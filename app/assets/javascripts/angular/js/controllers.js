angular.module('productListing.controllers',[]).controller("ProductListsController", function($scope, $state, $stateParams, $window, Product){
	$scope.products = Product.query();
	
	$scope.reload_products = function(){
		$state.transitionTo($state.current, $stateParams, {
		    reload: true,
		    inherit: false,
		    notify: true
		});
	};
	
	$scope.closeModal = function(modal_name) {
	  $("#"+modal_name).modal('hide');
	  $('body').removeClass('modal-open');
	  $('.modal-backdrop').remove();
	};
	
	
	$scope.createProduct = function(){
		$scope.product = new Product();
		console.log("New producted initialized");
	};
	
	$scope.saveProduct = function(){
		$scope.product.$save(function(){
			console.log("New product saved");
			$scope.closeModal();
			$scope.reload_products();
		});
	};
	
	$scope.editProduct = function(id){
		$scope.product = Product.get({id: id});
	};
	
	$scope.updateProduct = function(){
		$scope.product.$update(function(){
			console.log("product updated");
			$scope.closeModal();
			$scope.reload_products();
		});
	};
	
	$scope.deleteProduct = function(product){
		$scope.product.$delete(function(){
			console.log("product deleted");
			$scope.closeModal();
			$scope.reload_products();	
		});
	};
});
