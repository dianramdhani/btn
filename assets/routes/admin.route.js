(function () {
    'use strict';

    window.app
        .config(UserApp);

    UserApp.$inject = ['$stateProvider'];

    function UserApp($stateProvider) {
        [
            { name: 'admin.affiliationChecking', url: '/affiliation-checking', component: 'affiliationChecking' },
            { name: 'admin.financialAnalysis', url: '/financial-analysis', component: 'financialAnalysis' },
            { name: 'admin.collateralAnalysis', url: '/collateral-analysis', component: 'collateralAnalysis' },
        ]
            .forEach(state => $stateProvider.state(state));
    }
})();