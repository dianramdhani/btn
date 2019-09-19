require('./detail-collateral.css');

(function () {
    'use strict';

    // Usage:
    // Detail collateral view.

    window.app
        .component('detailCollateral', {
            template: require('./detail-collateral.html'),
            controller: _
        });

    _.$inject = ['$scope', '$element', '$sce', 'GOOGLEAPI'];
    function _($scope, $element, $sce, GOOGLEAPI) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            // console.log(GOOGLEAPI.key);
            $scope.google = {
                place: $sce.trustAsResourceUrl(`https://www.google.com/maps/embed/v1/place?key=${GOOGLEAPI.key}&q=-6.8777973,107.5453217`),
                street: $sce.trustAsResourceUrl(`https://www.google.com/maps/embed/v1/streetview?key=${GOOGLEAPI.key}&location=-6.8777973,107.5453217&heading=210&pitch=10&fov=35`)
            };
        };
    }
})();