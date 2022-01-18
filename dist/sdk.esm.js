import JSBI from 'jsbi';
export { default as JSBI } from 'jsbi';
import invariant from 'tiny-invariant';
import warning from 'tiny-warning';
import { getAddress, getCreate2Address } from '@ethersproject/address';
import _Big from 'big.js';
import toFormat from 'toformat';
import _Decimal from 'decimal.js-light';
import { keccak256, pack } from '@ethersproject/solidity';
import { Contract } from '@ethersproject/contracts';
import { getNetwork } from '@ethersproject/networks';
import { getDefaultProvider } from '@ethersproject/providers';
import IUniswapV2Pair from '@uniswap/v2-core/build/IUniswapV2Pair.json';

var _FACTORY_ADDRESS, _ROUTER_ADDRESS, _SUSHI_ADDRESS, _MASTERCHEF_ADDRESS, _BAR_ADDRESS, _MAKER_ADDRESS, _TIMELOCK_ADDRESS, _SOLIDITY_TYPE_MAXIMA;
var ChainId;

(function (ChainId) {
  ChainId[ChainId["MAINNET"] = 1] = "MAINNET";
  ChainId[ChainId["ROPSTEN"] = 3] = "ROPSTEN";
  ChainId[ChainId["RINKEBY"] = 4] = "RINKEBY";
  ChainId[ChainId["G\xD6RLI"] = 5] = "G\xD6RLI";
  ChainId[ChainId["KOVAN"] = 42] = "KOVAN";
  ChainId[ChainId["MATIC"] = 137] = "MATIC";
  ChainId[ChainId["MATIC_TESTNET"] = 80001] = "MATIC_TESTNET";
  ChainId[ChainId["FANTOM"] = 250] = "FANTOM";
  ChainId[ChainId["FANTOM_TESTNET"] = 4002] = "FANTOM_TESTNET";
  ChainId[ChainId["XDAI"] = 100] = "XDAI";
  ChainId[ChainId["BSC"] = 56] = "BSC";
  ChainId[ChainId["BSC_TESTNET"] = 97] = "BSC_TESTNET";
  ChainId[ChainId["ARBITRUM"] = 79377087078960] = "ARBITRUM";
  ChainId[ChainId["MOONBASE"] = 1287] = "MOONBASE";
  ChainId[ChainId["AVALANCHE"] = 43114] = "AVALANCHE";
  ChainId[ChainId["FUJI"] = 43113] = "FUJI";
  ChainId[ChainId["HECO"] = 128] = "HECO";
  ChainId[ChainId["HECO_TESTNET"] = 256] = "HECO_TESTNET";
  ChainId[ChainId["HARMONY"] = 1666600000] = "HARMONY";
  ChainId[ChainId["HARMONY_TESTNET"] = 1666700000] = "HARMONY_TESTNET";
  ChainId[ChainId["OKEX"] = 66] = "OKEX";
  ChainId[ChainId["OKEX_TESTNET"] = 65] = "OKEX_TESTNET";
  ChainId[ChainId["DUSTY"] = 80] = "DUSTY";
  ChainId[ChainId["SHIBUYA"] = 81] = "SHIBUYA";
  ChainId[ChainId["SHIDEN"] = 336] = "SHIDEN";
  ChainId[ChainId["ASTR"] = 592] = "ASTR";
})(ChainId || (ChainId = {}));

var TradeType;

(function (TradeType) {
  TradeType[TradeType["EXACT_INPUT"] = 0] = "EXACT_INPUT";
  TradeType[TradeType["EXACT_OUTPUT"] = 1] = "EXACT_OUTPUT";
})(TradeType || (TradeType = {}));

var Rounding;

(function (Rounding) {
  Rounding[Rounding["ROUND_DOWN"] = 0] = "ROUND_DOWN";
  Rounding[Rounding["ROUND_HALF_UP"] = 1] = "ROUND_HALF_UP";
  Rounding[Rounding["ROUND_UP"] = 2] = "ROUND_UP";
})(Rounding || (Rounding = {}));

