(function () {
    'use strict';

    window.app
        .config(UserApp);

    UserApp.$inject = ['$stateProvider'];

    function UserApp($stateProvider) {
        [
            { name: 'admin.affiliationChecking', url: '/affiliation-checking', component: 'affiliationChecking' },
        ]
            .forEach(state => $stateProvider.state(state));
    }
})();