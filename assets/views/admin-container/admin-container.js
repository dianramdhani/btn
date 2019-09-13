(function () {
    'use strict';

    // Usage:
    // Admin container.

    window.app
        .component('adminContainer', {
            template: require('./admin-container.html'),
            controller: _
        });

    _.$inject = ['$scope', '$rootScope'];
    function _($scope, $rootScope) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            $scope.menu = {
                sidebar: [
                    // {
                    //     type: 'title | link | has-sub-link',
                    //     label: '',
                    //     icon: '',
                    //     state: {
                    //         to: '',
                    //         params: {}
                    //     },
                    //     active: true
                    // },
                    {
                        type: 'link',
                        label: 'Dashboard',
                        icon: 'monitor',
                        state: {
                            to: 'admin.dashboard',
                            params: {}
                        },
                        active: false
                    },
                    {
                        type: 'link',
                        label: 'Affiliation Checking',
                        icon: 'user-check',
                        state: {
                            to: 'admin.affiliationChecking',
                            params: {}
                        },
                        active: true
                    },
                    {
                        type: 'link',
                        label: 'Financial Analysis',
                        icon: 'pocket',
                        state: {
                            to: 'admin.financialAnalysis',
                            params: {}
                        },
                        active: false
                    },
                    {
                        type: 'link',
                        label: 'Collateral Analysis',
                        icon: 'square',
                        state: {
                            to: 'admin.collateralAnalysis',
                            params: {}
                        },
                        active: false
                    },
                ]
            }
        };
    }
})();