var angular = require('angular');
require('angular-mocks');
var header = require('./header');

describe('header component', function () {
  beforeEach(function () {
    angular
      .module('fountainHeader', ['app/header.html'])
      .component('fountainHeader', header);
    angular.mock.module('fountainHeader');
  });
});
