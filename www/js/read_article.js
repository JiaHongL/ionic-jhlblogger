myApp.controller('read_articleCtrl', ['$rootScope','$scope','blogger','$location','$stateParams','$sce','$ionicLoading','$ionicActionSheet', '$timeout',function ($rootScope,$scope,blogger,$location,$stateParams,$sce,$ionicLoading,$ionicActionSheet, $timeout) {



blogger.get_read_article($stateParams.id).then(function(res){
	console.log(res.data.results);
	$scope.article_list = res.data.results;
});

blogger.get_message($stateParams.id).then(function(res){
	// console.log(res);
	$scope.message_list =res.data.results;
});

$scope.get_message_again = function () {
	$('#myButton').button('reset');
	blogger.get_message($stateParams.id).then(function(res){
		// console.log(res);
		$scope.message_list =res.data.results;
	});
}

$scope.message_post = function(name,message) {
	var reply_message = '0' ;
	if(name==undefined || name ==''){
		name ='訪客'
	}
	if(message==undefined || name==''){
		console.log('no message');
		$('#myButton').button('reset');
	}
	else{
		blogger.add_message($stateParams.id,name,message,reply_message).then(function(res){
			// console.log(res);
			$scope.username = '';
			$scope.message = '';
			$scope.get_message_again();
		});
	}
};
$scope.trustAsHtml = function(string) {
    return $sce.trustAsHtml(string);
};

$scope.show = function() {
$ionicLoading.show({
  template: 'Loading...'
});
};
$scope.show();

setTimeout(function(){
  $ionicLoading.hide();
}, 1000);


// Triggered on a button click, or some other target
 $scope.show2 = function(id) {

   // Show the action sheet
   var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: '<b>Share</b> This' },
       // { text: 'Move' }
     ],
     // destructiveText: 'Delete',
     titleText: 'Modify your album',
     cancelText: 'Cancel',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
      window.open("https://www.facebook.com/sharer/sharer.php?u=http://jiahongl.github.io/jhlblogger/%23/read_article/"+id, 'facebook', config='height=500,width=500');
       return true;
     }
   });

   // For example's sake, hide the sheet after two seconds
   $timeout(function() {
     hideSheet();
   }, 5000);

 };

 // $scope.show2();

}]);