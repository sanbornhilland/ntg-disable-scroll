var module = angular.module('ntgDisableScroll', []);

module.directive('ntgDisableScroll', function () {
  return {
    restritc: 'A',
    link: function postLink(scope, elem, attrs) {

      elem.bind('mousewheel', function (event) {
        if (this === document.activeElement) {
          this.blur();
        }
      })

    }
  }
})