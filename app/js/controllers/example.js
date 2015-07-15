'use strict';

let angular = require('angular');

/**
 * @ngInject
 */
function ExampleCtrl() {

  // ViewModel
  var vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify!';
  vm.number = 1234;

}
angular.module('app.controllers').controller('ExampleCtrl', ExampleCtrl);