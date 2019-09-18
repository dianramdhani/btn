(function () {
    'use strict';

    window.app
        .config(UserApp);

    UserApp.$inject = ['$stateProvider'];

    function UserApp($stateProvider) {
        [
            /**
             * @todo pass param for detailBusiness
             */
            { name: 'admin.financialAnalysis.detailBusiness', url: '/detail-business', component: 'detailBusiness' },
            /**
             * @todo pass param for incomeEstimate
             */
            { name: 'admin.financialAnalysis.incomeEstimate', url: '/income-estimate', component: 'incomeEstimate' },
        ]
            .forEach(state => $stateProvider.state(state));
    }
})();