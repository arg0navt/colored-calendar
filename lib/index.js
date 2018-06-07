'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleCalendar = exports.ColoredCalendar = undefined;

var _ColoredCalendar = require('./components/ColoredCalendar');

Object.defineProperty(exports, 'ColoredCalendar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ColoredCalendar).default;
  }
});

var _SingleCalendar2 = require('./components/ColoredCalendar/SingleCalendar');

var _SingleCalendar3 = _interopRequireDefault(_SingleCalendar2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.SingleCalendar = _SingleCalendar3.default;