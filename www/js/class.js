myApp.controller('classCtrl', ['$scope','blogger','$sce','$stateParams','$ionicActionSheet','$timeout',function ($scope,blogger,$sce,$stateParams,$ionicActionSheet, $timeout) {
$scope.test = $stateParams.class_id;
blogger.get_class_article2($stateParams.class_id).then(function(res){
	 // console.log(res);
	 $scope.class_list = res.data.results;
});

$scope.trustAsHtml = function(string) {
    return $sce.trustAsHtml(string);
};

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

}]);