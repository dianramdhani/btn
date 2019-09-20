(function () {
    'use strict';

    // Usage:
    // Affiliation vote.
    // Creates:
    // Call by affiliation-checking.

    window.app
        .component('affiliationDetail', {
            template: require('./affiliation-detail.html'),
            controller: _
        });

    _.$inject = ['$scope'];
    function _($scope) {
        let $ctrl = this;
        $ctrl.$onInit = () => { };
    }
})();