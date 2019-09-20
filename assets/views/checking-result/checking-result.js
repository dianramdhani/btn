(function () {
    'use strict';

    // Usage:
    // Checking result view.
    // Creates:
    // Call by affiliation-checking component.

    window.app
        .component('checkingResult', {
            template: require('./checking-result.html'),
            controller: _
        });

    _.$inject = [];
    function _() {
        let $ctrl = this;
        $ctrl.$onInit = () => { };
    }
})();