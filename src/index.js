import angular from 'angular';
import controller from './fixedAspectImg.controller';

const FixedAspectImgComponent = {
  template: `
    <div class="fai-container" style="width: 100%; height: 100%;" ng-style="{ 'background-color': $ctrl.bgColor || 'black' }">
      <img class="fai-image" ng-src="{{$ctrl.imgSrc}}" alt="{{$ctrl.altMsg}}" />
    </div>
  `,
  bindings: {
    imgSrc: '<',
    aspectRatio: '<',
    bgColor: '<',
    altMsg: '<'
  },
  controller
};

const FixedAspectImgModule = angular
  .module('fixedAspectImg', [])
  .component('fixedAspectImg', FixedAspectImgComponent)
  .name;

export default FixedAspectImgModule;
