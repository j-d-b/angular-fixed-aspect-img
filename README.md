# AngularJS `fixed-aspect-img` Component
AngularJS component for a fixed aspect ratio image container.

This component can be using in responsive layouts where the image container size is variable (e.g. depends on display width).

![Demonstration](https://media.giphy.com/media/xV85ZWThNNfk1vZdfP/giphy.gif)

## Features
* Fills the parent element, which can have dynamic width/height
* Keeps a fixed aspect ratio, that can be set/changed dynamically
* Holds an image, which is centered within the container, stretched to either full width or full height depending on the aspect ratio of the image and the container; if the image aspect ratio does not exactly match the container aspect ratio, black (or any user-set color) bars fill the remaining space on the top/bottom or left/right.

## Usage
### Installation
```
npm install angular-fixed-aspect-img
```

### Include dependency
#### ES Module
```
import fixedAspectImg from 'fixed-aspect-img';

const app = angular.module('app', [fixedAspectImg]);
```

#### In `<script>`
Include `node_modules/angular-fixed-aspect-img/dist/angular-fixed-aspect-img.umd.js` in `src` attribute of `<script>` tag. Or, pull in the dependencies from a unpkg.
```html
<script src="https://unpkg.com/angular-fixed-aspect-img/dist/angular-fixed-aspect-img.umd.js"></script>
```

Inject dependency into your app
```
const app = angular.module('app', ['fixedAspectImg']);
```

### Using the component
```html
<fixed-aspect-img
  aspect-ratio="'4:3'"
  img-src="my-image.jpg"
  bg-color="'red'"
></fixed-aspect-img>
```

## Examples
See `example/`, which pulls in all dependencies through a CDN, so all you have to do it open `example/example.html` in your browser.

## API
* `imageSrc`: the image URL
* `aspectRatio` *optional*: a string representing an aspect ratio using **:** notation (e.g. `'4:3', '16:9'`). Default: `4:3`
* `bgColor` *optional*: a string representing a [CSS color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value), used as the background of the image container (top or side bars). Default: `black`
* `altMsg` *optional*: string to fill

**Note:** each binding is one-way component binding (`<`), thus if you are passing a string directly rather than a variable containing a string, you must enclose the string in quotes.


## License
This package is licensed under [The MIT License](https://opensource.org/licenses/MIT).

## Todo
- [x] Add example
- [x] Enhanced README
- [ ] Add minified library to `dist/`
- [ ] Written tests
