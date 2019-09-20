(function () {
    'use strict';

    // Usage:
    // Show list collateral of creditor.
    // Creates:
    // Call by collateral-analysis component.

    window.app
        .component('listCollateral', {
            template: require('./list-collateral.html'),
            controller: _
        });

    _.$inject = [];
    function _() {
        let $ctrl = this;
        $ctrl.$onInit = () => { };
    }
})();