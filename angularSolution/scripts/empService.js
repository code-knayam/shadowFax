app.factory('EmpService', function($window, $q){

    _getNextEmpId = function() {
        if ($window.localStorage['emp-details'] == null) {                        
            $window.localStorage['emp-details'] = angular.toJson({
                'details': []
            });
            return 1;
        }
        return  JSON.parse(localStorage.getItem('emp-details')).details.length + 1;        
    }

    _saveNewEmpDetail = function(empDetails) {
        var deferred = $q.defer();
        try {
            var empDetailsCache = JSON.parse($window.localStorage['emp-details']);
            empDetailsCache.details.push(empDetails);        
            $window.localStorage['emp-details'] = angular.toJson(empDetailsCache);
            deferred.resolve();
        } catch(e) {
            deferred.reject();
        };
        return deferred.promise;
    }

    _getAllEmp = function() {
        if (localStorage.getItem('emp-details') != null ) {
            return JSON.parse(localStorage.getItem('emp-details')).details;        
        } else {
            return -1;
        }
    }

    _deleteEmp = function(empId) {
        var deferred = $q.defer();

        try {        
            var empDetailsCache = JSON.parse(localStorage.getItem('emp-details'));
            var index = empDetailsCache.details.findIndex( function(details) {
                return empId == details.id
            });      

            empDetailsCache.details.splice(index, 1);
            $window.localStorage['emp-details'] = angular.toJson(empDetailsCache);        
            deferred.resolve();
        } catch(e) {
            deferred.reject();
        }

        return deferred.promise;
    }

    _updateEmp = function(empDetails) {
        var deferred = $q.defer();

        try {        
            var empDetailsCache = JSON.parse(localStorage.getItem('emp-details'));
            var index = empDetailsCache.details.findIndex( function(details) {
                return empDetails.id == details.id
            });     

            empDetailsCache.details[index] = empDetails;
            $window.localStorage['emp-details'] = angular.toJson(empDetailsCache);        
            deferred.resolve();
        } catch(e) {
            deferred.reject();
        }

        return deferred.promise;
    }

    _getEmpDetails = function(id) {
        var empDetailsCache = JSON.parse(localStorage.getItem('emp-details'));
        var index = empDetailsCache.details.findIndex( function(details) {
            return id == details.id
        });
        return empDetailsCache.details[index];
    }

    return {
        getNextEmpId: _getNextEmpId,
        saveNewEmpDetail: _saveNewEmpDetail,
        getAllEmp: _getAllEmp,
        deleteEmp: _deleteEmp, 
        updateEmp: _updateEmp,
        getEmpDetails: _getEmpDetails
    };

});