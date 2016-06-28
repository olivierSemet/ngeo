

/** @const **/
var app = {};


/** @type {!angular.Module} **/
app.module = angular.module('app', ['gmf']);


/**
 * @constructor
 * @param {!angular.Scope} $scope Angular scope.
 * @param {!gmf.WMSTime} gmfWMSTime wmstime service.
 * @ngInject
 */
app.MainController = function($scope, gmfWMSTime) {

  /**
   * @type {gmf.WMSTime}
   * @private
   */
  this.gmfWMSTime_ = gmfWMSTime;

  /**
   * @type {gmfx.TimeProperty}
   * @export
   */
  this.wmsTimeRange = {
    widget: /** @type {gmfx.TimePropertyWidgetEnum} */ ('slider'),
    maxValue: '2013-12-31T00:00:00Z',
    minValue: '2006-01-01T00:00:00Z',
    maxDefValue: null,
    minDefValue: null,
    resolution: /** @type {gmfx.TimePropertyResolutionEnum}*/ ('day'),
    mode: /** @type {gmfx.TimePropertyModeEnum} */('range'),
    interval : [0,1,0,0]
  };

  /**
   * @type {gmfx.TimeProperty}
   * @export
   */
  this.wmsTimeSingle = {
    widget: /** @type {gmfx.TimePropertyWidgetEnum} */ ('slider'),
    maxValue: '2015-12-31T00:00:00Z',
    minValue: '2014-01-01T00:00:00Z',
    maxDefValue: null,
    minDefValue: null,
    resolution: /** @type {gmfx.TimePropertyResolutionEnum}*/ ('year'),
    mode: /** @type {gmfx.TimePropertyModeEnum} */ ('single'),
    interval : [0,0,1,0]
  };

  /**
   * @type {string}
   * @export
   */
  this.sliderValue;

  /**
   * @type {string}
   * @export
   */
  this.sliderRangeValue;

  this.onDateSelected = function(date) {
    this.sliderValue = this.gmfWMSTime_.formatWMSTimeParam(this.wmsTimeSingle, date);
    $scope.$digest();
  };

  this.onDateRangeSelected = function(date) {
    this.sliderRangeValue = this.gmfWMSTime_.formatWMSTimeParam(this.wmsTimeRange, date);
    $scope.$digest();
  };

};


app.module.controller('MainController', app.MainController);