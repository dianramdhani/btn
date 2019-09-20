(function () {
    'use strict';

    window.app
        .config(FinancialAnalysisRoute);

    FinancialAnalysisRoute.$inject = ['$stateProvider'];

    function FinancialAnalysisRoute($stateProvider) {
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