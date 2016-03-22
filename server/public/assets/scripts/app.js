var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
        when("/home", {
            templateUrl: "/views/routes/home.html",
            controller: "SomeController"
        }).
        when("/projects", {
            templateUrl: "/views/routes/projects.html",
            controller: "ProjectsController"
        }).
        when("/aesop", {
            templateUrl: "/views/routes/aesop.html",
            controller: "AesopController"
        }).
        otherwise({
            redirectTo: 'home'
        })
}]);