var INIT_CODE_HASH = '0x0de568581816d9ba7b1f7a4ffc56998ff6c30a76d3665a052258f5bf8f876783';
var FACTORY_ADDRESS = (_FACTORY_ADDRESS = {}, _FACTORY_ADDRESS[ChainId.MAINNET] = '0x0Af64bDA476628251dd9F88c9b0CA0b5DB17BFc1', _FACTORY_ADDRESS[ChainId.ROPSTEN] = '0x4f8Dcb4fd9eA4F96e09F45a26ab4dF314ca6ada1', _FACTORY_ADDRESS[ChainId.RINKEBY] = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4', _FACTORY_ADDRESS[ChainId.GÖRLI] = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4', _FACTORY_ADDRESS[ChainId.KOVAN] = '0x7Bf0D84E793089d04A9578E4A62A9194AeF44903', _FACTORY_ADDRESS[ChainId.FANTOM] = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4', _FACTORY_ADDRESS[ChainId.FANTOM_TESTNET] = '', _FACTORY_ADDRESS[ChainId.MATIC] = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4', _FACTORY_ADDRESS[ChainId.MATIC_TESTNET] = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4', _FACTORY_ADDRESS[ChainId.XDAI] = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4', _FACTORY_ADDRESS[ChainId.BSC] = '0x6797F1468007e0A7720a17ceD2D47350B45E26e5', _FACTORY_ADDRESS[ChainId.BSC_TESTNET] = '0x1EaBe8152538b4C3F4F60a4BDdb04c8A97a7294F', _FACTORY_ADDRESS[ChainId.ARBITRUM] = '', _FACTORY_ADDRESS[ChainId.MOONBASE] = '0x2Ce3F07dD4c62b56a502E223A7cBE38b1d77A1b5', _FACTORY_ADDRESS[ChainId.AVALANCHE] = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4', _FACTORY_ADDRESS[ChainId.FUJI] = '0xd00ae08403B9bbb9124bB305C09058E32C39A48c', _FACTORY_ADDRESS[ChainId.HECO] = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4', _FACTORY_ADDRESS[ChainId.HECO_TESTNET] = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4', _FACTORY_ADDRESS[ChainId.HARMONY] = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4', _FACTORY_ADDRESS[ChainId.HARMONY_TESTNET] = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4', _FACTORY_ADDRESS[ChainId.OKEX] = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4', _FACTORY_ADDRESS[ChainId.OKEX_TESTNET] = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4', _FACTORY_ADDRESS[ChainId.DUSTY] = '0xc1AdcEF12dFc1B1C097ABa8302DCeeedAa3048CF', _FACTORY_ADDRESS[ChainId.SHIBUYA] = '0x43C525Ed73f474685650f1C18132Ec172293E2b4', _FACTORY_ADDRESS[ChainId.SHIDEN] = '0x20c05B9D6546e60556dE510D58ac100783ad46B1', _FACTORY_ADDRESS[ChainId.ASTR] = '0x20c05B9D6546e60556dE510D58ac100783ad46B1', _FACTORY_ADDRESS);
var ROUTER_ADDRESS = (_ROUTER_ADDRESS = {}, _ROUTER_ADDRESS[ChainId.MAINNET] = '0x11cf19Fd46B16cda960D0eA9149Bd2c9F2AE0e21', _ROUTER_ADDRESS[ChainId.RINKEBY] = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506', _ROUTER_ADDRESS[ChainId.ROPSTEN] = '0x7D9a8baD34226a5834ED5aC1355dD981b13A08A3', _ROUTER_ADDRESS[ChainId.GÖRLI] = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506', _ROUTER_ADDRESS[ChainId.KOVAN] = '0x30939CD2fFC35748318D397D9103713c540c0aBF', _ROUTER_ADDRESS[ChainId.FANTOM] = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506', _ROUTER_ADDRESS[ChainId.FANTOM_TESTNET] = '', _ROUTER_ADDRESS[ChainId.MATIC] = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506', _ROUTER_ADDRESS[ChainId.MATIC_TESTNET] = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506', _ROUTER_ADDRESS[ChainId.XDAI] = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506', _ROUTER_ADDRESS[ChainId.BSC] = '0x3f815e7d299f08278c0308aE1048aa45ED12415f', _ROUTER_ADDRESS[ChainId.BSC_TESTNET] = '0x38CD988FAf254AF5B0432A0DD2BE9C33AbF1F352', _ROUTER_ADDRESS[ChainId.ARBITRUM] = '', _ROUTER_ADDRESS[ChainId.MOONBASE] = '0xeB5c2BB5E83B51d83F3534Ae21E84336B8B376ef', _ROUTER_ADDRESS[ChainId.AVALANCHE] = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506', _ROUTER_ADDRESS[ChainId.FUJI] = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506', _ROUTER_ADDRESS[ChainId.HECO] = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506', _ROUTER_ADDRESS[ChainId.HECO_TESTNET] = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506', _ROUTER_ADDRESS[ChainId.HARMONY] = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506', _ROUTER_ADDRESS[ChainId.HARMONY_TESTNET] = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506', _ROUTER_ADDRESS[ChainId.OKEX] = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506', _ROUTER_ADDRESS[ChainId.OKEX_TESTNET] = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506', _ROUTER_ADDRESS[ChainId.DUSTY] = '0xA4F42578c723A5B6781A9F49d586B8645ba85C31', _ROUTER_ADDRESS[ChainId.SHIBUYA] = '0xd75729d2A56132FEdCEb2A67c406A05a62dA8132', _ROUTER_ADDRESS[ChainId.SHIDEN] = '0xeB5ef73D8AdC049BEE0f87403B1c46c44CD8CF59', _ROUTER_ADDRESS[ChainId.ASTR] = '0x20c05B9D6546e60556dE510D58ac100783ad46B1', _ROUTER_ADDRESS);
var SUSHI_ADDRESS = (_SUSHI_ADDRESS = {}, _SUSHI_ADDRESS[ChainId.MAINNET] = '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2', _SUSHI_ADDRESS[ChainId.ROPSTEN] = '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F', _SUSHI_ADDRESS[ChainId.RINKEBY] = '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F', _SUSHI_ADDRESS[ChainId.GÖRLI] = '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F', _SUSHI_ADDRESS[ChainId.KOVAN] = '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F', _SUSHI_ADDRESS[ChainId.FANTOM] = '', _SUSHI_ADDRESS[ChainId.FANTOM_TESTNET] = '', _SUSHI_ADDRESS[ChainId.MATIC] = '', _SUSHI_ADDRESS[ChainId.MATIC_TESTNET] = '', _SUSHI_ADDRESS[ChainId.XDAI] = '', _SUSHI_ADDRESS[ChainId.BSC] = '', _SUSHI_ADDRESS[ChainId.BSC_TESTNET] = '', _SUSHI_ADDRESS[ChainId.ARBITRUM] = '', _SUSHI_ADDRESS[ChainId.MOONBASE] = '', _SUSHI_ADDRESS[ChainId.AVALANCHE] = '', _SUSHI_ADDRESS[ChainId.FUJI] = '', _SUSHI_ADDRESS[ChainId.HECO] = '', _SUSHI_ADDRESS[ChainId.HECO_TESTNET] = '', _SUSHI_ADDRESS[ChainId.HARMONY] = '', _SUSHI_ADDRESS[ChainId.HARMONY_TESTNET] = '', _SUSHI_ADDRESS[ChainId.OKEX] = '', _SUSHI_ADDRESS[ChainId.OKEX_TESTNET] = '', _SUSHI_ADDRESS[ChainId.DUSTY] = '', _SUSHI_ADDRESS[ChainId.SHIBUYA] = '', _SUSHI_ADDRESS[ChainId.SHIDEN] = '', _SUSHI_ADDRESS[ChainId.ASTR] = '', _SUSHI_ADDRESS);
var MASTERCHEF_ADDRESS = (_MASTERCHEF_ADDRESS = {}, _MASTERCHEF_ADDRESS[ChainId.MAINNET] = '0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd', _MASTERCHEF_ADDRESS[ChainId.ROPSTEN] = '0x80C7DD17B01855a6D2347444a0FCC36136a314de', _MASTERCHEF_ADDRESS[ChainId.RINKEBY] = '0x80C7DD17B01855a6D2347444a0FCC36136a314de', _MASTERCHEF_ADDRESS[ChainId.GÖRLI] = '0x80C7DD17B01855a6D2347444a0FCC36136a314de', _MASTERCHEF_ADDRESS[ChainId.KOVAN] = '0x80C7DD17B01855a6D2347444a0FCC36136a314de', _MASTERCHEF_ADDRESS[ChainId.FANTOM] = '', _MASTERCHEF_ADDRESS[ChainId.FANTOM_TESTNET] = '', _MASTERCHEF_ADDRESS[ChainId.MATIC] = '', _MASTERCHEF_ADDRESS[ChainId.MATIC_TESTNET] = '', _MASTERCHEF_ADDRESS[ChainId.XDAI] = '', _MASTERCHEF_ADDRESS[ChainId.BSC] = '', _MASTERCHEF_ADDRESS[ChainId.BSC_TESTNET] = '', _MASTERCHEF_ADDRESS[ChainId.ARBITRUM] = '', _MASTERCHEF_ADDRESS[ChainId.MOONBASE] = '', _MASTERCHEF_ADDRESS[ChainId.AVALANCHE] = '', _MASTERCHEF_ADDRESS[ChainId.FUJI] = '', _MASTERCHEF_ADDRESS[ChainId.HECO] = '', _MASTERCHEF_ADDRESS[ChainId.HECO_TESTNET] = '', _MASTERCHEF_ADDRESS[ChainId.HARMONY] = '', _MASTERCHEF_ADDRESS[ChainId.HARMONY_TESTNET] = '', _MASTERCHEF_ADDRESS[ChainId.OKEX] = '', _MASTERCHEF_ADDRESS[ChainId.OKEX_TESTNET] = '', _MASTERCHEF_ADDRESS[ChainId.DUSTY] = '0x80C7DD17B01855a6D2347444a0FCC36136a314de', _MASTERCHEF_ADDRESS[ChainId.SHIBUYA] = '', _MASTERCHEF_ADDRESS[ChainId.SHIDEN] = '', _MASTERCHEF_ADDRESS[ChainId.ASTR] = '', _MASTERCHEF_ADDRESS);
var BAR_ADDRESS = (_BAR_ADDRESS = {}, _BAR_ADDRESS[ChainId.MAINNET] = '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272', _BAR_ADDRESS[ChainId.ROPSTEN] = '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c', _BAR_ADDRESS[ChainId.RINKEBY] = '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c', _BAR_ADDRESS[ChainId.GÖRLI] = '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c', _BAR_ADDRESS[ChainId.KOVAN] = '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c', _BAR_ADDRESS[ChainId.FANTOM] = '', _BAR_ADDRESS[ChainId.FANTOM_TESTNET] = '', _BAR_ADDRESS[ChainId.MATIC] = '', _BAR_ADDRESS[ChainId.MATIC_TESTNET] = '', _BAR_ADDRESS[ChainId.XDAI] = '', _BAR_ADDRESS[ChainId.BSC] = '', _BAR_ADDRESS[ChainId.BSC_TESTNET] = '', _BAR_ADDRESS[ChainId.ARBITRUM] = '', _BAR_ADDRESS[ChainId.MOONBASE] = '', _BAR_ADDRESS[ChainId.AVALANCHE] = '', _BAR_ADDRESS[ChainId.FUJI] = '', _BAR_ADDRESS[ChainId.HECO] = '', _BAR_ADDRESS[ChainId.HECO_TESTNET] = '', _BAR_ADDRESS[ChainId.HARMONY] = '', _BAR_ADDRESS[ChainId.HARMONY_TESTNET] = '', _BAR_ADDRESS[ChainId.OKEX] = '', _BAR_ADDRESS[ChainId.OKEX_TESTNET] = '', _BAR_ADDRESS[ChainId.DUSTY] = '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c', _BAR_ADDRESS[ChainId.SHIBUYA] = '', _BAR_ADDRESS[ChainId.SHIDEN] = '', _BAR_ADDRESS[ChainId.ASTR] = '', _BAR_ADDRESS);
var MAKER_ADDRESS = (_MAKER_ADDRESS = {}, _MAKER_ADDRESS[ChainId.MAINNET] = '0xE11fc0B43ab98Eb91e9836129d1ee7c3Bc95df50', _MAKER_ADDRESS[ChainId.ROPSTEN] = '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa', _MAKER_ADDRESS[ChainId.RINKEBY] = '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa', _MAKER_ADDRESS[ChainId.GÖRLI] = '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa', _MAKER_ADDRESS[ChainId.KOVAN] = '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa', _MAKER_ADDRESS[ChainId.FANTOM] = '', _MAKER_ADDRESS[ChainId.FANTOM_TESTNET] = '', _MAKER_ADDRESS[ChainId.MATIC] = '', _MAKER_ADDRESS[ChainId.MATIC_TESTNET] = '', _MAKER_ADDRESS[ChainId.XDAI] = '', _MAKER_ADDRESS[ChainId.BSC] = '', _MAKER_ADDRESS[ChainId.BSC_TESTNET] = '', _MAKER_ADDRESS[ChainId.ARBITRUM] = '', _MAKER_ADDRESS[ChainId.MOONBASE] = '', _MAKER_ADDRESS[ChainId.AVALANCHE] = '', _MAKER_ADDRESS[ChainId.FUJI] = '', _MAKER_ADDRESS[ChainId.HECO] = '', _MAKER_ADDRESS[ChainId.HECO_TESTNET] = '', _MAKER_ADDRESS[ChainId.HARMONY] = '', _MAKER_ADDRESS[ChainId.HARMONY_TESTNET] = '', _MAKER_ADDRESS[ChainId.OKEX] = '', _MAKER_ADDRESS[ChainId.OKEX_TESTNET] = '', _MAKER_ADDRESS[ChainId.DUSTY] = '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa', _MAKER_ADDRESS[ChainId.SHIBUYA] = '', _MAKER_ADDRESS[ChainId.SHIDEN] = '', _MAKER_ADDRESS[ChainId.ASTR] = '', _MAKER_ADDRESS);
var TIMELOCK_ADDRESS = (_TIMELOCK_ADDRESS = {}, _TIMELOCK_ADDRESS[ChainId.MAINNET] = '0x9a8541Ddf3a932a9A922B607e9CF7301f1d47bD1', _TIMELOCK_ADDRESS[ChainId.ROPSTEN] = '', _TIMELOCK_ADDRESS[ChainId.RINKEBY] = '', _TIMELOCK_ADDRESS[ChainId.GÖRLI] = '', _TIMELOCK_ADDRESS[ChainId.KOVAN] = '', _TIMELOCK_ADDRESS[ChainId.FANTOM] = '', _TIMELOCK_ADDRESS[ChainId.FANTOM_TESTNET] = '', _TIMELOCK_ADDRESS[ChainId.MATIC] = '', _TIMELOCK_ADDRESS[ChainId.MATIC_TESTNET] = '', _TIMELOCK_ADDRESS[ChainId.XDAI] = '', _TIMELOCK_ADDRESS[ChainId.BSC] = '', _TIMELOCK_ADDRESS[ChainId.BSC_TESTNET] = '', _TIMELOCK_ADDRESS[ChainId.ARBITRUM] = '', _TIMELOCK_ADDRESS[ChainId.MOONBASE] = '', _TIMELOCK_ADDRESS[ChainId.AVALANCHE] = '', _TIMELOCK_ADDRESS[ChainId.FUJI] = '', _TIMELOCK_ADDRESS[ChainId.HECO] = '', _TIMELOCK_ADDRESS[ChainId.HECO_TESTNET] = '', _TIMELOCK_ADDRESS[ChainId.HARMONY] = '', _TIMELOCK_ADDRESS[ChainId.HARMONY_TESTNET] = '', _TIMELOCK_ADDRESS[ChainId.OKEX] = '', _TIMELOCK_ADDRESS[ChainId.OKEX_TESTNET] = '', _TIMELOCK_ADDRESS[ChainId.DUSTY] = '', _TIMELOCK_ADDRESS[ChainId.SHIBUYA] = '', _TIMELOCK_ADDRESS[ChainId.SHIDEN] = '', _TIMELOCK_ADDRESS[ChainId.ASTR] = '', _TIMELOCK_ADDRESS);
var MINIMUM_LIQUIDITY = /*#__PURE__*/JSBI.BigInt(1000); // exports for internal consumption

var ZERO = /*#__PURE__*/JSBI.BigInt(0);
var ONE = /*#__PURE__*/JSBI.BigInt(1);
var TWO = /*#__PURE__*/JSBI.BigInt(2);
var THREE = /*#__PURE__*/JSBI.BigInt(3);
var FIVE = /*#__PURE__*/JSBI.BigInt(5);
var TEN = /*#__PURE__*/JSBI.BigInt(10);
var _100 = /*#__PURE__*/JSBI.BigInt(100);
var _997 = /*#__PURE__*/JSBI.BigInt(997);
var _1000 = /*#__PURE__*/JSBI.BigInt(1000);
var SolidityType;

(function (SolidityType) {
  SolidityType["uint8"] = "uint8";
  SolidityType["uint256"] = "uint256";
})(SolidityType || (SolidityType = {}));

var SOLIDITY_TYPE_MAXIMA = (_SOLIDITY_TYPE_MAXIMA = {}, _SOLIDITY_TYPE_MAXIMA[SolidityType.uint8] = /*#__PURE__*/JSBI.BigInt('0xff'), _SOLIDITY_TYPE_MAXIMA[SolidityType.uint256] = /*#__PURE__*/JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'), _SOLIDITY_TYPE_MAXIMA);

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

// see https://stackoverflow.com/a/41102306
var CAN_SET_PROTOTYPE = ('setPrototypeOf' in Object);
/**
 * Indicates that the pair has insufficient reserves for a desired output amount. I.e. the amount of output cannot be
 * obtained by sending any amount of input.
 */

var InsufficientReservesError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(InsufficientReservesError, _Error);

  function InsufficientReservesError() {
    var _this;

    _this = _Error.call(this) || this;
    _this.isInsufficientReservesError = true;
    _this.name = _this.constructor.name;
    if (CAN_SET_PROTOTYPE) Object.setPrototypeOf(_assertThisInitialized(_this), (this instanceof InsufficientReservesError ? this.constructor : void 0).prototype);
    return _this;
  }

  return InsufficientReservesError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Indicates that the input amount is too small to produce any amount of output. I.e. the amount of input sent is less
 * than the price of a single unit of output after fees.
 */

var InsufficientInputAmountError = /*#__PURE__*/function (_Error2) {
  _inheritsLoose(InsufficientInputAmountError, _Error2);

  function InsufficientInputAmountError() {
    var _this2;

    _this2 = _Error2.call(this) || this;
    _this2.isInsufficientInputAmountError = true;
    _this2.name = _this2.constructor.name;
    if (CAN_SET_PROTOTYPE) Object.setPrototypeOf(_assertThisInitialized(_this2), (this instanceof InsufficientInputAmountError ? this.constructor : void 0).prototype);
    return _this2;
  }

  return InsufficientInputAmountError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

function validateSolidityTypeInstance(value, solidityType) {
  !JSBI.greaterThanOrEqual(value, ZERO) ? process.env.NODE_ENV !== "production" ? invariant(false, value + " is not a " + solidityType + ".") : invariant(false) : void 0;
  !JSBI.lessThanOrEqual(value, SOLIDITY_TYPE_MAXIMA[solidityType]) ? process.env.NODE_ENV !== "production" ? invariant(false, value + " is not a " + solidityType + ".") : invariant(false) : void 0;
} // warns if addresses are not checksummed

function validateAndParseAddress(address) {
  try {
    var checksummedAddress = getAddress(address);
    process.env.NODE_ENV !== "production" ? warning(address === checksummedAddress, address + " is not checksummed.") : void 0;
    return checksummedAddress;
  } catch (error) {
     process.env.NODE_ENV !== "production" ? invariant(false, address + " is not a valid address.") : invariant(false) ;
  }
}
function parseBigintIsh(bigintIsh) {
  return bigintIsh instanceof JSBI ? bigintIsh : typeof bigintIsh === 'bigint' ? JSBI.BigInt(bigintIsh.toString()) : JSBI.BigInt(bigintIsh);
} // mock the on-chain sqrt function

function sqrt(y) {
  validateSolidityTypeInstance(y, SolidityType.uint256);
  var z = ZERO;
  var x;

  if (JSBI.greaterThan(y, THREE)) {
    z = y;
    x = JSBI.add(JSBI.divide(y, TWO), ONE);

    while (JSBI.lessThan(x, z)) {
      z = x;
      x = JSBI.divide(JSBI.add(JSBI.divide(y, x), x), TWO);
    }
  } else if (JSBI.notEqual(y, ZERO)) {
    z = ONE;
  }

  return z;
} // given an array of items sorted by `comparator`, insert an item into its sort index and constrain the size to
// `maxSize` by removing the last item

function sortedInsert(items, add, maxSize, comparator) {
  !(maxSize > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'MAX_SIZE_ZERO') : invariant(false) : void 0; // this is an invariant because the interface cannot return multiple removed items if items.length exceeds maxSize

  !(items.length <= maxSize) ? process.env.NODE_ENV !== "production" ? invariant(false, 'ITEMS_SIZE') : invariant(false) : void 0; // short circuit first item add

  if (items.length === 0) {
    items.push(add);
    return null;
  } else {
    var isFull = items.length === maxSize; // short circuit if full and the additional item does not come before the last item

    if (isFull && comparator(items[items.length - 1], add) <= 0) {
      return add;
    }

    var lo = 0,
        hi = items.length;

    while (lo < hi) {
      var mid = lo + hi >>> 1;

      if (comparator(items[mid], add) <= 0) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }

    items.splice(lo, 0, add);
    return isFull ? items.pop() : null;
  }
}

var _Currency$NATIVE;
/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */

var Currency = /*#__PURE__*/function () {
  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  function Currency(decimals, symbol, name) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8);
    this.decimals = decimals;
    this.symbol = symbol;
    this.name = name;
  }

  Currency.getNativeCurrency = function getNativeCurrency(chainId) {
    if (!chainId) {
      throw Error("No chainId " + chainId);
    }

    if (!(chainId in Currency.NATIVE)) {
      throw Error("No native currency defined for chainId " + chainId);
    }

    return Currency.NATIVE[chainId];
  };

  Currency.getNativeCurrencySymbol = function getNativeCurrencySymbol(chainId) {
    var nativeCurrency = this.getNativeCurrency(chainId);
    return nativeCurrency.symbol;
  };

  Currency.getNativeCurrencyName = function getNativeCurrencyName(chainId) {
    var nativeCurrency = this.getNativeCurrency(chainId);
    return nativeCurrency.name;
  };

  var _proto = Currency.prototype;

  _proto.getSymbol = function getSymbol(chainId) {
    if (!chainId) {
      return this === null || this === void 0 ? void 0 : this.symbol;
    }

    if ((this === null || this === void 0 ? void 0 : this.symbol) === 'ETH') {
      return Currency.getNativeCurrencySymbol(chainId);
    } // if (this?.symbol === 'WETH') {
    //   return `W${Currency.getNativeCurrencySymbol(chainId)}`
    // }


    return this === null || this === void 0 ? void 0 : this.symbol;
  };

  _proto.getName = function getName(chainId) {
    if (!chainId) {
      return this === null || this === void 0 ? void 0 : this.name;
    }

    if ((this === null || this === void 0 ? void 0 : this.name) === 'Ether') {
      return Currency.getNativeCurrencyName(chainId);
    }

    return this === null || this === void 0 ? void 0 : this.name;
  };

  return Currency;
}();
Currency.ETHER = /*#__PURE__*/new Currency(18, 'ETH', 'Ether');
Currency.BNB = /*#__PURE__*/new Currency(18, 'BNB', 'Binance Coin');
Currency.FTM = /*#__PURE__*/new Currency(18, 'FTM', 'Fantom');
Currency.MATIC = /*#__PURE__*/new Currency(18, 'MATIC', 'Matic');
Currency.XDAI = /*#__PURE__*/new Currency(18, 'XDAI', 'xDai');
Currency.GLMR = /*#__PURE__*/new Currency(18, 'GLMR', 'Glimmer');
Currency.AVAX = /*#__PURE__*/new Currency(18, 'AVAX', 'Avalanche');
Currency.HT = /*#__PURE__*/new Currency(18, 'HT', 'Heco Token');
Currency.ONE = /*#__PURE__*/new Currency(18, 'ONE', 'Harmony');
Currency.OKT = /*#__PURE__*/new Currency(18, 'OKT', 'OKExChain');
Currency.PLD = /*#__PURE__*/new Currency(18, 'PLD', 'Dusty Coin');
Currency.SBY = /*#__PURE__*/new Currency(18, 'SBY', 'Shibuya Coin');
Currency.SDN = /*#__PURE__*/new Currency(18, 'SDN', 'Shiden Coin');
Currency.ASTR = /*#__PURE__*/new Currency(18, 'Astr', 'ASTR Coin');
Currency.NATIVE = (_Currency$NATIVE = {}, _Currency$NATIVE[ChainId.MAINNET] = Currency.ETHER, _Currency$NATIVE[ChainId.ROPSTEN] = Currency.ETHER, _Currency$NATIVE[ChainId.RINKEBY] = Currency.ETHER, _Currency$NATIVE[ChainId.GÖRLI] = Currency.ETHER, _Currency$NATIVE[ChainId.KOVAN] = Currency.ETHER, _Currency$NATIVE[ChainId.FANTOM] = Currency.FTM, _Currency$NATIVE[ChainId.FANTOM_TESTNET] = Currency.FTM, _Currency$NATIVE[ChainId.MATIC] = Currency.MATIC, _Currency$NATIVE[ChainId.MATIC_TESTNET] = Currency.MATIC, _Currency$NATIVE[ChainId.XDAI] = Currency.XDAI, _Currency$NATIVE[ChainId.BSC] = Currency.BNB, _Currency$NATIVE[ChainId.BSC_TESTNET] = Currency.BNB, _Currency$NATIVE[ChainId.ARBITRUM] = Currency.ETHER, _Currency$NATIVE[ChainId.MOONBASE] = Currency.GLMR, _Currency$NATIVE[ChainId.AVALANCHE] = Currency.AVAX, _Currency$NATIVE[ChainId.FUJI] = Currency.AVAX, _Currency$NATIVE[ChainId.HECO] = Currency.HT, _Currency$NATIVE[ChainId.HECO_TESTNET] = Currency.HT, _Currency$NATIVE[ChainId.HARMONY] = Currency.ONE, _Currency$NATIVE[ChainId.HARMONY_TESTNET] = Currency.ONE, _Currency$NATIVE[ChainId.OKEX] = Currency.OKT, _Currency$NATIVE[ChainId.OKEX_TESTNET] = Currency.OKT, _Currency$NATIVE[ChainId.DUSTY] = Currency.PLD, _Currency$NATIVE[ChainId.SHIBUYA] = Currency.SBY, _Currency$NATIVE[ChainId.SHIDEN] = Currency.SDN, _Currency$NATIVE[ChainId.ASTR] = Currency.ASTR, _Currency$NATIVE);
var ETHER = Currency.ETHER; // const NATIVE_CURRENCY = {

var _WETH;
/**
 * Represents an ERC20 token with a unique address and some metadata.
 */

var Token = /*#__PURE__*/function (_Currency) {
  _inheritsLoose(Token, _Currency);

  function Token(chainId, address, decimals, symbol, name) {
    var _this;

    _this = _Currency.call(this, decimals, symbol, name) || this;
    _this.chainId = chainId;
    _this.address = validateAndParseAddress(address);
    return _this;
  }
  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */


  var _proto = Token.prototype;

  _proto.equals = function equals(other) {
    // short circuit on reference equality
    if (this === other) {
      return true;
    }

    return this.chainId === other.chainId && this.address === other.address;
  }
  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  ;

  _proto.sortsBefore = function sortsBefore(other) {
    !(this.chainId === other.chainId) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CHAIN_IDS') : invariant(false) : void 0;
    !(this.address !== other.address) ? process.env.NODE_ENV !== "production" ? invariant(false, 'ADDRESSES') : invariant(false) : void 0;
    return this.address.toLowerCase() < other.address.toLowerCase();
  };

  return Token;
}(Currency);
/**
 * Compares two currencies for equality
 */

function currencyEquals(currencyA, currencyB) {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB);
  } else if (currencyA instanceof Token) {
    return false;
  } else if (currencyB instanceof Token) {
    return false;
  } else {
    return currencyA === currencyB;
  }
} // In reality this is a map of the wrapped version of the native token for a given network.
// TODO: Rename to WNATIVE for sanity

