myApp.controller('homeCtrl', ['$scope','blogger','$sce','$ionicLoading','$ionicActionSheet','$timeout',function ($scope,blogger,$sce,$ionicLoading,$ionicActionSheet, $timeout) {


//顯示文章列
$scope.new_article = function() {
  blogger.get_new_article().then(function(res){
    $scope.article_list = res.data.results;
    console.log($scope.article_list);
  });
};
$scope.new_article();


//顯示文章列
$scope.hot_article = function() {
  blogger.get_hot_article().then(function(res){
    $scope.hot_list = res.data.results;
    console.log($scope.article_list);
  });
};

$scope.hot_article();



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
