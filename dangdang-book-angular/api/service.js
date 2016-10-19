app.factroy('commonService',['$http',function($http){
    var servce = {};
    servce.getData = function(type,callBack){
        $http({
            //type:
            url:'../../data/book_' + type +'.json',
            method:'get',
        })
        .then(function(res){
            console.log('获取数据成功')
            callBack(res);
        },function(err){
            console.dir(err);
        })
    }
}])