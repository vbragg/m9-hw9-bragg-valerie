'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Desserts = function Desserts(type, calories) {
  _classCallCheck(this, Desserts);

  this.type = type;
  this.calories = calories;
};

var Icecream = function (_Desserts) {
  _inherits(Icecream, _Desserts);

  function Icecream(type, calories, flavor, scoops) {
    _classCallCheck(this, Icecream);

    var _this = _possibleConstructorReturn(this, (Icecream.__proto__ || Object.getPrototypeOf(Icecream)).call(this, type, calories));

    _this.flavor = flavor;
    _this.scoops = scoops;
    return _this;
  }

  _createClass(Icecream, [{
    key: 'includeSpoon',
    value: function includeSpoon() {
      console.log('Here is your spoon!');
    }
  }]);

  return Icecream;
}(Desserts);

var vanillaIcecream = new Icecream('Icecream', 340, 'Vanilla', 3);

console.log(vanillaIcecream);
vanillaIcecream.includeSpoon();