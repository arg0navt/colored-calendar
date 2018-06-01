"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _MonthPicker = require("./MonthPicker");

var _MonthPicker2 = _interopRequireDefault(_MonthPicker);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

require("moment/locale/ru");

require("./ColoredCalendar.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColoredCalendar = function (_React$Component) {
  _inherits(ColoredCalendar, _React$Component);

  function ColoredCalendar() {
    _classCallCheck(this, ColoredCalendar);

    var _this = _possibleConstructorReturn(this, (ColoredCalendar.__proto__ || Object.getPrototypeOf(ColoredCalendar)).call(this));

    _this.state = {
      activeRange: { from: null, to: null },
      activeMonths: { left: null, right: null }
    };
    _this.setRange = _this.setRange.bind(_this);
    _this.setActiveMonth = _this.setActiveMonth.bind(_this);
    return _this;
  }

  _createClass(ColoredCalendar, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        colors: this.props.colors,
        setActiveMonth: this.setActiveMonth,
        activeRange: this.state.activeRange,
        setRange: this.setRange,
        switchMonth: this.props.switchMonth,
        limit: this.props.limit
      };
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      _moment2.default.locale(this.props.lang, {
        week: { dom: 1 }
      });
      this.setState(function (prevState) {
        prevState.activeMonths.left = _this2.props.initPicker.from;
        prevState.activeMonths.right = _this2.props.initPicker.to;
        if (_this2.props.range) {
          prevState.activeRange.from = _this2.props.range.from;
          prevState.activeRange.to = _this2.props.range.to;
        }
        return prevState;
      });
    }
  }, {
    key: "setRange",
    value: function setRange(value) {
      var _this3 = this;

      this.setState(function (prevState) {
        if (prevState.activeRange.from && prevState.activeRange.to) {
          prevState.activeRange.from = null;
          prevState.activeRange.to = null;
          prevState.activeRange.from ? prevState.activeRange.to = value : prevState.activeRange.from = value;
        } else {
          if (prevState.activeRange.from) {
            if (prevState.activeRange.from > value) {
              prevState.activeRange.to = prevState.activeRange.from;
              prevState.activeRange.from = value;
            } else prevState.activeRange.to = value;
          } else prevState.activeRange.from = value;
        }
        return prevState;
      }, function () {
        return _this3.props.switchDays(_this3.state.activeRange);
      });
    }
  }, {
    key: "setActiveMonth",
    value: function setActiveMonth(type, date) {
      this.setState(function (prevState) {
        prevState.activeMonths[type] = date;
        return prevState;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "Date-RangePicker" },
        _react2.default.createElement(_MonthPicker2.default, {
          key: "left",
          type: "left",
          date: this.props.initPicker.from,
          skipMonth: this.state.activeMonths.right
        }),
        _react2.default.createElement(_MonthPicker2.default, {
          key: "right",
          type: "right",
          date: this.props.initPicker.to,
          skipMonth: this.state.activeMonths.left
        })
      );
    }
  }]);

  return ColoredCalendar;
}(_react2.default.Component);

exports.default = ColoredCalendar;


ColoredCalendar.defaultProps = {
  initPicker: {
    from: (0, _moment2.default)((0, _moment2.default)().format("YYMM") + "01000000000", "YYMMDDHHmmss000"),
    to: (0, _moment2.default)((0, _moment2.default)().add(1, "month").format("YYMMDD") + "135900000", "YYMMDDHHmmss000")
  },
  lang: "ru",
  limit: 0
};

ColoredCalendar.PropType = {
  colors: _propTypes2.default.array,
  switchMonth: _propTypes2.default.func,
  switchDays: _propTypes2.default.func
};

ColoredCalendar.childContextTypes = {
  colors: _propTypes2.default.array,
  setActiveMonth: _propTypes2.default.func,
  activeRange: _propTypes2.default.object,
  setRange: _propTypes2.default.func,
  switchMonth: _propTypes2.default.func,
  limit: _propTypes2.default.number
};