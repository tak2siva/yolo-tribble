angular.module("productListing.services",[]).factory("Product",function($resource){
	return $resource("/products/:id",{id: "@id"},{
		update: {
			method: 'PUT'
		}
	});
});
