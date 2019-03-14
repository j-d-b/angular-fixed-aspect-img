import angular from 'angular';

export default function () {
  const parseAspectRatio = aspectRatio => {
    try {
      const [width, height] = aspectRatio.split(':');
      const aspectRatioDecimal = height/width;
      return aspectRatioDecimal;
    } catch (err) {
      throw new Error('Invalid aspect ratio');
    }
  };

  const getAspectDecimal = aspectRatio => aspectRatio ? parseAspectRatio(aspectRatio) : 0.75; // default to 4:3

  const sizeImage = (image, aspectRatioDecimal) => {
    if (image.height/image.width > aspectRatioDecimal) {
      // bars on side
      image.style.height = '100%';
      image.style.width = '';
    } else {
      // bars on top/bot
      image.style.height = '';
      image.style.width = '100%';
    }
  };

  const centerImage = (image, aspectRatioDecimal, container) => {
    if (image.height/image.width > aspectRatioDecimal) {
      // bars on side
      image.style.transform = `translateX(${(container.offsetWidth-image.width)/2}px)`;
    } else {
      // bars on top/bot
      image.style.transform = `translateY(${(container.offsetHeight-image.height)/2}px)`;
    }
  };

  const sizeAll = isInit => {
    const aspectDecimal = getAspectDecimal(this.aspectRatio);

    document.querySelectorAll('.fai-container').forEach(container => {
      container.style.height = container.offsetWidth * aspectDecimal + 'px';

      const image = container.querySelector('.fai-image');
      sizeImage(image, aspectDecimal);
      centerImage(image, aspectDecimal, container);

      if (isInit) {
        image.addEventListener('load', () => {
          sizeImage(image, getAspectDecimal(this.aspectRatio));
          centerImage(image, getAspectDecimal(this.aspectRatio), container);
        });
      }
    });
  };

  this.$onInit = () => {
    angular.element(document).ready(() => {
      sizeAll(true);
    });
    window.addEventListener('resize', sizeAll);
  };

  this.$onChanges = changes => {
    if (changes.aspectRatio) {
      sizeAll();
    }
  };
}
