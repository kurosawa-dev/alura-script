// ==UserScript==
// @name         Alura - Allow Theather Mode
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       You
// @match        https://cursos.alura.com.br/course/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let originalButton = document.getElementsByClassName('task-actions-button')[0];
    let clonedButton = originalButton.cloneNode(true);
    let headerActions = document.getElementsByClassName('task-body-header-actions')[0];

    headerActions.appendChild(clonedButton);
    clonedButton.removeAttribute('href');
    clonedButton.innerHTML = 'Expand';
    clonedButton.style.backgroundColor = 'forestGreen';
    clonedButton.addEventListener('click', expandVideo);
})();

function expandVideo() {
    let video = document.getElementsByTagName('main');
    video[0].style.setProperty('max-width', 'initial');
    video[0].style.setProperty('width', '100%');
}