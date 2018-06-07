'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _coloredCalendar = require('./components/ColoredCalendar/coloredCalendar');

Object.defineProperty(exports, 'ColoredCalendar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_coloredCalendar).default;
  }
});

var _singleCalendar = require('./components/ColoredCalendar/singleCalendar');

Object.defineProperty(exports, 'SingleCalendar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_singleCalendar).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }