goog.provide('popover');

goog.require('ngeo.popoverDirective');
goog.require('ngeo.popoverAnchorDirective');
goog.require('ngeo.popoverContentDirective');

/** @const **/
var app = {};

/** @type {!angular.Module} **/
app.module = angular.module('app', ['ngeo']);


/**
 * A container directive that embed in its template a ngeo-popover.
 *
 * @return {angular.Directive} The directive specs.
 */
app.containerDirective = function() {
  return {
    restrict: 'E',
    scope: {},
    controller: function() {
      this.message = 'Property from parent';
    },
    controllerAs: 'ctrl',
    bindToController: true,
    template: '' +
    '<div ngeo-popover class="ngeo-popover">' +
    '  <a ngeo-popover-anchor class="btn btn-info">anchor 1</a>' +
    '  <div ngeo-popover-content>' +
    '     <app-content></app-content>' +
    '   </div>' +
    '</div>'
  };
};

/**
 *
 * A content directive designed to be in a ngeo-popover.
 * We test if we can access required parent controller properties.
 *
 * @return {angular.Directive} The directive specs.
 */
app.contentDirective = function() {
  return {
    restrict: 'E',
    scope: true,
    require: '^^appContainer',
    template:     '' +
    '<ul>' +
    ' <li>action 1:' +
    '  <input type="range"/>' +
    ' </li>' +
    ' <li>{{message}}</li>' +
    '</ul>',
    link: function(scope, elem, attrs, ctrl) {
      scope.message = ctrl.message;
    }
  };
};


app.module.directive('appContainer', app.containerDirective);
app.module.directive('appContent', app.contentDirective);
