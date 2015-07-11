myApp.controller('all_listCtrl', ['$scope','blogger','$sce','$ionicLoading',function ($scope,blogger,$sce,$ionicLoading) {

blogger.get_all_article().then(function(res){
	// console.log(res);
	$scope.article_list = res.data.results;
});

$scope.show = function() {
$ionicLoading.show({
  template: 'Loading...'
});
};
$scope.show();

setTimeout(function(){
  $ionicLoading.hide();
}, 1000);

}]);
