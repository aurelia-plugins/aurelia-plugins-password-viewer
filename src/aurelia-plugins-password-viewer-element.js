// IMPORTS
import {bindingMode} from 'aurelia-binding';
import {bindable, customElement} from 'aurelia-templating';


// CLASS ATTRIBUTES
@customElement('aup-password-viewer')


// PUBLIC CLASS
export class PasswordViewer {
  // PUBLIC PROPERTIES
  show = false;

  // BINDABLE PROPERTIES
  @bindable class;
  @bindable $id;
  @bindable placeholder = 'Enter password';
  @bindable({ defaultBindingMode: bindingMode.twoWay }) value;

  // PUBLIC METHODS
  click(event) {
    event.stopPropagation();
  }

  toggle(show) {
    this.show = show;
  }
}