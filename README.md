# AngularJS `fixed-aspect-img` Component

AngularJS component for a fixed aspect ratio container for a rectangular image of any aspect ratio.

This component can be using in responsive layouts where the image container width is variable (e.g. depends on display width).

## Usage
### Installation
```
npm install angular-fixed-aspect-img
```

### Include dependency
#### ES Modules
```
import fixedAspectImg from 'fixed-aspect-img';

const app = angular.module('app', fixedAspectImg);
```

#### From source
Include `node_modules/angular-fixed-aspect-img/dist/angular-fixed-aspect-img.js` in source, e.g. w/ a `<script>` tag.

Inject dependency into your app
```
const app = angular.module('app', 'fixed-aspect-img');
```

## Example
Usage inside a variable-width containing element
```html
<div style="width: 50vw;">
  <fixed-aspect-img
    aspect-ratio="'4:3'"
    img-src="my-image.jpg"
    bg-color="'red'"
  ></fixed-aspect-img>
</div>
```

## API
* `imageSrc`: the image URL
* `aspectRatio` *optional*: a string representing an aspect ratio using **:** notation (e.g. `'4:3', '16:9'`). Default: `4:3`
* `bgColor` *optional*: a string representing a [CSS color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value), used as the background of the image container (top or side bars). Default: `black`

## License
This package is licensed under [The MIT License](https://opensource.org/licenses/MIT).

## Todo
- [ ] Enhanced README
- [ ] Add examples
- [ ] Add non-minified library to `dist/`
