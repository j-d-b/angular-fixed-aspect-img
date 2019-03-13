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

  const setContainerHeight = (element, aspectRatioDecimal) => {
    element.style.height = element.offsetWidth * aspectRatioDecimal + 'px';
  };

  const setChildImageSize = (element, aspectRatioDecimal) => {
    const img = element.getElementsByTagName('img')[0];
    const { height, width } = img;

    if (height/width > aspectRatioDecimal) {
      element.querySelector('.fai-content').style.height = '100%';
      img.style.height = '100%';
      img.style.width = 'auto';
    } else {
      element.querySelector('.fai-content').style.width = '100%';
      img.style.height = 'auto';
      img.style.width = '100%';
    }
  };

  const fitImage = aspectRatioDecimal => {
    document.querySelectorAll('.fai-container').forEach(element => {
      setContainerHeight(element, aspectRatioDecimal);
      setChildImageSize(element, aspectRatioDecimal);
    });
  };

  this.$onInit = () => {
    console.log(this.aspectRatio);
    console.log(this.bgColor);
    console.log(this.imgSrc);
    const aspectRatioDecimal = this.aspectRatio
      ? parseAspectRatio(this.aspectRatio)
      : 0.75; // default to 4:3

    angular.element(document).ready(() => {
      fitImage(aspectRatioDecimal);
      window.addEventListener('resize', () => fitImage(aspectRatioDecimal));
    });
  };
}
