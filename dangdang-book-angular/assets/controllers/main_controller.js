app.controller('mainController',['$scope', 'commonService',function($scope, c_service){  
  // 设置底部导航的展示效果
  $scope.selectedIndex = 0;
  $scope.linkTo = function(index){
    $scope.selectedIndex = index;
  }
}])
