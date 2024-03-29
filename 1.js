// ==UserScript==
// @name         下载交接单工具
// @namespace    http://tampermonkey.net/
// @version      2024-02-19
// @description  try to take over the world!
// @author       You
// @match        https://bpm.tidc.tencent.com/*
// @match        https://www.csdn.net/*
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=csdn.net
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // 创建悬浮菜单的HTML结构
    var floatingMenu = document.createElement('div');
    floatingMenu.id = 'floatingMenu';
    floatingMenu.innerHTML = `
        <div class="menu-item" id="item1">下载交接单</div>
    `;
    document.body.appendChild(floatingMenu);
 
    document.querySelectorAll('#item1').forEach(function (item) {
        item.addEventListener('click', function () {
            document.querySelector('.eip-blank-div .el-col-5 button').click();
        });
    });
    // 设置悬浮菜单的CSS样式
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
        #floatingMenu {
            position: fixed; /* 固定定位 */
            left: 0; /* 距离左边缘0像素 */
            top: 900px; /* 距离顶部0像素 */
            width: 200px; /* 宽度 */
            height: auto; /* 高度自适应内容 */
            background: ＃fff; /* 背景颜色 */
            border: 1px solid #ccc; /* 边框 */
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* 阴影效果 */
            z-index: 9999; /* 层级高于其他元素 */
            display: flex; /* 弹性盒子布局 */
            flex-direction: column; /* 垂直排列子元素 */
            align-items: center; /* 水平居中子元素 */
            justify-content: space-around; /* 垂直方向上的子元素分布 */
        }
        .menu-item {
            padding: 10px; /* 内边距 */
            cursor: pointer; /* 鼠标悬停时的光标样式 */
            user-select: none; /* 禁止文本选择 */
            width: 200px; /* 宽度 */
            height: auto; /* 高度自适应内容 */
            background: blue;
        }
    `;
    document.head.appendChild(style);

    // 菜单拖动相关变量
    var isDragging = false;
    var startX = 0;
    var startY = 0;

    // 鼠标按下事件
    floatingMenu.addEventListener('mousedown', function (event) {
        isDragging = true;
        startX = event.clientX - floatingMenu.getBoundingClientRect().left;
        startY = event.clientY - floatingMenu.getBoundingClientRect().top;
    });

    // 鼠标移动事件
    document.addEventListener('mousemove', function (event) {
        if (isDragging) {
            var newX = event.clientX - startX;
            var newY = event.clientY - startY;
            floatingMenu.style.left = newX + 'px';
            floatingMenu.style.top = newY + 'px';
        }
    });

    // 鼠标松开事件
    document.addEventListener('mouseup', function (event) {
        isDragging = false;
    });

    // 鼠标离开事件
    document.addEventListener('mouseleave', function (event) {
        isDragging = false;
    });

})();
