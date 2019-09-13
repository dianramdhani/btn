(function () {
    'use strict';

    // Usage:
    // Collateral analysis view.

    window.app
        .component('collateralAnalysis', {
            template: require('./collateral-analysis.html'),
            controller: _
        });

    _.$inject = [];
    function _() {
        let $ctrl = this;
        $ctrl.$onInit = () => { };
    }
})();