var WETH = (_WETH = {}, _WETH[ChainId.MAINNET] = /*#__PURE__*/new Token(ChainId.MAINNET, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'Wrapped Ether'), _WETH[ChainId.ROPSTEN] = /*#__PURE__*/new Token(ChainId.ROPSTEN, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH', 'Wrapped Ether'), _WETH[ChainId.RINKEBY] = /*#__PURE__*/new Token(ChainId.RINKEBY, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH', 'Wrapped Ether'), _WETH[ChainId.GÖRLI] = /*#__PURE__*/new Token(ChainId.GÖRLI, '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', 18, 'WETH', 'Wrapped Ether'), _WETH[ChainId.KOVAN] = /*#__PURE__*/new Token(ChainId.KOVAN, '0xd0A1E359811322d97991E03f863a0C30C2cF029C', 18, 'WETH', 'Wrapped Ether'), _WETH[ChainId.FANTOM] = /*#__PURE__*/new Token(ChainId.FANTOM, '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83', 18, 'WFTM', 'Wrapped FTM'), _WETH[ChainId.FANTOM_TESTNET] = /*#__PURE__*/new Token(ChainId.FANTOM_TESTNET, '0xf1277d1Ed8AD466beddF92ef448A132661956621', 18, 'FTM', 'Wrapped FTM'), _WETH[ChainId.MATIC] = /*#__PURE__*/new Token(ChainId.MATIC, '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', 18, 'WMATIC', 'Wrapped Matic'), _WETH[ChainId.MATIC_TESTNET] = /*#__PURE__*/new Token(ChainId.MATIC_TESTNET, '0x5B67676a984807a212b1c59eBFc9B3568a474F0a', 18, 'WMATIC', 'Wrapped Matic'), _WETH[ChainId.XDAI] = /*#__PURE__*/new Token(ChainId.XDAI, '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d', 18, 'WXDAI', 'Wrapped xDai'), _WETH[ChainId.BSC] = /*#__PURE__*/new Token(ChainId.BSC, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB'), _WETH[ChainId.BSC_TESTNET] = /*#__PURE__*/new Token(ChainId.BSC_TESTNET, '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', 18, 'WBNB', 'Wrapped BNB'), _WETH[ChainId.ARBITRUM] = /*#__PURE__*/new Token(ChainId.ARBITRUM, '0xf8456e5e6A225C2C1D74D8C9a4cB2B1d5dc1153b', 18, 'WETH', 'Wrapped Ether'), _WETH[ChainId.MOONBASE] = /*#__PURE__*/new Token(ChainId.MOONBASE, '0xe73763DB808ecCDC0E36bC8E32510ED126910394', 18, 'WETH', 'Wrapped Ether'), _WETH[ChainId.AVALANCHE] = /*#__PURE__*/new Token(ChainId.AVALANCHE, '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', 18, 'WAVAX', 'Wrapped AVAX'), _WETH[ChainId.FUJI] = /*#__PURE__*/new Token(ChainId.FUJI, '0xd00ae08403B9bbb9124bB305C09058E32C39A48c', 18, 'WAVAX', 'Wrapped AVAX'), _WETH[ChainId.HECO] = /*#__PURE__*/new Token(ChainId.HECO, '0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F', 18, 'WHT', 'Wrapped HT'), _WETH[ChainId.HECO_TESTNET] = /*#__PURE__*/new Token(ChainId.HECO_TESTNET, '0x5B2DA6F42CA09C77D577a12BeaD0446148830687', 18, 'WHT', 'Wrapped HT'), _WETH[ChainId.HARMONY] = /*#__PURE__*/new Token(ChainId.HARMONY, '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a', 18, 'WONE', 'Wrapped ONE'), _WETH[ChainId.HARMONY_TESTNET] = /*#__PURE__*/new Token(ChainId.HARMONY_TESTNET, '0x7a2afac38517d512E55C0bCe3b6805c10a04D60F', 18, 'WONE', 'Wrapped ONE'), _WETH[ChainId.OKEX] = /*#__PURE__*/new Token(ChainId.OKEX, '0x8F8526dbfd6E38E3D8307702cA8469Bae6C56C15', 18, 'WOKT', 'Wrapped OKExChain'), _WETH[ChainId.OKEX_TESTNET] = /*#__PURE__*/new Token(ChainId.OKEX_TESTNET, '0x2219845942d28716c0F7C605765fABDcA1a7d9E0', 18, 'WOKT', 'Wrapped OKExChain'), _WETH[ChainId.DUSTY] = /*#__PURE__*/new Token(ChainId.DUSTY, '0xd3435b369d25e7DFcbdf7371B23DBa8bbb734d49', 18, 'WPLD', 'Wrapped PLD'), _WETH[ChainId.SHIBUYA] = /*#__PURE__*/new Token(ChainId.SHIBUYA, '0x04efa209F9e74E612a529c393Cf9F1141E696F06', 18, 'WSBY', 'Wrapped SBY'), _WETH[ChainId.SHIDEN] = /*#__PURE__*/new Token(ChainId.SHIDEN, '0x0f933Dc137D21cA519ae4C7E93f87a4C8EF365Ef', 18, 'WSDN', 'Wrapped SDN'), _WETH[ChainId.ASTR] = /*#__PURE__*/new Token(ChainId.ASTR, '0x0f933Dc137D21cA519ae4C7E93f87a4C8EF365Ef', 18, 'WASTR', 'Wrapped ASTR'), _WETH);

var _toSignificantRoundin, _toFixedRounding;
var Decimal = /*#__PURE__*/toFormat(_Decimal);
var Big = /*#__PURE__*/toFormat(_Big);
var toSignificantRounding = (_toSignificantRoundin = {}, _toSignificantRoundin[Rounding.ROUND_DOWN] = Decimal.ROUND_DOWN, _toSignificantRoundin[Rounding.ROUND_HALF_UP] = Decimal.ROUND_HALF_UP, _toSignificantRoundin[Rounding.ROUND_UP] = Decimal.ROUND_UP, _toSignificantRoundin);
var toFixedRounding = (_toFixedRounding = {}, _toFixedRounding[Rounding.ROUND_DOWN] = 0, _toFixedRounding[Rounding.ROUND_HALF_UP] = 1, _toFixedRounding[Rounding.ROUND_UP] = 3, _toFixedRounding);
var Fraction = /*#__PURE__*/function () {
  function Fraction(numerator, denominator) {
    if (denominator === void 0) {
      denominator = ONE;
    }

    this.numerator = parseBigintIsh(numerator);
    this.denominator = parseBigintIsh(denominator);
  } // performs floor division


  var _proto = Fraction.prototype;

  _proto.invert = function invert() {
    return new Fraction(this.denominator, this.numerator);
  };

  _proto.add = function add(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));

    if (JSBI.equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(JSBI.add(this.numerator, otherParsed.numerator), this.denominator);
    }

    return new Fraction(JSBI.add(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator)), JSBI.multiply(this.denominator, otherParsed.denominator));
  };

  _proto.subtract = function subtract(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));

    if (JSBI.equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(JSBI.subtract(this.numerator, otherParsed.numerator), this.denominator);
    }

    return new Fraction(JSBI.subtract(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator)), JSBI.multiply(this.denominator, otherParsed.denominator));
  };

  _proto.lessThan = function lessThan(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return JSBI.lessThan(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
  };

  _proto.equalTo = function equalTo(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return JSBI.equal(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
  };

  _proto.greaterThan = function greaterThan(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return JSBI.greaterThan(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
  };

  _proto.multiply = function multiply(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return new Fraction(JSBI.multiply(this.numerator, otherParsed.numerator), JSBI.multiply(this.denominator, otherParsed.denominator));
  };

  _proto.divide = function divide(other) {
    var otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return new Fraction(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(this.denominator, otherParsed.numerator));
  };

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }

    if (rounding === void 0) {
      rounding = Rounding.ROUND_HALF_UP;
    }

    !Number.isInteger(significantDigits) ? process.env.NODE_ENV !== "production" ? invariant(false, significantDigits + " is not an integer.") : invariant(false) : void 0;
    !(significantDigits > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, significantDigits + " is not positive.") : invariant(false) : void 0;
    Decimal.set({
      precision: significantDigits + 1,
      rounding: toSignificantRounding[rounding]
    });
    var quotient = new Decimal(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(significantDigits);
    return quotient.toFormat(quotient.decimalPlaces(), format);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }

    if (rounding === void 0) {
      rounding = Rounding.ROUND_HALF_UP;
    }

    !Number.isInteger(decimalPlaces) ? process.env.NODE_ENV !== "production" ? invariant(false, decimalPlaces + " is not an integer.") : invariant(false) : void 0;
    !(decimalPlaces >= 0) ? process.env.NODE_ENV !== "production" ? invariant(false, decimalPlaces + " is negative.") : invariant(false) : void 0;
    Big.DP = decimalPlaces;
    Big.RM = toFixedRounding[rounding];
    return new Big(this.numerator.toString()).div(this.denominator.toString()).toFormat(decimalPlaces, format);
  };

  _createClass(Fraction, [{
    key: "quotient",
    get: function get() {
      return JSBI.divide(this.numerator, this.denominator);
    } // remainder after floor division

  }, {
    key: "remainder",
    get: function get() {
      return new Fraction(JSBI.remainder(this.numerator, this.denominator), this.denominator);
    }
  }]);

  return Fraction;
}();

