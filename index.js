'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var reactDom = require('react-dom');

var themes = {
  light: {
    green: '#4caf50'
  },
  dark: {
    green: '#006400'
  }
};

var ThemeContext = React.createContext(themes.dark // default value
);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Form = function (_React$PureComponent) {
  inherits(Form, _React$PureComponent);

  function Form(props) {
    classCallCheck(this, Form);

    var _this = possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.state = {
      firstName: '',
      surname: ''
    };

    _this.onSubmit = _this.onSubmit.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  createClass(Form, [{
    key: 'onChange',
    value: function onChange(e) {
      this.setState(defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit(e) {
      e.preventDefault();
      var _state = this.state,
          firstName = _state.firstName,
          surname = _state.surname;

      console.log('fistName: ' + firstName + ', surname: ' + surname);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state2 = this.state,
          firstName = _state2.firstName,
          lastName = _state2.lastName;


      return React.createElement(
        'div',
        { className: 'login-form' },
        React.createElement(
          ThemeContext.Consumer,
          null,
          function (theme) {
            return React.createElement(
              'form',
              { onSubmit: _this2.onSubmit },
              React.createElement('input', {
                value: firstName,
                onChange: _this2.onChange,
                name: 'firstName',
                placeholder: 'Your first name',
                autoComplete: 'off'
              }),
              React.createElement('input', {
                value: lastName,
                onChange: _this2.onChange,
                name: 'surname',
                placeholder: 'Your surname',
                autoComplete: 'off'
              }),
              React.createElement(
                'button',
                {
                  style: { backgroundColor: theme },
                  type: 'submit'
                },
                'login'
              )
            );
          }
        )
      );
    }
  }]);
  return Form;
}(React.PureComponent);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "h1,\np {\n  font-family: Lato;\n}\n\n/*\nCredit on form style to Aigars Silkalns:\nhttps://codepen.io/colorlib/pen/rxddKy\n*/\n\n@import url(https://fonts.googleapis.com/css?family=Roboto:300);\n\n.index_login-form__3nigF {\n  width: 360px;\n  padding: 8% 0 0;\n  margin: auto;\n}\nform {\n  position: relative;\n  z-index: 1;\n  background: #ffffff;\n  max-width: 360px;\n  margin: 0 auto 100px;\n  padding: 45px;\n  text-align: center;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n}\nform input {\n  font-family: \"Roboto\", sans-serif;\n  outline: 0;\n  background: #f2f2f2;\n  width: 100%;\n  border: 0;\n  margin: 0 0 15px;\n  padding: 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n}\nform button {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  width: 100%;\n  border: 0;\n  padding: 15px;\n  color: #ffffff;\n  font-size: 14px;\n  -webkit-transition: all 0.3 ease;\n  transition: all 0.3 ease;\n  cursor: pointer;\n}\nform button:hover,\nform button:active,\nform button:focus {\n  background: #43a047;\n}\nform .index_message__o2Vy4 {\n  margin: 15px 0 0;\n  color: #b3b3b3;\n  font-size: 12px;\n}\nform .index_message__o2Vy4 a {\n  color: #4caf50;\n  text-decoration: none;\n}\nform .index_register-form__38IXw {\n  display: none;\n}\n.index_container__1xwUL {\n  position: relative;\n  z-index: 1;\n  max-width: 300px;\n  margin: 0 auto;\n}\n.index_container__1xwUL:before,\n.index_container__1xwUL:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.index_container__1xwUL .index_info__2mu8e {\n  margin: 50px auto;\n  text-align: center;\n}\n.index_container__1xwUL .index_info__2mu8e h1 {\n  margin: 0 0 15px;\n  padding: 0;\n  font-size: 36px;\n  font-weight: 300;\n  color: #1a1a1a;\n}\n.index_container__1xwUL .index_info__2mu8e span {\n  color: #4d4d4d;\n  font-size: 12px;\n}\n.index_container__1xwUL .index_info__2mu8e span a {\n  color: #000000;\n  text-decoration: none;\n}\n.index_container__1xwUL .index_info__2mu8e span .index_fa__2Gghe {\n  color: #ef3b3a;\n}\nbody {\n  background: #76b852; /* fallback for old browsers */\n  background: -webkit-linear-gradient(right, #76b852, #8dc26f);\n  background: -moz-linear-gradient(right, #76b852, #8dc26f);\n  background: -o-linear-gradient(right, #76b852, #8dc26f);\n  background: linear-gradient(to left, #76b852, #8dc26f);\n  font-family: \"Roboto\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n";
styleInject(css);

var App = function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      ThemeContext.Provider,
      { value: themes.light.green },
      React.createElement(Form, null)
    )
  );
};

reactDom.render(React.createElement(App, null), document.getElementById('root')); // eslint-disable-line
//# sourceMappingURL=index.js.map
