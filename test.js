// ==UserScript==
// @name         自动点击弹窗脚本
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  当鼠标悬浮在指定区域时，自动弹出弹窗并点击关闭按钮
// @author       YourName
// @match        http*://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 定义悬浮区域和弹窗的选择器
    var hoverAreaSelector = '.some-class-or-id'; // 修改为实际的悬浮区域选择器
    var popupCloseButtonSelector = '#popup-close-button-id'; // 修改为实际的关闭按钮选择器

    // 监听页面上的鼠标悬浮事件
    $(document).on('mouseover', hoverAreaSelector, function() {
        // 模拟弹窗出现的效果，根据实际情况可能需要添加延时或其他逻辑

        // 等待弹窗出现后模拟点击关闭按钮
        setTimeout(function() {
            var closeButton = $(popupCloseButtonSelector);
            if (closeButton.length > 0) { // 确保选择器正确且按钮存在
                closeButton.click(); // 模拟点击关闭按钮
            }
        }, 1000); // 假设弹窗在1秒后出现，根据实际情况调整延时时间
    });
})();
