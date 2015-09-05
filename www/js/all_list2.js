myApp.controller('all_list2Ctrl', ['$scope','blogger','$sce','$ionicLoading','$ionicActionSheet','$timeout',function ($scope,blogger,$sce,$ionicLoading,$ionicActionSheet, $timeout) {

$scope.start_item = 0;
$scope.article_list2 = [];
$scope.moreDataCanBeLoaded = true;

$scope.$on('stateChangeSuccess', function() {
    $scope.loadMore();
});

$scope.loadMore= function() {
  blogger.get_article($scope.start_item,3).then(function(res){
    for (var i=0;i<3;i++){
      // console.log(res.data.results[i]);
      if (res.data.results[i]==undefined){
        $scope.moreDataCanBeLoaded = false;
      }else{
        $scope.article_list2.push(res.data.results[i]);
      }
    }
    $scope.start_item = $scope.start_item + 3;
    $scope.$broadcast('scroll.infiniteScrollComplete');
  });
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
}, 2000);


 // Triggered on a button click, or some other target
 $scope.show2 = function(id) {

   // Show the action sheet
   var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: '<b>Share</b> This' },
       // { text: 'Move' }
     ],
     // destructiveText: 'Delete',
     titleText: 'Share this article',
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
