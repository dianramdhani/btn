(function () {
    'use strict';

    window.app
        .config(CollateralAnalysisRoute);

    CollateralAnalysisRoute.$inject = ['$stateProvider'];

    function CollateralAnalysisRoute($stateProvider) {
        [
            /**
             * @todo pass param for listCollateral
             */
            { name: 'admin.collateralAnalysis.listCollateral', url: '/collateral-analysis', component: 'listCollateral' }
        ]
            .forEach(state => $stateProvider.state(state));
    }
})();