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

  const fitImage = (image, aspectRatioDecimal, container) => {
    if (image.height/image.width > aspectRatioDecimal) {
      // bars on side
      image.style.height = '100%';
      image.style.width = '';
      image.style.transform = `translateX(${(container.offsetWidth-image.width)/2}px)`;
    } else {
      // bars on top/bot
      image.style.height = '';
      image.style.width = '100%';
      image.style.transform = `translateY(${(container.offsetHeight-image.height)/2}px)`;
    }
  };

  const fitAll = isInit => {
    const aspectDecimal = getAspectDecimal(this.aspectRatio);

    document.querySelectorAll('.fai-container').forEach(container => {
      container.style.height = container.offsetWidth * aspectDecimal + 'px';

      const image = container.querySelector('.fai-image');
      fitImage(image, aspectDecimal, container);

      if (isInit) {
        image.addEventListener('load', () => {
          fitImage(image, getAspectDecimal(this.aspectRatio), container);
        });
      }
    });
  };

  this.$onInit = () => {
    angular.element(document).ready(() => {
      fitAll(true);
    });
    window.addEventListener('resize', fitAll);
  };

  this.$onChanges = changes => {
    if (changes.aspectRatio) {
      fitAll();
    }
  };
}
