(function () {
    'use strict';

    window.app
        .config(UserApp);

    UserApp.$inject = ['$stateProvider'];

    function UserApp($stateProvider) {
        [
            /**
             * @todo pass param for detail business
             */
            { name: 'admin.financialAnalysis.detailBusiness', url: '/detail-business', component: 'detailBusiness' },
        ]
            .forEach(state => $stateProvider.state(state));
    }
})();