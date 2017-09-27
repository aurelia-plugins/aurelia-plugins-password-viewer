# aurelia-plugins-password-viewer

A password viewer plugin for Aurelia.

## Installation

**Webpack/Aurelia CLI**

```shell
npm install aurelia-plugins-password-viewer --save
```

**JSPM**

```shell
jspm install aurelia-plugins-password-viewer
```

**Bower**

```shell
bower install aurelia-plugins-password-viewer
```

## Configuration

Inside of your `main.js` or `main.ts` file simply load the plugin inside of the configure method using `.plugin()`.

```javascript
export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.use
    .plugin('aurelia-plugins-password-viewer');

    await aurelia.start();
    aurelia.setRoot('app');
}
```

## Usage

Once the password viewer plugin is configured, to use it simply add the custom element `<aup-password-viewer></aup-password-viewer>` in your view.

There are 4 bindable properties:
* `class`: the CSS class placed on the `input` element
* `$id`: id of the `input` element so you can link with a `label`
* `placeholder`: the placeholder of the `input` element
* `value`: the value of the `input` element


## Styling

The dropdown doesn't come with styling. If you use the CSS Framework [`Faceman`](<http://faceman.io>), styling is provided automatically. Otherwise copy and paste the below styling to your SCSS stylesheet. Use the variables to change the look-and-feel.

```scss
// ICONS
$input-icon-eye: 'data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="1792" viewBox="0 0 1792 1792" width="1792"><path d="M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z" fill="#{$input-icon-eye-color}" /></svg>';
$input-icon-eye-slash: 'data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="1792" viewBox="0 0 1792 1792" width="1792"><path d="M555 1335l78-141q-87-63-136-159t-49-203q0-121 61-225-229 117-381 353 167 258 427 375zm389-759q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm363-191q0 7-1 9-106 189-316 567t-315 566l-49 89q-10 16-28 16-12 0-134-70-16-10-16-28 0-12 44-87-143-65-263.5-173t-208.5-245q-20-31-20-69t20-69q153-235 380-371t496-136q89 0 180 17l54-97q10-16 28-16 5 0 18 6t31 15.5 33 18.5 31.5 18.5 19.5 11.5q16 10 16 27zm37 447q0 139-79 253.5t-209 164.5l280-502q8 45 8 84zm448 128q0 35-20 69-39 64-109 145-150 172-347.5 267t-419.5 95l74-132q212-18 392.5-137t301.5-307q-115-179-282-294l63-112q95 64 182.5 153t144.5 184q20 34 20 69z" fill="#{$input-icon-eye-slash-color}" /></svg>';

// INPUT-PASSWORD
.password-viewer { position: relative; }
.password-viewer button { background-size: rem(24) rem(24); height: rem(24); position: absolute; right: rem(9); top: rem(9); width: rem(24); }
.password-viewer button.password { background-image: url($input-icon-eye); }
.password-viewer button.text { background-image: url($input-icon-eye-slash); }
```