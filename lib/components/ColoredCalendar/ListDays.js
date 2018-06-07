"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _Day = require("./Day");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var monthWeekLength = 5;

var ListDays = function (_React$Component) {
  _inherits(ListDays, _React$Component);

  function ListDays(props) {
    _classCallCheck(this, ListDays);

    var _this = _possibleConstructorReturn(this, (ListDays.__proto__ || Object.getPrototypeOf(ListDays)).call(this, props));

    _this.getStartEndMonth = function (date) {
      return {
        start: (0, _moment2.default)(date.date ? date.date : date, _this.context.format).startOf("month").startOf("week"),
        end: (0, _moment2.default)(date.date ? date.date : date, _this.context.format).endOf("month").endOf("week")
      };
    };

    _this.setArrayList = function (sizeWeeks, mm) {
      var arrayList = [];
      var n = _this.getStartEndMonth(mm).start;
      for (var weekNumber = 0; weekNumber <= sizeWeeks; weekNumber++) {
        for (var dayNumber = 0; dayNumber <= 6; dayNumber++) {
          arrayList.push((0, _moment2.default)(n).add({ week: weekNumber, days: dayNumber }));
        }
      }
      _this.setState({ arrayList: arrayList });
    };

    _this.renderLimit = function (day, min, max) {
      if (day.isAfter(min) && day.isBefore(max)) {
        return _react2.default.createElement(_Day.Day, {
          dateMonth: _this.props.date,
          key: day.format(_this.context.format),
          day: day
        });
      } else return _react2.default.createElement(_Day.DayShadow, {
        dateMonth: _this.props.date,
        setMonth: _this.props.setNumberMonth,
        key: day.format(_this.context.format),
        day: day
      });
    };

    _this.renderDays = function () {
      var min = _this.context.activeRange.from ? (0, _moment2.default)(_this.context.activeRange.from, _this.context.format).subtract(_this.context.limit + 1, "days") : null;
      var max = _this.context.activeRange.from ? (0, _moment2.default)(_this.context.activeRange.from, _this.context.format).add(_this.context.limit + 1, "days") : null;
      return _this.state.arrayList.map(function (day) {
        if (day.month() !== (0, _moment2.default)(_this.props.date, _this.context.format).month()) {
          return _react2.default.createElement(_Day.DayShadow, {
            dateMonth: _this.props.date,
            setMonth: _this.props.setNumberMonth,
            key: day.format(_this.context.format),
            day: day
          });
        } else {
          if (_this.context.activeRange.from && _this.context.limit) {
            return _this.renderLimit(day, min, max);
          } else {
            return _react2.default.createElement(_Day.Day, {
              dateMonth: _this.props.date,
              key: day.format(_this.context.format),
              day: day
            });
          }
        }
      });
    };

    _this.state = {
      arrayList: []
    };
    return _this;
  }

  _createClass(ListDays, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setArrayList(monthWeekLength, this.props);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.date !== this.props.date) {
        this.setArrayList(monthWeekLength, nextProps.date);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "Date-Month__month" },
        this.renderDays()
      );
    }
  }]);

  return ListDays;
}(_react2.default.Component);

exports.default = ListDays;


ListDays.contextTypes = {
  format: _propTypes2.default.string,
  limit: _propTypes2.default.number,
  activeRange: _propTypes2.default.object
};