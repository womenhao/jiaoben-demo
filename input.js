// ==UserScript==
// @name         查询交接单工具
// @namespace    http://tampermonkey.net/
// @version      2024-02-19
// @description  try to take over the world!
// @author       Caoxuxu
// @match        https://om.tidc.tencent.com/*
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js
// @icon         https://cache.s.tencent.com/portal/starter/prod/v1.11.1/static/img/star.402ddef3.gif
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // 创建悬浮菜单的HTML结构
    var floatingMenu = document.createElement('div');
    floatingMenu.id = 'floatingMenu';
    floatingMenu.innerHTML = `
     <div class="caidanlan">
        <input type="text" id="myInput"  placeholder="流程单号" class="menu-item">
        <div class="menu-item" id="item2">ODM工单查询</div>
        <div class="menu-item" id="item1">流程单查询</div>

     </div>
    `;
    document.body.appendChild(floatingMenu);





    document.querySelectorAll('#item1').forEach(function (item) {
        item.addEventListener('click', function () {
            var inputValue = document.getElementById('myInput').value;
            console.log(inputValue)

            //触发查询操作
            document.querySelectorAll('.advanced-search-footer button')[1].click();
            setTimeout(function () {
                // 这里写延时之后要执行的代码
                document.querySelectorAll('.el-table__fixed-body-wrapper tr td')[1].querySelector('a').click();
            }, 1000);

        });

    });
    document.querySelectorAll('#item2').forEach(function (item) {
        item.addEventListener('click', function () {
            document.querySelectorAll('div.el-menu--horizontal .el-menu')[1].querySelectorAll('li')[0].click();
        });
    });

    // 设置悬浮菜单的CSS样式
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
        #floatingMenu {
            position: fixed; /* 固定定位 */
            left: 20px; /* 距离左边缘0像素 */
            top: 500px; /* 距离顶部0像素 */
            width: 200px; /* 宽度 */
            height: auto; /* 高度自适应内容 */
            background: honeydew; /* 背景颜色 */
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