var Big$1 = /*#__PURE__*/toFormat(_Big);
var CurrencyAmount = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(CurrencyAmount, _Fraction);

  // amount _must_ be raw, i.e. in the native representation
  function CurrencyAmount(currency, amount) {
    var _this;

    var parsedAmount = parseBigintIsh(amount);
    validateSolidityTypeInstance(parsedAmount, SolidityType.uint256);
    _this = _Fraction.call(this, parsedAmount, JSBI.exponentiate(TEN, JSBI.BigInt(currency.decimals))) || this;
    _this.currency = currency;
    return _this;
  }
  /**
   * Helper that calls the constructor with the ETHER currency
   * @param amount ether amount in wei
   */


  CurrencyAmount.ether = function ether(amount) {
    return new CurrencyAmount(ETHER, amount);
  };

  var _proto = CurrencyAmount.prototype;

  _proto.add = function add(other) {
    !currencyEquals(this.currency, other.currency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    return new CurrencyAmount(this.currency, JSBI.add(this.raw, other.raw));
  };

  _proto.subtract = function subtract(other) {
    !currencyEquals(this.currency, other.currency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    return new CurrencyAmount(this.currency, JSBI.subtract(this.raw, other.raw));
  };

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 6;
    }

    if (rounding === void 0) {
      rounding = Rounding.ROUND_DOWN;
    }

    return _Fraction.prototype.toSignificant.call(this, significantDigits, format, rounding);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = this.currency.decimals;
    }

    if (rounding === void 0) {
      rounding = Rounding.ROUND_DOWN;
    }

    !(decimalPlaces <= this.currency.decimals) ? process.env.NODE_ENV !== "production" ? invariant(false, 'DECIMALS') : invariant(false) : void 0;
    return _Fraction.prototype.toFixed.call(this, decimalPlaces, format, rounding);
  };

  _proto.toExact = function toExact(format) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }

    Big$1.DP = this.currency.decimals;
    return new Big$1(this.numerator.toString()).div(this.denominator.toString()).toFormat(format);
  };

  _createClass(CurrencyAmount, [{
    key: "raw",
    get: function get() {
      return this.numerator;
    }
  }]);

  return CurrencyAmount;
}(Fraction);

