var angular = require('angular');
require('angular-mocks');
var footer = require('./footer');

describe('footer component', function () {
  beforeEach(function () {
    angular
      .module('fountainFooter', ['app/footer.html'])
      .component('fountainFooter', footer);
    angular.mock.module('fountainFooter');
  });
});
