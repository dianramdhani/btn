(function () {
    'use strict';

    window.app
        .config(UserApp);

    UserApp.$inject = ['$stateProvider'];

    function UserApp($stateProvider) {
        [
            { name: 'admin.dashboard', url: '/dashboard', component: 'dashboard' },
            { name: 'admin.affiliationChecking', url: '/affiliation-checking', component: 'affiliationChecking' },
            { name: 'admin.financialAnalysis', url: '/financial-analysis', component: 'financialAnalysis' },
            { name: 'admin.collateralAnalysis', url: '/collateral-analysis', component: 'collateralAnalysis' },
            { name: 'admin.detailCollateral', url: '/collateral-analysis/detail-collateral', component: 'detailCollateral' },
        ]
            .forEach(state => $stateProvider.state(state));
    }
})();