

/** @const **/
var app = {};


/** @type {!angular.Module} **/
app.module = angular.module('app', ['gmf']);


/**
 * @constructor
 */
app.MainController = function() {
  this.datePickerRange = {
    widget: 'datepicker',
    maxValue: '2013-12-31T00:00:00Z',
    minValue: '2006-01-01T00:00:00Z',
    maxDefValue: null,
    minDefValue: null,
    resolution: 'day',
    mode: 'range'
  };

  this.datePicker = {
    widget: 'datepicker',
    maxValue: '2015-12-31T00:00:00Z',
    minValue: '2014-01-01T00:00:00Z',
    maxDefValue: null,
    minDefValue: null,
    resolution: 'day',
    mode: 'single'
  };

};


app.module.controller('MainController', app.MainController);
