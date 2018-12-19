movieDBApp.factory('loginService', ($resource, $log) => {

    return {

        login: (params, onSuccess, onFailure) => {
            let login = $resource('http://localhost:8082/login');

            login.save(params).$promise.then(res => {
                $log.info(res);
                if(res.password)
                    res.password = '';
                onSuccess(res);
            }).catch(error => onFailure(error));
        }
    };
});