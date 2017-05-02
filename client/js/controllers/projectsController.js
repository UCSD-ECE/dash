myApp.controller('projectsController', ['$scope', 'Api', function($scope, Api){
    $scope.form = {};
    $scope.customers = [];
    
    Api.Customer.query({}, function(data){
        $scope.customers = data;
    });
    
    $scope.addToDatabase = function(){
        Api.Customer.save({}, $scope.form,
        function(data){
            $scope.customers.push(data);
            bootbox.alert('Thank you for registering!')
        },
        function(err){
            bootbox.alert('Error: ' + err);
        })};
        
    $scope.adminLogin = function(){
        bootbox.prompt({
            title: "Password:",
            inputType: 'password',
            callback: function(result) {
                if(result != 'password')
                    window.location = 'http://i0.kym-cdn.com/entries/icons/original/000/000/091/cancer.png';
        }
    });
    
    
    }
}]);