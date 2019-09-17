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

    _.$inject = ['$scope', '$element', '$sce'];
    function _($scope, $element, $sce) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
        };

        $scope.setSrc = () => {
            $scope.src = $sce.trustAsResourceUrl(`https://www.google.com/maps/embed/v1/place?key=AIzaSyDrFG56wImrFIxQlgrJY1r5Vop7v0ldhKQ&q=${$scope.lat},${$scope.lng}`)
        }
    }
})();