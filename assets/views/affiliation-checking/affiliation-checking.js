(function () {
    'use strict';

    // Usage:
    // Affiliation checking view.

    window.app
        .component('affiliationChecking', {
            template: require('./affiliation-checking.html'),
            controller: _
        });

    _.$inject = [];
    function _() {
        let $ctrl = this;
        $ctrl.$onInit = () => { };
    }
})();