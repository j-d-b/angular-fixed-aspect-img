angular.module('app', ['fixedAspectImg']).controller('exampleController', function() {
  const vm = this;

  vm.imgPlaceholderIndex = 0;
  vm.arIndex = 0;
  vm.imgSrcOptions = [
    './images/480x320.png',
    './images/480x480.png',
    './images/480x800.png',
    './images/640x320.png'
  ];
  vm.arOptions = [
    '4:3',
    '2:1',
    '1:1',
    '5:4',
    '3:4',
    '3:1'
  ];

  vm.switchImg = () => vm.imgPlaceholderIndex = (vm.imgPlaceholderIndex + 1) % vm.imgSrcOptions.length;
  vm.changeAr = () => vm.arIndex = (vm.arIndex + 1) % vm.arOptions.length;
});
