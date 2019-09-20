(function () {
    'use strict';

    window.app
        .config(AffiliationCheckingRoute);

    AffiliationCheckingRoute.$inject = ['$stateProvider'];

    function AffiliationCheckingRoute($stateProvider) {
        [
            /**
             * @todo pass param for checkingResult and affiliationDetail
             */
            { name: 'admin.affiliationChecking.checkingResult', url: '/checking-result', component: 'checkingResult' },
            { name: 'admin.affiliationChecking.affiliationDetail', url: '/affiliation-detail', component: 'affiliationDetail' },
        ]
            .forEach(state => $stateProvider.state(state));
    }
})();