var TokenAmount = /*#__PURE__*/function (_CurrencyAmount) {
  _inheritsLoose(TokenAmount, _CurrencyAmount);

  // amount _must_ be raw, i.e. in the native representation
  function TokenAmount(token, amount) {
    var _this;

    _this = _CurrencyAmount.call(this, token, amount) || this;
    _this.token = token;
    return _this;
  }

  var _proto = TokenAmount.prototype;

  _proto.add = function add(other) {
    !this.token.equals(other.token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    return new TokenAmount(this.token, JSBI.add(this.raw, other.raw));
  };

  _proto.subtract = function subtract(other) {
    !this.token.equals(other.token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    return new TokenAmount(this.token, JSBI.subtract(this.raw, other.raw));
  };

  return TokenAmount;
}(CurrencyAmount);

var Price = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(Price, _Fraction);

  // denominator and numerator _must_ be raw, i.e. in the native representation
  function Price(baseCurrency, quoteCurrency, denominator, numerator) {
    var _this;

    _this = _Fraction.call(this, numerator, denominator) || this;
    _this.baseCurrency = baseCurrency;
    _this.quoteCurrency = quoteCurrency;
    _this.scalar = new Fraction(JSBI.exponentiate(TEN, JSBI.BigInt(baseCurrency.decimals)), JSBI.exponentiate(TEN, JSBI.BigInt(quoteCurrency.decimals)));
    return _this;
  }

  Price.fromRoute = function fromRoute(route) {
    var prices = [];

    for (var _iterator = _createForOfIteratorHelperLoose(route.pairs.entries()), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
          i = _step$value[0],
          pair = _step$value[1];
      prices.push(route.path[i].equals(pair.token0) ? new Price(pair.reserve0.currency, pair.reserve1.currency, pair.reserve0.raw, pair.reserve1.raw) : new Price(pair.reserve1.currency, pair.reserve0.currency, pair.reserve1.raw, pair.reserve0.raw));
    }

    return prices.slice(1).reduce(function (accumulator, currentValue) {
      return accumulator.multiply(currentValue);
    }, prices[0]);
  };

  var _proto = Price.prototype;

  _proto.invert = function invert() {
    return new Price(this.quoteCurrency, this.baseCurrency, this.numerator, this.denominator);
  };

  _proto.multiply = function multiply(other) {
    !currencyEquals(this.quoteCurrency, other.baseCurrency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;

    var fraction = _Fraction.prototype.multiply.call(this, other);

    return new Price(this.baseCurrency, other.quoteCurrency, fraction.denominator, fraction.numerator);
  } // performs floor division on overflow
  ;

  _proto.quote = function quote(currencyAmount) {
    !currencyEquals(currencyAmount.currency, this.baseCurrency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;

    if (this.quoteCurrency instanceof Token) {
      return new TokenAmount(this.quoteCurrency, _Fraction.prototype.multiply.call(this, currencyAmount.raw).quotient);
    }

    return CurrencyAmount.ether(_Fraction.prototype.multiply.call(this, currencyAmount.raw).quotient);
  };

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 6;
    }

    return this.adjusted.toSignificant(significantDigits, format, rounding);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = 4;
    }

    return this.adjusted.toFixed(decimalPlaces, format, rounding);
  };

  _createClass(Price, [{
    key: "raw",
    get: function get() {
      return new Fraction(this.numerator, this.denominator);
    }
  }, {
    key: "adjusted",
    get: function get() {
      return _Fraction.prototype.multiply.call(this, this.scalar);
    }
  }]);

  return Price;
}(Fraction);

