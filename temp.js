// ==UserScript==
// @name         Statement scripts
// @namespace    http://tampermonkey.net/
// @version      2024-02-01
// @description  Automate click-and-click statement scripts
// @author       women
// @match        https://greasyfork.org/zh-CN/users/1255849-womenhao
// @match        *://*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=greasyfork.org
// @license      AGPL-3.0
// @grant        none
// ==/UserScript==

(
    function() {
        'use strict';

        let VEnable = localStorage.getItem('VEnable')=='true';
        if(VEnable){
            setTimeout(()=>{
                document.getElementById('live-player').remove();
            },3000)
        }
        let btnArea = document.querySelector('.right-ctnr');
        let btn = document.createElement('button');
        btn.textContent=VEnable?'恢复':'移除';
        btn.addEventListener('click',()=>{
            VEnable=!VEnable;
            localStorage.setItem('VEnable',VEnable);
            btn.textContent = VEnable?'恢复':'移除';
            if(VEnable){
                document.getElementById('live-player').remove();
            }else{
                location.reload();
            }
        });
        btnArea.insertBefore(btn,btnArea.children[0]);
    }
)

();