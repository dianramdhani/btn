(function () {
    'use strict';

    // Usage:
    // Income estimate view.
    // Creates:
    // Call by detail-business component.

    window.app
        .component('incomeEstimate', {
            template: require('./income-estimate.html'),
            controller: _
        });

    _.$inject = [];
    function _() {
        let $ctrl = this;
        $ctrl.$onInit = () => { };
    }
})();