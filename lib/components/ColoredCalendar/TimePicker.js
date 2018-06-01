"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactHammerjs = require("react-hammerjs");

var _reactHammerjs2 = _interopRequireDefault(_reactHammerjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var TimeHours = function TimeHours(set) {
  return [].concat(_toConsumableArray(Array(12))).map(function (hourse, index) {
    return _react2.default.createElement(
      "div",
      { onClick: function onClick() {
          return set(index + 1);
        },
        className: "Date-Month__hour",
        key: "hourse" + index },
      index + 1
    );
  });
};
var TimeMinutes = function TimeMinutes(value, setDate) {
  return [].concat(_toConsumableArray(Array(60))).map(function (minutes, index) {
    return _react2.default.createElement(
      "div",
      {
        className: "Date-Month__m-item " + (value === index ? "active" : ""),
        onClick: function onClick() {
          return setDate(index);
        },
        key: "minutes" + index },
      index < 10 ? "0" + index : index
    );
  });
};

var TimePicker = function (_React$Component) {
  _inherits(TimePicker, _React$Component);

  function TimePicker(props) {
    _classCallCheck(this, TimePicker);

    var _this = _possibleConstructorReturn(this, (TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call(this, props));

    _this.state = {
      hours: props.hours
    };
    _this.setTime = _this.setTime.bind(_this);
    return _this;
  }

  _createClass(TimePicker, [{
    key: "setTime",
    value: function setTime(hours) {
      this.setState({ hours: hours });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "Date-Month__am-pm" },
          _react2.default.createElement(
            "button",
            { className: "Date-Month__am " + (this.state.hours < 12 ? "active" : "") },
            "Am"
          ),
          _react2.default.createElement(
            "button",
            { className: "Date-Month__pm " + (this.state.hours >= 12 ? "active" : "") },
            "Pm"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "Date-Month__time" },
          _react2.default.createElement("div", { className: "Date-Month__center", style: { transform: "rotate(" + this.state.hours * (360 / 12) + "deg)" } }),
          _react2.default.createElement(
            "div",
            { className: "Date-Month__hours" },
            TimeHours(this.setTime)
          )
        ),
        _react2.default.createElement(SectionMinutes, {
          minutes: this.props.minutes
        })
      );
    }
  }]);

  return TimePicker;
}(_react2.default.Component);

exports.default = TimePicker;
;

var SectionMinutes = function (_React$Component2) {
  _inherits(SectionMinutes, _React$Component2);

  function SectionMinutes(props) {
    _classCallCheck(this, SectionMinutes);

    var _this2 = _possibleConstructorReturn(this, (SectionMinutes.__proto__ || Object.getPrototypeOf(SectionMinutes)).call(this, props));

    _this2.state = {
      x: 0,
      z: 0,
      value: props.minutes
    };
    _this2.start = _this2.start.bind(_this2);
    _this2.pan = _this2.pan.bind(_this2);
    _this2.end = _this2.end.bind(_this2);
    _this2.setDate = _this2.setDate.bind(_this2);
    return _this2;
  }

  _createClass(SectionMinutes, [{
    key: "start",
    value: function start() {
      this.setState({ x: this.state.z });
    }
  }, {
    key: "pan",
    value: function pan(e) {
      var newRange = this.state.z + e.deltaX;
      var maxRange = -1330;
      if (newRange < maxRange) {
        newRange = maxRange;
      }
      if (newRange < 0 && this.state.x >= maxRange) {
        this.setState({ x: newRange });
      }
    }
  }, {
    key: "end",
    value: function end() {
      this.setState({ x: this.state.x, z: this.state.x });
    }
  }, {
    key: "setDate",
    value: function setDate(value) {
      this.setState({ value: value });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        "div",
        { className: "Date-Month__m" },
        _react2.default.createElement(
          "div",
          { className: "Date-Month__m-active" },
          _react2.default.createElement(
            _reactHammerjs2.default,
            { onPanStart: function onPanStart() {
                return _this3.start();
              }, onPan: function onPan(e) {
                return _this3.pan(e);
              }, onPanEnd: function onPanEnd() {
                return _this3.end();
              } },
            _react2.default.createElement(
              "div",
              { ref: function ref(list) {
                  return _this3.list = list;
                }, className: "Date-Month__m-list", style: { transform: "translate3d(" + this.state.x + "px, 0px, 0px)" } },
              TimeMinutes(this.state.value, this.setDate)
            )
          )
        )
      );
    }
  }]);

  return SectionMinutes;
}(_react2.default.Component);

;