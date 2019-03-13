import angular from 'angular';

import template from './fixedAspectImg.html';
import controller from './fixedAspectImg.controller';
import './fixedAspectImg.css';

const FixedAspectImgComponent = {
  template,
  bindings: {
    imgSrc: '@',
    aspectRatio: '<',
    bgColor: '<'
  },
  controller
};

const FixedAspectImgModule = angular
  .module('fixedAspectImg', [])
  .component('fixedAspectImg', FixedAspectImgComponent)
  .name;

export default FixedAspectImgModule;
