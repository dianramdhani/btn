(function () {
    'use strict';

    window.app
        .config(AppRoute);

    AppRoute.$inject = ['$stateProvider'];

    function AppRoute($stateProvider) {
        [
            { name: 'login', url: '/login', component: 'login' },
            { name: 'admin', url: '', component: 'adminContainer' },
        ]
            .forEach(state => $stateProvider.state(state));
    }
})();