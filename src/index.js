/*import $ from 'jquery';
window.jQuery = $;*/
import angular from 'angular';

var techsModule = require('./app/techs/index');

var main = require('./app/main');
var header = require('./app/header');
var title = require('./app/title');
var footer = require('./app/footer');



require('./styles/normalize.css');
require('./styles/styles.css');

angular
  .module('app', [techsModule])
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer);
