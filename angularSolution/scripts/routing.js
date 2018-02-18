app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: './partials/viewEmp.html'
    })
    .when('/addEmp', {
        templateUrl: './partials/addEmp.html'
    }) 
    .when('/editEmp/:id', {
        templateUrl: './partials/editEmp.html'
    })
});