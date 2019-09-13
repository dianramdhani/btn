(function () {
    'use strict';

    window.app
        .config(RouteApp);

    RouteApp.$inject = ['$stateProvider'];

    function RouteApp($stateProvider) {
        [
            { name: 'login', url: '/login', component: 'login' },
            { name: 'admin', url: '/admin', component: 'adminContainer' },
        ]
            .forEach(state => $stateProvider.state(state));
    }
})();