
angular.module('Prueba', [])
    .controller('UserController', function($scope, $http) {
        $scope.users = [];
        $scope.newUser = {};
        $http.get("http://localhost:3000")
            .success(data => {
                console.log(data);
                $scope.users = data;
            })
            .error(err => {
                console.log(err);
            })
            .catch(errors =>  {
                console.log("ERROR:", errors);
            });
        $scope.getUsers = function (){
            $http.get("http://localhost:3000")
            .success(data => {
                console.log(data);
                $scope.users = data;
            })
            .error(err => {
                console.log(err);
            })
            .catch(errors =>  {
                console.log("ERROR:", errors);
            });
        }
        $scope.register = function(){
            $http.post("http://localhost:3000/register",{
                name: $scope.newUser.name,
                email: $scope.newUser.email,
                password: $scope.newUser.password,
                phone: $scope.newUser.phone,
                age: $scope.newUser.age,
                gender: $scope.newUser.gender,
                hobby: $scope.newUser.hobby
            })
            .success(function(data){
                $scope.users.push($scope.newUser);
                $scope.register = {};
            })
            .error(err => {
                console.log(err);
            });
        }
        $scope.delete = function(id){
            $http.post("http://localhost:3000/delete",{
                id: id
            })
            .success(data => {
                if(data.message == "OK"){
                    $scope.clean();
                    $scope.getUsers();
                }
            })
            .error(err => {
                console.log(err);
            });
        }
        $scope.clean = function() {
            $scope._id = null;
            $scope.name = '';
            $scope.email = '';
            $scope.password = '';
            $scope.phone = '';
            $scope.age = '';
            $scope.gender = '';
            $scope.hobby = '';
         };
    });