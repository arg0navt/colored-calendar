"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ListDays = require("./ListDays");

var _ListDays2 = _interopRequireDefault(_ListDays);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MonthPiker = function (_React$Component) {
  _inherits(MonthPiker, _React$Component);

  function MonthPiker(props) {
    _classCallCheck(this, MonthPiker);

    var _this = _possibleConstructorReturn(this, (MonthPiker.__proto__ || Object.getPrototypeOf(MonthPiker)).call(this, props));

    _this.state = {
      month: _this.props.date,
      number: 0
    };
    _this.setNumberMonth = _this.setNumberMonth.bind(_this);
    return _this;
  }

  _createClass(MonthPiker, [{
    key: "setNumberMonth",
    value: function setNumberMonth(type) {
      var _this2 = this;

      this.setState(function (prevState) {
        var monthDate = (0, _moment2.default)(prevState.month),
            active = type === "next" ? monthDate.add(1, "month").startOf("month").format("DDMMYY") : monthDate.subtract(1, "month").startOf("month").format("DDMMYY");
        if (_this2.props.skipMonth && active === _this2.props.skipMonth.startOf("month").format("DDMMYY")) {
          prevState.number = type === "next" ? _this2.state.number + 2 : _this2.state.number - 2;
        } else prevState.number = type === "next" ? _this2.state.number + 1 : _this2.state.number - 1;
        return prevState;
      }, function () {
        return _this2.setMonth();
      });
    }
  }, {
    key: "setMonth",
    value: function setMonth() {
      var _this3 = this;

      this.setState({
        month: (0, _moment2.default)(this.props.date).add(this.state.number, "month")
      }, function () {
        _this3.context.setActiveMonth(_this3.props.type, _this3.state.month);
        _this3.context.switchMonth(_this3.props.type, _this3.state.month);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

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
                return _this4.setNumberMonth('prev');
              }
            },
            _react2.default.createElement("i", null)
          ),
          (0, _moment2.default)(this.state.month).format("MMMM-YYYY"),
          _react2.default.createElement(
            "button",
            {
              className: "Date-Month__button Date-Month__button--next",
              onClick: function onClick() {
                return _this4.setNumberMonth('next');
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


MonthPiker.PropTypes = {
  type: _propTypes2.default.string,
  date: _propTypes2.default.string,
  switchMonth: _propTypes2.default.func
};

MonthPiker.contextTypes = {
  setActiveMonth: _propTypes2.default.func,
  setRange: _propTypes2.default.func,
  switchMonth: _propTypes2.default.func
};