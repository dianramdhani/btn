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
                        label: 'Affiliation Checking',
                        icon: 'monitor',
                        state: {
                            to: 'admin.affiliationChecking',
                            params: {}
                        },
                        active: true
                    },
                ]
            }
        };
    }
})();