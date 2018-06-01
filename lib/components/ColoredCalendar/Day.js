"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DayShadow = exports.Day = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require("moment/moment");

var _moment2 = _interopRequireDefault(_moment);

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Day = exports.Day = function Day(props, context) {
  var day = props.day;
  var oneActiveDay = context.oneActiveDay,
      setRange = context.setRange,
      colors = context.colors;

  var active = (0, _lodash.get)(context, 'actionRange.from') ? (0, _moment2.default)(day) < (0, _moment2.default)(context.activeRange.to) && (0, _moment2.default)(day) > (0, _moment2.default)(context.activeRange.from) ? "--active" : (0, _moment2.default)(day).format("DDMMYYYY") === (0, _moment2.default)((0, _lodash.get)(context, 'actionRange.to')).format("DDMMYYYY") ? "--end" : (0, _moment2.default)(day).format("DDMMYYYY") === (0, _moment2.default)((0, _lodash.get)(context, 'actionRange.from')).format("DDMMYYYY") ? "--start" : "" : "";
  var today = (0, _moment2.default)(day).format("DDMMYYYY") === (0, _moment2.default)().format("DDMMYYYY");
  var activeSolo = (0, _moment2.default)(oneActiveDay).format("DDMMYYYY") === (0, _moment2.default)(day).format("DDMMYYYY") && !today;
  var colorItem = colors && colors.length ? colors.find(function (color) {
    return color.day === (0, _moment2.default)(day).format("DD") && color.month === (0, _moment2.default)(day).format("MM") && color.year === (0, _moment2.default)(day).format("YY");
  }) : null;
  return _react2.default.createElement(
    "div",
    {
      onClick: function onClick() {
        return setRange(day);
      },
      style: activeSolo ? { background: "#4CC802" } : colorItem ? { background: colorItem.color } : null,
      className: "Date-Month__day Date-Month__day" + active + (today ? " today" : "")
    },
    day.format("DD")
  );
};

var DayShadow = exports.DayShadow = function DayShadow(props) {
  var day = props.day;

  var from = (0, _lodash.get)(props, 'activeRange.from');
  var to = (0, _lodash.get)(props, 'activeRange.to');
  var active = from ? (0, _moment2.default)(day) < (0, _moment2.default)(to) && (0, _moment2.default)(day) > (0, _moment2.default)(from) ? "--active" : (0, _moment2.default)(day).format("DDMMYYYY") === (0, _moment2.default)(to).format("DDMMYYYY") ? "--start" : (0, _moment2.default)(day).format("DDMMYYYY") === (0, _moment2.default)(from).format("DDMMYYYY") : "";
  return _react2.default.createElement(
    "div",
    {
      className: "Date-Month__day Date-Month__day--shadow " + active
    },
    day.format("DD")
  );
};

Day.contextTypes = {
  activeRange: _propTypes2.default.object,
  setRange: _propTypes2.default.func,
  setColor: _propTypes2.default.func,
  colors: _propTypes2.default.array,
  oneActiveDay: _propTypes2.default.object
};

DayShadow.contextTypes = {
  activeRange: _propTypes2.default.object
};