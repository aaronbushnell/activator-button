'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var $ = require('jquery');
var Activator = require('activator');

var ActivatorButton = (function (_Activator) {
  _inherits(ActivatorButton, _Activator);

  function ActivatorButton(el) {
    _classCallCheck(this, ActivatorButton);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ActivatorButton).call(this, el));

    _this.events();
    return _this;
  }

  _createClass(ActivatorButton, [{
    key: 'events',
    value: function events() {
      this.$el.on('click', this.checkStatus.bind(this));
    }
  }, {
    key: 'checkStatus',
    value: function checkStatus() {
      this.EventEmitter.emit('preCheck');

      if (this.active === false) {
        this.setActive();
      } else {
        this.setInactive();
      }

      this.EventEmitter.emit('postCheck');
    }
  }]);

  return ActivatorButton;
})(Activator);

module.exports = ActivatorButton;