var PAIR_ADDRESS_CACHE = {};
var Pair = /*#__PURE__*/function () {
  function Pair(tokenAmountA, tokenAmountB) {
    var tokenAmounts = tokenAmountA.token.sortsBefore(tokenAmountB.token) // does safety checks
    ? [tokenAmountA, tokenAmountB] : [tokenAmountB, tokenAmountA];
    this.liquidityToken = new Token(tokenAmounts[0].token.chainId, Pair.getAddress(tokenAmounts[0].token, tokenAmounts[1].token), 18, 'UNI-V2', 'Uniswap V2');
    this.tokenAmounts = tokenAmounts;
  }

  Pair.getAddress = function getAddress(tokenA, tokenB) {
    var _PAIR_ADDRESS_CACHE, _PAIR_ADDRESS_CACHE$t;

    var tokens = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA]; // does safety checks

    if (((_PAIR_ADDRESS_CACHE = PAIR_ADDRESS_CACHE) === null || _PAIR_ADDRESS_CACHE === void 0 ? void 0 : (_PAIR_ADDRESS_CACHE$t = _PAIR_ADDRESS_CACHE[tokens[0].address]) === null || _PAIR_ADDRESS_CACHE$t === void 0 ? void 0 : _PAIR_ADDRESS_CACHE$t[tokens[1].address]) === undefined) {
      var _PAIR_ADDRESS_CACHE2, _extends2, _extends3;

      PAIR_ADDRESS_CACHE = _extends({}, PAIR_ADDRESS_CACHE, (_extends3 = {}, _extends3[tokens[0].address] = _extends({}, (_PAIR_ADDRESS_CACHE2 = PAIR_ADDRESS_CACHE) === null || _PAIR_ADDRESS_CACHE2 === void 0 ? void 0 : _PAIR_ADDRESS_CACHE2[tokens[0].address], (_extends2 = {}, _extends2[tokens[1].address] = getCreate2Address(FACTORY_ADDRESS[tokenA.chainId], keccak256(['bytes'], [pack(['address', 'address'], [tokens[0].address, tokens[1].address])]), INIT_CODE_HASH), _extends2)), _extends3));
    }

    return PAIR_ADDRESS_CACHE[tokens[0].address][tokens[1].address];
  }
  /**
   * Returns true if the token is either token0 or token1
   * @param token to check
   */
  ;

  var _proto = Pair.prototype;

  _proto.involvesToken = function involvesToken(token) {
    return token.equals(this.token0) || token.equals(this.token1);
  }
  /**
   * Returns the current mid price of the pair in terms of token0, i.e. the ratio of reserve1 to reserve0
   */
  ;

  /**
   * Return the price of the given token in terms of the other token in the pair.
   * @param token token to return price of
   */
  _proto.priceOf = function priceOf(token) {
    !this.involvesToken(token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    return token.equals(this.token0) ? this.token0Price : this.token1Price;
  }
  /**
   * Returns the chain ID of the tokens in the pair.
   */
  ;

  _proto.reserveOf = function reserveOf(token) {
    !this.involvesToken(token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    return token.equals(this.token0) ? this.reserve0 : this.reserve1;
  };

  _proto.getOutputAmount = function getOutputAmount(inputAmount) {
    !this.involvesToken(inputAmount.token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;

    if (JSBI.equal(this.reserve0.raw, ZERO) || JSBI.equal(this.reserve1.raw, ZERO)) {
      throw new InsufficientReservesError();
    }

    var inputReserve = this.reserveOf(inputAmount.token);
    var outputReserve = this.reserveOf(inputAmount.token.equals(this.token0) ? this.token1 : this.token0);
    var inputAmountWithFee = JSBI.multiply(inputAmount.raw, _997);
    var numerator = JSBI.multiply(inputAmountWithFee, outputReserve.raw);
    var denominator = JSBI.add(JSBI.multiply(inputReserve.raw, _1000), inputAmountWithFee);
    var outputAmount = new TokenAmount(inputAmount.token.equals(this.token0) ? this.token1 : this.token0, JSBI.divide(numerator, denominator));

    if (JSBI.equal(outputAmount.raw, ZERO)) {
      throw new InsufficientInputAmountError();
    }

    return [outputAmount, new Pair(inputReserve.add(inputAmount), outputReserve.subtract(outputAmount))];
  };

  _proto.getInputAmount = function getInputAmount(outputAmount) {
    !this.involvesToken(outputAmount.token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;

    if (JSBI.equal(this.reserve0.raw, ZERO) || JSBI.equal(this.reserve1.raw, ZERO) || JSBI.greaterThanOrEqual(outputAmount.raw, this.reserveOf(outputAmount.token).raw)) {
      throw new InsufficientReservesError();
    }

    var outputReserve = this.reserveOf(outputAmount.token);
    var inputReserve = this.reserveOf(outputAmount.token.equals(this.token0) ? this.token1 : this.token0);
    var numerator = JSBI.multiply(JSBI.multiply(inputReserve.raw, outputAmount.raw), _1000);
    var denominator = JSBI.multiply(JSBI.subtract(outputReserve.raw, outputAmount.raw), _997);
    var inputAmount = new TokenAmount(outputAmount.token.equals(this.token0) ? this.token1 : this.token0, JSBI.add(JSBI.divide(numerator, denominator), ONE));
    return [inputAmount, new Pair(inputReserve.add(inputAmount), outputReserve.subtract(outputAmount))];
  };

  _proto.getLiquidityMinted = function getLiquidityMinted(totalSupply, tokenAmountA, tokenAmountB) {
    !totalSupply.token.equals(this.liquidityToken) ? process.env.NODE_ENV !== "production" ? invariant(false, 'LIQUIDITY') : invariant(false) : void 0;
    var tokenAmounts = tokenAmountA.token.sortsBefore(tokenAmountB.token) // does safety checks
    ? [tokenAmountA, tokenAmountB] : [tokenAmountB, tokenAmountA];
    !(tokenAmounts[0].token.equals(this.token0) && tokenAmounts[1].token.equals(this.token1)) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    var liquidity;

    if (JSBI.equal(totalSupply.raw, ZERO)) {
      liquidity = JSBI.subtract(sqrt(JSBI.multiply(tokenAmounts[0].raw, tokenAmounts[1].raw)), MINIMUM_LIQUIDITY);
    } else {
      var amount0 = JSBI.divide(JSBI.multiply(tokenAmounts[0].raw, totalSupply.raw), this.reserve0.raw);
      var amount1 = JSBI.divide(JSBI.multiply(tokenAmounts[1].raw, totalSupply.raw), this.reserve1.raw);
      liquidity = JSBI.lessThanOrEqual(amount0, amount1) ? amount0 : amount1;
    }

    if (!JSBI.greaterThan(liquidity, ZERO)) {
      throw new InsufficientInputAmountError();
    }

    return new TokenAmount(this.liquidityToken, liquidity);
  };

  _proto.getLiquidityValue = function getLiquidityValue(token, totalSupply, liquidity, feeOn, kLast) {
    if (feeOn === void 0) {
      feeOn = false;
    }

    !this.involvesToken(token) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOKEN') : invariant(false) : void 0;
    !totalSupply.token.equals(this.liquidityToken) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TOTAL_SUPPLY') : invariant(false) : void 0;
    !liquidity.token.equals(this.liquidityToken) ? process.env.NODE_ENV !== "production" ? invariant(false, 'LIQUIDITY') : invariant(false) : void 0;
    !JSBI.lessThanOrEqual(liquidity.raw, totalSupply.raw) ? process.env.NODE_ENV !== "production" ? invariant(false, 'LIQUIDITY') : invariant(false) : void 0;
    var totalSupplyAdjusted;

    if (!feeOn) {
      totalSupplyAdjusted = totalSupply;
    } else {
      !!!kLast ? process.env.NODE_ENV !== "production" ? invariant(false, 'K_LAST') : invariant(false) : void 0;
      var kLastParsed = parseBigintIsh(kLast);

      if (!JSBI.equal(kLastParsed, ZERO)) {
        var rootK = sqrt(JSBI.multiply(this.reserve0.raw, this.reserve1.raw));
        var rootKLast = sqrt(kLastParsed);

        if (JSBI.greaterThan(rootK, rootKLast)) {
          var numerator = JSBI.multiply(totalSupply.raw, JSBI.subtract(rootK, rootKLast));
          var denominator = JSBI.add(JSBI.multiply(rootK, FIVE), rootKLast);
          var feeLiquidity = JSBI.divide(numerator, denominator);
          totalSupplyAdjusted = totalSupply.add(new TokenAmount(this.liquidityToken, feeLiquidity));
        } else {
          totalSupplyAdjusted = totalSupply;
        }
      } else {
        totalSupplyAdjusted = totalSupply;
      }
    }

    return new TokenAmount(token, JSBI.divide(JSBI.multiply(liquidity.raw, this.reserveOf(token).raw), totalSupplyAdjusted.raw));
  };

  _createClass(Pair, [{
    key: "token0Price",
    get: function get() {
      return new Price(this.token0, this.token1, this.tokenAmounts[0].raw, this.tokenAmounts[1].raw);
    }
    /**
     * Returns the current mid price of the pair in terms of token1, i.e. the ratio of reserve0 to reserve1
     */

  }, {
    key: "token1Price",
    get: function get() {
      return new Price(this.token1, this.token0, this.tokenAmounts[1].raw, this.tokenAmounts[0].raw);
    }
  }, {
    key: "chainId",
    get: function get() {
      return this.token0.chainId;
    }
  }, {
    key: "token0",
    get: function get() {
      return this.tokenAmounts[0].token;
    }
  }, {
    key: "token1",
    get: function get() {
      return this.tokenAmounts[1].token;
    }
  }, {
    key: "reserve0",
    get: function get() {
      return this.tokenAmounts[0];
    }
  }, {
    key: "reserve1",
    get: function get() {
      return this.tokenAmounts[1];
    }
  }]);

  return Pair;
}();
var PANCAKE_V1_PAIR_ADDRESS_CACHE = {};
var PancakeV1Pair = /*#__PURE__*/function (_Pair) {
  _inheritsLoose(PancakeV1Pair, _Pair);

  function PancakeV1Pair() {
    return _Pair.apply(this, arguments) || this;
  }

  PancakeV1Pair.getAddress = function getAddress(tokenA, tokenB) {
    var _PANCAKE_V1_PAIR_ADDR, _PANCAKE_V1_PAIR_ADDR2;

    var tokens = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA]; // does safety checks

    if (((_PANCAKE_V1_PAIR_ADDR = PANCAKE_V1_PAIR_ADDRESS_CACHE) === null || _PANCAKE_V1_PAIR_ADDR === void 0 ? void 0 : (_PANCAKE_V1_PAIR_ADDR2 = _PANCAKE_V1_PAIR_ADDR[tokens[0].address]) === null || _PANCAKE_V1_PAIR_ADDR2 === void 0 ? void 0 : _PANCAKE_V1_PAIR_ADDR2[tokens[1].address]) === undefined) {
      var _PANCAKE_V1_PAIR_ADDR3, _extends4, _extends5;

      PANCAKE_V1_PAIR_ADDRESS_CACHE = _extends({}, PANCAKE_V1_PAIR_ADDRESS_CACHE, (_extends5 = {}, _extends5[tokens[0].address] = _extends({}, (_PANCAKE_V1_PAIR_ADDR3 = PANCAKE_V1_PAIR_ADDRESS_CACHE) === null || _PANCAKE_V1_PAIR_ADDR3 === void 0 ? void 0 : _PANCAKE_V1_PAIR_ADDR3[tokens[0].address], (_extends4 = {}, _extends4[tokens[1].address] = getCreate2Address('0xBCfCcbde45cE874adCB698cC183deBcF17952812', keccak256(['bytes'], [pack(['address', 'address'], [tokens[0].address, tokens[1].address])]), '0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66'), _extends4)), _extends5));
    }

    return PANCAKE_V1_PAIR_ADDRESS_CACHE[tokens[0].address][tokens[1].address];
  };

  return PancakeV1Pair;
}(Pair);
var PANCAKE_V2_PAIR_ADDRESS_CACHE = {};
var PancakeV2Pair = /*#__PURE__*/function (_PancakeV1Pair) {
  _inheritsLoose(PancakeV2Pair, _PancakeV1Pair);

  function PancakeV2Pair() {
    return _PancakeV1Pair.apply(this, arguments) || this;
  }

  PancakeV2Pair.getAddress = function getAddress(tokenA, tokenB) {
    var _PANCAKE_V2_PAIR_ADDR, _PANCAKE_V2_PAIR_ADDR2;

    var tokens = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA]; // does safety checks

    if (((_PANCAKE_V2_PAIR_ADDR = PANCAKE_V2_PAIR_ADDRESS_CACHE) === null || _PANCAKE_V2_PAIR_ADDR === void 0 ? void 0 : (_PANCAKE_V2_PAIR_ADDR2 = _PANCAKE_V2_PAIR_ADDR[tokens[0].address]) === null || _PANCAKE_V2_PAIR_ADDR2 === void 0 ? void 0 : _PANCAKE_V2_PAIR_ADDR2[tokens[1].address]) === undefined) {
      var _PANCAKE_V2_PAIR_ADDR3, _extends6, _extends7;

      PANCAKE_V2_PAIR_ADDRESS_CACHE = _extends({}, PANCAKE_V2_PAIR_ADDRESS_CACHE, (_extends7 = {}, _extends7[tokens[0].address] = _extends({}, (_PANCAKE_V2_PAIR_ADDR3 = PANCAKE_V2_PAIR_ADDRESS_CACHE) === null || _PANCAKE_V2_PAIR_ADDR3 === void 0 ? void 0 : _PANCAKE_V2_PAIR_ADDR3[tokens[0].address], (_extends6 = {}, _extends6[tokens[1].address] = getCreate2Address('0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73', keccak256(['bytes'], [pack(['address', 'address'], [tokens[0].address, tokens[1].address])]), '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5'), _extends6)), _extends7));
    }

    return PANCAKE_V2_PAIR_ADDRESS_CACHE[tokens[0].address][tokens[1].address];
  };

  return PancakeV2Pair;
}(PancakeV1Pair);

var Route = /*#__PURE__*/function () {
  function Route(pairs, input, output) {
    !(pairs.length > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'PAIRS') : invariant(false) : void 0;
    !pairs.every(function (pair) {
      return pair.chainId === pairs[0].chainId;
    }) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CHAIN_IDS') : invariant(false) : void 0;
    !(input instanceof Token && pairs[0].involvesToken(input) || input === ETHER && pairs[0].involvesToken(WETH[pairs[0].chainId])) ? process.env.NODE_ENV !== "production" ? invariant(false, 'INPUT') : invariant(false) : void 0;
    !(typeof output === 'undefined' || output instanceof Token && pairs[pairs.length - 1].involvesToken(output) || output === ETHER && pairs[pairs.length - 1].involvesToken(WETH[pairs[0].chainId])) ? process.env.NODE_ENV !== "production" ? invariant(false, 'OUTPUT') : invariant(false) : void 0;
    var path = [input instanceof Token ? input : WETH[pairs[0].chainId]];

    for (var _iterator = _createForOfIteratorHelperLoose(pairs.entries()), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
          i = _step$value[0],
          pair = _step$value[1];
      var currentInput = path[i];
      !(currentInput.equals(pair.token0) || currentInput.equals(pair.token1)) ? process.env.NODE_ENV !== "production" ? invariant(false, 'PATH') : invariant(false) : void 0;

      var _output = currentInput.equals(pair.token0) ? pair.token1 : pair.token0;

      path.push(_output);
    }

    this.pairs = pairs;
    this.path = path;
    this.midPrice = Price.fromRoute(this);
    this.input = input;
    this.output = output !== null && output !== void 0 ? output : path[path.length - 1];
  }

  _createClass(Route, [{
    key: "chainId",
    get: function get() {
      return this.pairs[0].chainId;
    }
  }]);

  return Route;
}();

var _100_PERCENT = /*#__PURE__*/new Fraction(_100);

var Percent = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(Percent, _Fraction);

  function Percent() {
    return _Fraction.apply(this, arguments) || this;
  }

  var _proto = Percent.prototype;

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 5;
    }

    return this.multiply(_100_PERCENT).toSignificant(significantDigits, format, rounding);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = 2;
    }

    return this.multiply(_100_PERCENT).toFixed(decimalPlaces, format, rounding);
  };

  return Percent;
}(Fraction);

/**
 * Returns the percent difference between the mid price and the execution price, i.e. price impact.
 * @param midPrice mid price before the trade
 * @param inputAmount the input amount of the trade
 * @param outputAmount the output amount of the trade
 */

function computePriceImpact(midPrice, inputAmount, outputAmount) {
  var exactQuote = midPrice.raw.multiply(inputAmount.raw); // calculate slippage := (exactQuote - outputAmount) / exactQuote

  var slippage = exactQuote.subtract(outputAmount.raw).divide(exactQuote);
  return new Percent(slippage.numerator, slippage.denominator);
} // comparator function that allows sorting trades by their output amounts, in decreasing order, and then input amounts
// in increasing order. i.e. the best trades have the most outputs for the least inputs and are sorted first


function inputOutputComparator(a, b) {
  // must have same input and output token for comparison
  !currencyEquals(a.inputAmount.currency, b.inputAmount.currency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'INPUT_CURRENCY') : invariant(false) : void 0;
  !currencyEquals(a.outputAmount.currency, b.outputAmount.currency) ? process.env.NODE_ENV !== "production" ? invariant(false, 'OUTPUT_CURRENCY') : invariant(false) : void 0;

  if (a.outputAmount.equalTo(b.outputAmount)) {
    if (a.inputAmount.equalTo(b.inputAmount)) {
      return 0;
    } // trade A requires less input than trade B, so A should come first


    if (a.inputAmount.lessThan(b.inputAmount)) {
      return -1;
    } else {
      return 1;
    }
  } else {
    // tradeA has less output than trade B, so should come second
    if (a.outputAmount.lessThan(b.outputAmount)) {
      return 1;
    } else {
      return -1;
    }
  }
} // extension of the input output comparator that also considers other dimensions of the trade in ranking them

