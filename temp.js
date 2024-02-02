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
        // Create the feature box HTML element
        var featureBox = document.createElement('div');
        featureBox.className = 'feature-box';

        // Add some content to the box
        var inputLabel = document.createElement('label');
        inputLabel.htmlFor = 'feature-box-input';
        inputLabel.textContent = 'Enter your text here:';

        var inputBox = document.createElement('input');
        inputBox.id = 'feature-box-input';
        inputBox.type = 'text';

        var button = document.createElement('button');
        button.textContent = 'Submit';

        featureBox.appendChild(inputLabel);
        featureBox.appendChild(inputBox);
        featureBox.appendChild(button);
        

        // Append the feature box to the page
        document.body.appendChild(featureBox);




    }

)

();