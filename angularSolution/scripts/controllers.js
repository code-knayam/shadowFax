app.controller('addEmpController', function($scope, $location, EmpService) {

    $scope.designations = ['Assistant Manager', 'Manager', 'Software Engineer 1'];

    $scope.onSubmit = function() {
        var empDetails = {}
        
        empDetails.id = EmpService.getNextEmpId();
        empDetails.firstName = $scope.firstName;
        empDetails.lastName = $scope.lastName;
        empDetails.name = empDetails.firstName + ' ' + empDetails.lastName;
        empDetails.designation = $scope.designation;
        empDetails.age = $scope.age;
        
        EmpService.saveNewEmpDetail(empDetails).then(
            function() {
                console.log("Saved Successfully");
                // reset form
                resetForm();
                // Navigate to home
                $location.path('');
            },
            function() {
                console.log("Not Saved");
            }
        );
    };

    resetForm = function() {
        $scope.firstName = '';
        $scope.lastName = '';
        $scope.designation = '';
        $scope.age = '';
        $scope.addEmpForm.$setPristine();
        $scope.addEmpForm.$setUntouched();
    }

});

app.controller('viewEmpController', function($scope, $location, EmpService){
    
    setUpList = function() {
        $scope.empDetails = EmpService.getAllEmp();
        if ($scope.empDetails == -1 || $scope.empDetails.length == 0) {
            $scope.defaultView = true;
        }
    }

    setUpList();

    $scope.onDeleteEmp = function(empId) {
        console.log("Delete Emp with ID - " + empId);
        // Delete Emp
        EmpService.deleteEmp(empId).then(
            function() {
                // Refresh Emp Details List
                setUpList();
            },
            function() {
                alert("Alert while deleting info.")
            }
        );
        // $scope.$digest();
    }

    $scope.onEditEmp = function(empId) {
        console.log("Edit Emp with ID - " + empId);
        $location.path('editEmp/'+empId);
    }

});

app.controller('editEmpController', function($scope, $routeParams, $location, EmpService){

    $scope.designations = ['Assistant Manager', 'Manager', 'Software Engineer 1'];

    console.log($routeParams.id);
    var id = $routeParams.id;
    $scope.empDetails = EmpService.getEmpDetails(id);
    console.log($scope.empDetails);

    $scope.onSubmit = function() {
        $scope.empDetails.name = $scope.empDetails.firstName + ' ' + $scope.empDetails.lastName;
        
        EmpService.updateEmp($scope.empDetails).then(
            function() {
                console.log("Saved Successfully");                
                // Navigate to home
                $location.path('');
            },
            function() {
                console.log("Not Saved");
            }
        );
    };

})