'use strict';

System.register(['aurelia-binding', 'aurelia-templating'], function (_export, _context) {
  "use strict";

  var bindingMode, bindable, customElement, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, PasswordViewer;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }, function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customElement = _aureliaTemplating.customElement;
    }],
    execute: function () {
      _export('PasswordViewer', PasswordViewer = (_dec = customElement('aup-password-viewer'), _dec2 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = (_class2 = function () {
        function PasswordViewer() {
          _classCallCheck(this, PasswordViewer);

          this.show = false;

          _initDefineProp(this, 'class', _descriptor, this);

          _initDefineProp(this, '$id', _descriptor2, this);

          _initDefineProp(this, 'placeholder', _descriptor3, this);

          _initDefineProp(this, 'value', _descriptor4, this);
        }

        PasswordViewer.prototype.click = function click(event) {
          event.stopPropagation();
        };

        PasswordViewer.prototype.toggle = function toggle(show) {
          this.show = show;
        };

        return PasswordViewer;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'class', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, '$id', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 'Enter password';
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec2], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class));

      _export('PasswordViewer', PasswordViewer);
    }
  };
});