function tradeComparator(a, b) {
  var ioComp = inputOutputComparator(a, b);

  if (ioComp !== 0) {
    return ioComp;
  } // consider lowest slippage next, since these are less likely to fail


  if (a.priceImpact.lessThan(b.priceImpact)) {
    return -1;
  } else if (a.priceImpact.greaterThan(b.priceImpact)) {
    return 1;
  } // finally consider the number of hops since each hop costs gas


  return a.route.path.length - b.route.path.length;
}
/**
 * Given a currency amount and a chain ID, returns the equivalent representation as the token amount.
 * In other words, if the currency is ETHER, returns the WETH token amount for the given chain. Otherwise, returns
 * the input currency amount.
 */

function wrappedAmount(currencyAmount, chainId) {
  if (currencyAmount instanceof TokenAmount) return currencyAmount;
  if (currencyAmount.currency === ETHER) return new TokenAmount(WETH[chainId], currencyAmount.raw);
   process.env.NODE_ENV !== "production" ? invariant(false, 'CURRENCY') : invariant(false) ;
}

function wrappedCurrency(currency, chainId) {
  if (currency instanceof Token) return currency;
  if (currency === ETHER) return WETH[chainId];
   process.env.NODE_ENV !== "production" ? invariant(false, 'CURRENCY') : invariant(false) ;
}
/**
 * Represents a trade executed against a list of pairs.
 * Does not account for slippage, i.e. trades that front run this trade and move the price.
 */


var Trade = /*#__PURE__*/function () {
  function Trade(route, amount, tradeType) {
    var amounts = new Array(route.path.length);
    var nextPairs = new Array(route.pairs.length);

    if (tradeType === TradeType.EXACT_INPUT) {
      !currencyEquals(amount.currency, route.input) ? process.env.NODE_ENV !== "production" ? invariant(false, 'INPUT') : invariant(false) : void 0;
      amounts[0] = wrappedAmount(amount, route.chainId);

      for (var i = 0; i < route.path.length - 1; i++) {
        var pair = route.pairs[i];

        var _pair$getOutputAmount = pair.getOutputAmount(amounts[i]),
            outputAmount = _pair$getOutputAmount[0],
            nextPair = _pair$getOutputAmount[1];

        amounts[i + 1] = outputAmount;
        nextPairs[i] = nextPair;
      }
    } else {
      !currencyEquals(amount.currency, route.output) ? process.env.NODE_ENV !== "production" ? invariant(false, 'OUTPUT') : invariant(false) : void 0;
      amounts[amounts.length - 1] = wrappedAmount(amount, route.chainId);

      for (var _i = route.path.length - 1; _i > 0; _i--) {
        var _pair = route.pairs[_i - 1];

        var _pair$getInputAmount = _pair.getInputAmount(amounts[_i]),
            inputAmount = _pair$getInputAmount[0],
            _nextPair = _pair$getInputAmount[1];

        amounts[_i - 1] = inputAmount;
        nextPairs[_i - 1] = _nextPair;
      }
    }

    this.route = route;
    this.tradeType = tradeType;
    this.inputAmount = tradeType === TradeType.EXACT_INPUT ? amount : route.input === ETHER ? CurrencyAmount.ether(amounts[0].raw) : amounts[0];
    this.outputAmount = tradeType === TradeType.EXACT_OUTPUT ? amount : route.output === ETHER ? CurrencyAmount.ether(amounts[amounts.length - 1].raw) : amounts[amounts.length - 1];
    this.executionPrice = new Price(this.inputAmount.currency, this.outputAmount.currency, this.inputAmount.raw, this.outputAmount.raw);
    this.nextMidPrice = Price.fromRoute(new Route(nextPairs, route.input));
    this.priceImpact = computePriceImpact(route.midPrice, this.inputAmount, this.outputAmount);
  }
  /**
   * Constructs an exact in trade with the given amount in and route
   * @param route route of the exact in trade
   * @param amountIn the amount being passed in
   */


  Trade.exactIn = function exactIn(route, amountIn) {
    return new Trade(route, amountIn, TradeType.EXACT_INPUT);
  }
  /**
   * Constructs an exact out trade with the given amount out and route
   * @param route route of the exact out trade
   * @param amountOut the amount returned by the trade
   */
  ;

  Trade.exactOut = function exactOut(route, amountOut) {
    return new Trade(route, amountOut, TradeType.EXACT_OUTPUT);
  }
  /**
   * Get the minimum amount that must be received from this trade for the given slippage tolerance
   * @param slippageTolerance tolerance of unfavorable slippage from the execution price of this trade
   */
  ;

  var _proto = Trade.prototype;

  _proto.minimumAmountOut = function minimumAmountOut(slippageTolerance) {
    !!slippageTolerance.lessThan(ZERO) ? process.env.NODE_ENV !== "production" ? invariant(false, 'SLIPPAGE_TOLERANCE') : invariant(false) : void 0;

    if (this.tradeType === TradeType.EXACT_OUTPUT) {
      return this.outputAmount;
    } else {
      var slippageAdjustedAmountOut = new Fraction(ONE).add(slippageTolerance).invert().multiply(this.outputAmount.raw).quotient;
      return this.outputAmount instanceof TokenAmount ? new TokenAmount(this.outputAmount.token, slippageAdjustedAmountOut) : CurrencyAmount.ether(slippageAdjustedAmountOut);
    }
  }
  /**
   * Get the maximum amount in that can be spent via this trade for the given slippage tolerance
   * @param slippageTolerance tolerance of unfavorable slippage from the execution price of this trade
   */
  ;

  _proto.maximumAmountIn = function maximumAmountIn(slippageTolerance) {
    !!slippageTolerance.lessThan(ZERO) ? process.env.NODE_ENV !== "production" ? invariant(false, 'SLIPPAGE_TOLERANCE') : invariant(false) : void 0;

    if (this.tradeType === TradeType.EXACT_INPUT) {
      return this.inputAmount;
    } else {
      var slippageAdjustedAmountIn = new Fraction(ONE).add(slippageTolerance).multiply(this.inputAmount.raw).quotient;
      return this.inputAmount instanceof TokenAmount ? new TokenAmount(this.inputAmount.token, slippageAdjustedAmountIn) : CurrencyAmount.ether(slippageAdjustedAmountIn);
    }
  }
  /**
   * Given a list of pairs, and a fixed amount in, returns the top `maxNumResults` trades that go from an input token
   * amount to an output token, making at most `maxHops` hops.
   * Note this does not consider aggregation, as routes are linear. It's possible a better route exists by splitting
   * the amount in among multiple routes.
   * @param pairs the pairs to consider in finding the best trade
   * @param currencyAmountIn exact amount of input currency to spend
   * @param currencyOut the desired currency out
   * @param maxNumResults maximum number of results to return
   * @param maxHops maximum number of hops a returned trade can make, e.g. 1 hop goes through a single pair
   * @param currentPairs used in recursion; the current list of pairs
   * @param originalAmountIn used in recursion; the original value of the currencyAmountIn parameter
   * @param bestTrades used in recursion; the current list of best trades
   */
  ;

  Trade.bestTradeExactIn = function bestTradeExactIn(pairs, currencyAmountIn, currencyOut, _temp, // used in recursion.
  currentPairs, originalAmountIn, bestTrades) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$maxNumResults = _ref.maxNumResults,
        maxNumResults = _ref$maxNumResults === void 0 ? 3 : _ref$maxNumResults,
        _ref$maxHops = _ref.maxHops,
        maxHops = _ref$maxHops === void 0 ? 3 : _ref$maxHops;

    if (currentPairs === void 0) {
      currentPairs = [];
    }

    if (originalAmountIn === void 0) {
      originalAmountIn = currencyAmountIn;
    }

    if (bestTrades === void 0) {
      bestTrades = [];
    }

    !(pairs.length > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'PAIRS') : invariant(false) : void 0;
    !(maxHops > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'MAX_HOPS') : invariant(false) : void 0;
    !(originalAmountIn === currencyAmountIn || currentPairs.length > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'INVALID_RECURSION') : invariant(false) : void 0;
    var chainId = currencyAmountIn instanceof TokenAmount ? currencyAmountIn.token.chainId : currencyOut instanceof Token ? currencyOut.chainId : undefined;
    !(chainId !== undefined) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CHAIN_ID') : invariant(false) : void 0;
    var amountIn = wrappedAmount(currencyAmountIn, chainId);
    var tokenOut = wrappedCurrency(currencyOut, chainId);

    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i]; // pair irrelevant

      if (!pair.token0.equals(amountIn.token) && !pair.token1.equals(amountIn.token)) continue;
      if (pair.reserve0.equalTo(ZERO) || pair.reserve1.equalTo(ZERO)) continue;
      var amountOut = void 0;

      try {
        ;

        var _pair$getOutputAmount2 = pair.getOutputAmount(amountIn);

        amountOut = _pair$getOutputAmount2[0];
      } catch (error) {
        // input too low
        if (error.isInsufficientInputAmountError) {
          continue;
        }

        throw error;
      } // we have arrived at the output token, so this is the final trade of one of the paths


      if (amountOut.token.equals(tokenOut)) {
        sortedInsert(bestTrades, new Trade(new Route([].concat(currentPairs, [pair]), originalAmountIn.currency, currencyOut), originalAmountIn, TradeType.EXACT_INPUT), maxNumResults, tradeComparator);
      } else if (maxHops > 1 && pairs.length > 1) {
        var pairsExcludingThisPair = pairs.slice(0, i).concat(pairs.slice(i + 1, pairs.length)); // otherwise, consider all the other paths that lead from this token as long as we have not exceeded maxHops

        Trade.bestTradeExactIn(pairsExcludingThisPair, amountOut, currencyOut, {
          maxNumResults: maxNumResults,
          maxHops: maxHops - 1
        }, [].concat(currentPairs, [pair]), originalAmountIn, bestTrades);
      }
    }

    return bestTrades;
  }
  /**
   * similar to the above method but instead targets a fixed output amount
   * given a list of pairs, and a fixed amount out, returns the top `maxNumResults` trades that go from an input token
   * to an output token amount, making at most `maxHops` hops
   * note this does not consider aggregation, as routes are linear. it's possible a better route exists by splitting
   * the amount in among multiple routes.
   * @param pairs the pairs to consider in finding the best trade
   * @param currencyIn the currency to spend
   * @param currencyAmountOut the exact amount of currency out
   * @param maxNumResults maximum number of results to return
   * @param maxHops maximum number of hops a returned trade can make, e.g. 1 hop goes through a single pair
   * @param currentPairs used in recursion; the current list of pairs
   * @param originalAmountOut used in recursion; the original value of the currencyAmountOut parameter
   * @param bestTrades used in recursion; the current list of best trades
   */
  ;

  Trade.bestTradeExactOut = function bestTradeExactOut(pairs, currencyIn, currencyAmountOut, _temp2, // used in recursion.
  currentPairs, originalAmountOut, bestTrades) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$maxNumResults = _ref2.maxNumResults,
        maxNumResults = _ref2$maxNumResults === void 0 ? 3 : _ref2$maxNumResults,
        _ref2$maxHops = _ref2.maxHops,
        maxHops = _ref2$maxHops === void 0 ? 3 : _ref2$maxHops;

    if (currentPairs === void 0) {
      currentPairs = [];
    }

    if (originalAmountOut === void 0) {
      originalAmountOut = currencyAmountOut;
    }

    if (bestTrades === void 0) {
      bestTrades = [];
    }

    !(pairs.length > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'PAIRS') : invariant(false) : void 0;
    !(maxHops > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'MAX_HOPS') : invariant(false) : void 0;
    !(originalAmountOut === currencyAmountOut || currentPairs.length > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'INVALID_RECURSION') : invariant(false) : void 0;
    var chainId = currencyAmountOut instanceof TokenAmount ? currencyAmountOut.token.chainId : currencyIn instanceof Token ? currencyIn.chainId : undefined;
    !(chainId !== undefined) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CHAIN_ID') : invariant(false) : void 0;
    var amountOut = wrappedAmount(currencyAmountOut, chainId);
    var tokenIn = wrappedCurrency(currencyIn, chainId);

    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i]; // pair irrelevant

      if (!pair.token0.equals(amountOut.token) && !pair.token1.equals(amountOut.token)) continue;
      if (pair.reserve0.equalTo(ZERO) || pair.reserve1.equalTo(ZERO)) continue;
      var amountIn = void 0;

      try {
        ;

        var _pair$getInputAmount2 = pair.getInputAmount(amountOut);

        amountIn = _pair$getInputAmount2[0];
      } catch (error) {
        // not enough liquidity in this pair
        if (error.isInsufficientReservesError) {
          continue;
        }

        throw error;
      } // we have arrived at the input token, so this is the first trade of one of the paths


      if (amountIn.token.equals(tokenIn)) {
        sortedInsert(bestTrades, new Trade(new Route([pair].concat(currentPairs), currencyIn, originalAmountOut.currency), originalAmountOut, TradeType.EXACT_OUTPUT), maxNumResults, tradeComparator);
      } else if (maxHops > 1 && pairs.length > 1) {
        var pairsExcludingThisPair = pairs.slice(0, i).concat(pairs.slice(i + 1, pairs.length)); // otherwise, consider all the other paths that arrive at this token as long as we have not exceeded maxHops

        Trade.bestTradeExactOut(pairsExcludingThisPair, currencyIn, amountIn, {
          maxNumResults: maxNumResults,
          maxHops: maxHops - 1
        }, [pair].concat(currentPairs), originalAmountOut, bestTrades);
      }
    }

    return bestTrades;
  };

  return Trade;
}();

