myApp.controller('aboutController', ['$scope', function($scope){
    $scope.myInterval = 4000;
    $scope.slides = [{
        image: "img/user1.png",
    },
    {
        image: "img/user3.png",
    },
    {
        image: "img/user4.png",
    },
    {
        image:"img/user5.png"
    }]
}]);