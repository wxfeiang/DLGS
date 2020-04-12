// JavaScript Document
window.onresize = window.onload = function() {
    var deviceWidth = document.documentElement.clientWidth; /*获取设备可视区宽*/
    // if (deviceWidth > 750) deviceWidth = 750; /*最大不超过720，720为设计稿尺寸*/
    document.documentElement.style.fontSize = deviceWidth / 10 + 'px';
};