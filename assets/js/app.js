window.app = angular.module('BTN', ['ui.router', 'ngCookies', 'datatables']);

// GOOGLE API
require('../js/google-api');

// RUN
(function () {
    'use strict';

    window.app
        .run(Run);

    Run.$inject = ['$state', '$rootScope', '$cookies', '$http'];
    function Run($state, $rootScope, $cookies, $http) {
        // $rootScope['global'] = {
        //     user: angular.fromJson($cookies.get('user')),
        //     menu: angular.fromJson($cookies.get('menu'))
        // } || {};
        // if (typeof $rootScope.global.user === 'undefined') {
        //     $state.go('login');
        // } else {
        //     // $http.defaults.headers.common = { token: $rootScope.global.user.token };
        //     $state.go('etl');
        // }
        $state.go('login');
    }
})();

// ROUTES
require('../routes/app.route');
require('../routes/admin.route');
require('../routes/financial-analysis.route');
require('../routes/collateral-analysis.route');
require('../routes/affiliation-checking.route');

// SERVICES

// DIRECTIVES
require('../directives/tr-files.directive');

// COMPONENTS
require('../components/tr-wrapper/tr-wrapper');
require('../components/tr-loading/tr-loading');

// VIEWS
require('../views/login/login');
require('../views/admin-container/admin-container');
require('../views/affiliation-checking/affiliation-checking');
require('../views/checking-result/checking-result');
require('../views/affiliation-detail/affiliation-detail');
require('../views/financial-analysis/financial-analysis');
require('../views/detail-business/detail-business');
require('../views/income-estimate/income-estimate');
require('../views/collateral-analysis/collateral-analysis');
require('../views/list-collateral/list-collateral');
require('../views/detail-collateral/detail-collateral');
require('../views/dashboard/dashboard');