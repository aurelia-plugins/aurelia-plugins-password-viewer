var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
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

import { bindingMode } from 'aurelia-binding';
import { bindable, customElement } from 'aurelia-templating';

export let PasswordViewer = (_dec = customElement('aup-password-viewer'), _dec2 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = (_class2 = class PasswordViewer {
  constructor() {
    this.show = false;

    _initDefineProp(this, 'class', _descriptor, this);

    _initDefineProp(this, '$id', _descriptor2, this);

    _initDefineProp(this, 'placeholder', _descriptor3, this);

    _initDefineProp(this, 'value', _descriptor4, this);
  }

  click(event) {
    event.stopPropagation();
  }

  toggle(show) {
    this.show = show;
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'class', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, '$id', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [bindable], {
  enumerable: true,
  initializer: function () {
    return 'Enter password';
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec2], {
  enumerable: true,
  initializer: null
})), _class2)) || _class);