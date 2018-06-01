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

var _reactMomentProptypes = require("react-moment-proptypes");

var _reactMomentProptypes2 = _interopRequireDefault(_reactMomentProptypes);

require("moment/locale/ru");

require("./picker.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SoloPicker = function (_React$Component) {
  _inherits(SoloPicker, _React$Component);

  function SoloPicker(props) {
    _classCallCheck(this, SoloPicker);

    var _this = _possibleConstructorReturn(this, (SoloPicker.__proto__ || Object.getPrototypeOf(SoloPicker)).call(this, props));

    _this.state = {
      date: null,
      oneActiveDay: null
    };
    _this.setRange = _this.setRange.bind(_this);
    _this.setActiveMonth = _this.setActiveMonth.bind(_this);
    return _this;
  }

  _createClass(SoloPicker, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        colors: this.props.colors,
        setActiveMonth: this.setActiveMonth,
        setRange: this.setRange,
        switchMonth: this.props.switchMonth,
        limit: this.props.limit,
        oneActiveDay: this.state.oneActiveDay
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
        prevState.date = _this2.props.initDate;
        return prevState;
      });
    }
  }, {
    key: "setRange",
    value: function setRange(newDate) {
      var _this3 = this;

      this.setState({ oneActiveDay: newDate }, function () {
        return _this3.props.switchDays(newDate);
      });
    }
  }, {
    key: "setActiveMonth",
    value: function setActiveMonth(date) {
      this.setState({ date: date });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "Date-RangePicker" },
        _react2.default.createElement(_MonthPicker2.default, {
          type: "left",
          date: this.props.initDate
        })
      );
    }
  }]);

  return SoloPicker;
}(_react2.default.Component);

exports.default = SoloPicker;


SoloPicker.defaultProps = {
  initDate: (0, _moment2.default)((0, _moment2.default)().format("YYMM") + "01000000000", "YYMMDDHHmmss000"),
  lang: "ru",
  limit: 0,
  colors: []
};

SoloPicker.PropType = {
  initDate: _reactMomentProptypes2.default.momentObj,
  limit: _propTypes2.default.number,
  lang: _propTypes2.default.string,
  colors: _propTypes2.default.array,
  switchMonth: _propTypes2.default.func,
  switchDays: _propTypes2.default.func
};

SoloPicker.childContextTypes = {
  colors: _propTypes2.default.array,
  setActiveMonth: _propTypes2.default.func,
  setRange: _propTypes2.default.func,
  switchMonth: _propTypes2.default.func,
  limit: _propTypes2.default.number,
  oneActiveDay: _propTypes2.default.object
};