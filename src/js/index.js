
// 获取DOM元素并添加错误处理
function getElement(selector, index = 0) {
  const elements = document.querySelectorAll(selector);
  return elements.length > index ? elements[index] : null;
}

function setElementStyle(element, style) {
  if (element) {
    element.style.cssText = style;
  }
}

let firstSlideContainer = getElement('.slide--content');
let secondSlideContainer = getElement('.slide--content--one');
let secondCanvas = getElement('.second--canvas');
let thirdCanvas = getElement('.third--canvas');
let firstSlide = getElement('.first--slide');

// 初始隐藏
setElementStyle(secondSlideContainer, 'display: none');
setElementStyle(secondCanvas, 'display: none');
setElementStyle(thirdCanvas, 'display: none');

// 第一个切换
let containerToggleOne = setTimeout(function(){
  setElementStyle(firstSlideContainer, 'display: none');
  setElementStyle(secondSlideContainer, 'display: block');
}, 2500);

// 移除第一个页面
let removeFirstSlide = setTimeout(function(){
  setElementStyle(firstSlide, 'display: none');
  setElementStyle(secondCanvas, 'display: block');
}, 6500);

// 移除第二个页面
let removeSecondCanvas = setTimeout(function(){
  setElementStyle(secondCanvas, 'display: none');
  setElementStyle(thirdCanvas, 'display: block');
}, 9800);

// 添加清理函数，防止内存泄漏
window.addEventListener('unload', function() {
  clearTimeout(containerToggleOne);
  clearTimeout(removeFirstSlide);
  clearTimeout(removeSecondCanvas);
});
