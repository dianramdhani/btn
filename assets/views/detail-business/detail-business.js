(function () {
    'use strict';

    // Usage:
    // Detail business view.
    // Creates:
    // Call by financial-analysis component.

    window.app
        .component('detailBusiness', {
            template: require('./detail-business.html'),
            controller: _
        });

    _.$inject = [];
    function _() {
        let $ctrl = this;
        $ctrl.$onInit = () => { };
    }
})();