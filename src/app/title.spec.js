var angular = require('angular');
require('angular-mocks');
var title = require('./title');

describe('title component', function () {
  beforeEach(function () {
    angular
      .module('fountainTitle', ['app/title.html'])
      .component('fountainTitle', title);
    angular.mock.module('fountainTitle');
  });
});