function toHex(currencyAmount) {
  return "0x" + currencyAmount.raw.toString(16);
}

var ZERO_HEX = '0x0';
/**
 * Represents the Uniswap V2 Router, and has static methods for helping execute trades.
 */

var Router = /*#__PURE__*/function () {
  /**
   * Cannot be constructed.
   */
  function Router() {}
  /**
   * Produces the on-chain method name to call and the hex encoded parameters to pass as arguments for a given trade.
   * @param trade to produce call parameters for
   * @param options options for the call parameters
   */


  Router.swapCallParameters = function swapCallParameters(trade, options) {
    var etherIn = trade.inputAmount.currency === ETHER;
    var etherOut = trade.outputAmount.currency === ETHER; // the router does not support both ether in and out

    !!(etherIn && etherOut) ? process.env.NODE_ENV !== "production" ? invariant(false, 'ETHER_IN_OUT') : invariant(false) : void 0;
    !(!('ttl' in options) || options.ttl > 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'TTL') : invariant(false) : void 0;
    var to = validateAndParseAddress(options.recipient);
    var amountIn = toHex(trade.maximumAmountIn(options.allowedSlippage));
    var amountOut = toHex(trade.minimumAmountOut(options.allowedSlippage));
    var path = trade.route.path.map(function (token) {
      return token.address;
    });
    var deadline = 'ttl' in options ? "0x" + (Math.floor(new Date().getTime() / 1000) + options.ttl).toString(16) : "0x" + options.deadline.toString(16);
    var useFeeOnTransfer = Boolean(options.feeOnTransfer);
    var methodName;
    var args;
    var value;

    switch (trade.tradeType) {
      case TradeType.EXACT_INPUT:
        if (etherIn) {
          methodName = useFeeOnTransfer ? 'swapExactETHForTokensSupportingFeeOnTransferTokens' : 'swapExactETHForTokens'; // (uint amountOutMin, address[] calldata path, address to, uint deadline)

          args = [amountOut, path, to, deadline];
          value = amountIn;
        } else if (etherOut) {
          methodName = useFeeOnTransfer ? 'swapExactTokensForETHSupportingFeeOnTransferTokens' : 'swapExactTokensForETH'; // (uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)

          args = [amountIn, amountOut, path, to, deadline];
          value = ZERO_HEX;
        } else {
          methodName = useFeeOnTransfer ? 'swapExactTokensForTokensSupportingFeeOnTransferTokens' : 'swapExactTokensForTokens'; // (uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)

          args = [amountIn, amountOut, path, to, deadline];
          value = ZERO_HEX;
        }

        break;

      case TradeType.EXACT_OUTPUT:
        !!useFeeOnTransfer ? process.env.NODE_ENV !== "production" ? invariant(false, 'EXACT_OUT_FOT') : invariant(false) : void 0;

        if (etherIn) {
          methodName = 'swapETHForExactTokens'; // (uint amountOut, address[] calldata path, address to, uint deadline)

          args = [amountOut, path, to, deadline];
          value = amountIn;
        } else if (etherOut) {
          methodName = 'swapTokensForExactETH'; // (uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)

          args = [amountOut, amountIn, path, to, deadline];
          value = ZERO_HEX;
        } else {
          methodName = 'swapTokensForExactTokens'; // (uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)

          args = [amountOut, amountIn, path, to, deadline];
          value = ZERO_HEX;
        }

        break;
    }

    return {
      methodName: methodName,
      args: args,
      value: value
    };
  };

  return Router;
}();

var ERC20 = [
	{
		constant: true,
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				name: "",
				type: "uint8"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	}
];

var _TOKEN_DECIMALS_CACHE;
var TOKEN_DECIMALS_CACHE = (_TOKEN_DECIMALS_CACHE = {}, _TOKEN_DECIMALS_CACHE[ChainId.MAINNET] = {
  '0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A': 9 // DGD

}, _TOKEN_DECIMALS_CACHE);
/**
 * Contains methods for constructing instances of pairs and tokens from on-chain data.
 */

var Fetcher = /*#__PURE__*/function () {
  /**
   * Cannot be constructed.
   */
  function Fetcher() {}
  /**
   * Fetch information for a given token on the given chain, using the given ethers provider.
   * @param chainId chain of the token
   * @param address address of the token on the chain
   * @param provider provider used to fetch the token
   * @param symbol optional symbol of the token
   * @param name optional name of the token
   */


  Fetcher.fetchTokenData = function fetchTokenData(chainId, address, provider, symbol, name) {
    try {
      var _TOKEN_DECIMALS_CACHE2, _TOKEN_DECIMALS_CACHE3;

      var _temp3 = function _temp3(parsedDecimals) {
        return new Token(chainId, address, parsedDecimals, symbol, name);
      };

      if (provider === undefined) provider = getDefaultProvider(getNetwork(chainId));

      var _temp4 = typeof ((_TOKEN_DECIMALS_CACHE2 = TOKEN_DECIMALS_CACHE) === null || _TOKEN_DECIMALS_CACHE2 === void 0 ? void 0 : (_TOKEN_DECIMALS_CACHE3 = _TOKEN_DECIMALS_CACHE2[chainId]) === null || _TOKEN_DECIMALS_CACHE3 === void 0 ? void 0 : _TOKEN_DECIMALS_CACHE3[address]) === 'number';

      return Promise.resolve(_temp4 ? _temp3(TOKEN_DECIMALS_CACHE[chainId][address]) : Promise.resolve(new Contract(address, ERC20, provider).decimals().then(function (decimals) {
        var _TOKEN_DECIMALS_CACHE4, _extends2, _extends3;

        TOKEN_DECIMALS_CACHE = _extends({}, TOKEN_DECIMALS_CACHE, (_extends3 = {}, _extends3[chainId] = _extends({}, (_TOKEN_DECIMALS_CACHE4 = TOKEN_DECIMALS_CACHE) === null || _TOKEN_DECIMALS_CACHE4 === void 0 ? void 0 : _TOKEN_DECIMALS_CACHE4[chainId], (_extends2 = {}, _extends2[address] = decimals, _extends2)), _extends3));
        return decimals;
      })).then(_temp3));
    } catch (e) {
      return Promise.reject(e);
    }
  }
  /**
   * Fetches information about a pair and constructs a pair from the given two tokens.
   * @param tokenA first token
   * @param tokenB second token
   * @param provider the provider to use to fetch the data
   */
  ;

  Fetcher.fetchPairData = function fetchPairData(tokenA, tokenB, provider) {
    try {
      if (provider === undefined) provider = getDefaultProvider(getNetwork(tokenA.chainId));
      !(tokenA.chainId === tokenB.chainId) ? process.env.NODE_ENV !== "production" ? invariant(false, 'CHAIN_ID') : invariant(false) : void 0;
      var address = Pair.getAddress(tokenA, tokenB);
      return Promise.resolve(new Contract(address, IUniswapV2Pair.abi, provider).getReserves()).then(function (_ref) {
        var reserves0 = _ref[0],
            reserves1 = _ref[1];
        var balances = tokenA.sortsBefore(tokenB) ? [reserves0, reserves1] : [reserves1, reserves0];
        return new Pair(new TokenAmount(tokenA, balances[0]), new TokenAmount(tokenB, balances[1]));
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return Fetcher;
}();

export { BAR_ADDRESS, ChainId, Currency, CurrencyAmount, ETHER, FACTORY_ADDRESS, Fetcher, Fraction, INIT_CODE_HASH, InsufficientInputAmountError, InsufficientReservesError, MAKER_ADDRESS, MASTERCHEF_ADDRESS, MINIMUM_LIQUIDITY, Pair, PancakeV1Pair, PancakeV2Pair, Percent, Price, ROUTER_ADDRESS, Rounding, Route, Router, SUSHI_ADDRESS, TIMELOCK_ADDRESS, Token, TokenAmount, Trade, TradeType, WETH, currencyEquals, inputOutputComparator, tradeComparator };
//# sourceMappingURL=sdk.esm.js.map
