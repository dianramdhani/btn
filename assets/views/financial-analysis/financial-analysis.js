(function () {
    'use strict';

    // Usage:
    // Financial analysis view.

    window.app
        .component('financialAnalysis', {
            template: require('./financial-analysis.html'),
            controller: _
        });

    _.$inject = [];
    function _() {
        let $ctrl = this;
        $ctrl.$onInit = () => { };
    }
})();