"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _ListDays = require("./ListDays");

var _ListDays2 = _interopRequireDefault(_ListDays);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MonthPiker = function (_React$Component) {
  _inherits(MonthPiker, _React$Component);

  function MonthPiker(props) {
    _classCallCheck(this, MonthPiker);

    var _this = _possibleConstructorReturn(this, (MonthPiker.__proto__ || Object.getPrototypeOf(MonthPiker)).call(this, props));

    _this.setNumberMonth = function (type) {
      _this.setState(function (prevState) {
        var monthDate = (0, _moment2.default)(prevState.month, _this.context.format),
            active = type === "next" ? monthDate.add(1, "month").startOf("month").format(_this.context.format) : monthDate.subtract(1, "month").startOf("month").format(_this.context.format);
        if (_this.props.skipMonth && active === (0, _moment2.default)(_this.props.skipMonth, _this.context.format).startOf("month").format(_this.context.format)) {
          prevState.number = type === "next" ? _this.state.number + 2 : _this.state.number - 2;
        } else prevState.number = type === "next" ? _this.state.number + 1 : _this.state.number - 1;
        return prevState;
      }, function () {
        return _this.setMonth();
      });
    };

    _this.setMonth = function () {
      _this.setState({
        month: (0, _moment2.default)(_this.props.date, _this.context.format).add(_this.state.number, "month").format(_this.context.format)
      }, function () {
        _this.context.setActiveMonth(_this.props.type, _this.state.month);
      });
    };

    _this.state = {
      month: _this.props.date,
      number: 0
    };
    return _this;
  }

  _createClass(MonthPiker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        { className: "Date-Month" },
        _react2.default.createElement(
          "div",
          { className: "Date-Month__control" },
          _react2.default.createElement(
            "button",
            {
              className: "Date-Month__button Date-Month__button--prev",
              onClick: function onClick() {
                return _this2.setNumberMonth('prev');
              }
            },
            _react2.default.createElement("i", null)
          ),
          (0, _moment2.default)(this.state.month, this.context.format).format("MMMM-YYYY"),
          _react2.default.createElement(
            "button",
            {
              className: "Date-Month__button Date-Month__button--next",
              onClick: function onClick() {
                return _this2.setNumberMonth('next');
              }
            },
            _react2.default.createElement("i", null)
          )
        ),
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "div",
            { className: "Date-Month__daysWeek" },
            (0, _moment2.default)(this.state.month)._locale._weekdaysMin.map(function (dayWeek) {
              return _react2.default.createElement(
                "div",
                { key: dayWeek, className: "Date-Month__dayWeek" },
                dayWeek
              );
            })
          ),
          _react2.default.createElement(_ListDays2.default, {
            date: this.state.month,
            setNumberMonth: this.setNumberMonth
          })
        )
      );
    }
  }]);

  return MonthPiker;
}(_react2.default.Component);

exports.default = MonthPiker;


MonthPiker.propTypes = {
  type: _propTypes2.default.string,
  date: _propTypes2.default.string,
  skipMonth: _propTypes2.default.string
};

MonthPiker.contextTypes = {
  format: _propTypes2.default.string,
  setActiveMonth: _propTypes2.default.func,
  setRange: _propTypes2.default.func
};