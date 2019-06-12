// ==UserScript==
// @name         Stack Exchange Dark Mode
// @description  Dark theme for sites and chat on the Stack Exchange Network
// @homepage     https://github.com/samliew/SO-mod-userscripts
// @author       @samliew
// @version      1.8.4
//
// @include      https://*stackexchange.com/*
// @include      https://*stackoverflow.com/*
// @include      https://*serverfault.com/*
// @include      https://*superuser.com/*
// @include      https://*askubuntu.com/*
// @include      https://*mathoverflow.net/*
// @include      https://*.stackexchange.com/*
//
// @include      https://chat.stackoverflow.com/*
// @include      https://chat.stackexchange.com/*
// @include      https://chat.meta.stackexchange.com/*
//
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';


    const darkgreen = '#296538';
    const darkblue = '#035';
    const orange = '#f48024';


    let bodyopacity = '1';
    let textcolor = '#bbb';
    let linkcolor = '#fff';
    let highlightcolor = '#eee';
    let bgcolor = '#222';
    let btncolor = '#333';
    let bordercolor = '#555';


    // Black mode for late nights
    const hour = new Date().getHours();
    const isLateNight = hour >= 22 || hour <= 6;
    if(isLateNight) {
        bodyopacity = '0.9';
        textcolor = '#999';
        linkcolor = '#ccc';
        highlightcolor = '#ddd';
        bgcolor = '#000';
        btncolor = '#555';
        bordercolor = '#333';
    }


    const soLogo = `<svg xmlns="http://www.w3.org/2000/svg" class="-img _glyph" style="width:160px;height:40px;margin:0 -7px;background:none !important;" viewBox="0 0 480.5 117.9"><style>.st0{fill:${linkcolor}}.st1{fill:#bcbbbb}.st2{fill:#f48024}</style><path class="st0" d="M123.7 67.3l-4.8-.4c-3.7-.3-5.2-1.8-5.2-4.3 0-3 2.3-4.9 6.6-4.9 3.1 0 5.8.7 7.9 2.4l2.8-2.8c-2.7-2.2-6.4-3.2-10.7-3.2-6.3 0-10.9 3.3-10.9 8.7 0 4.9 3.1 7.5 8.9 8l4.9.4c3.4.3 4.9 1.7 4.9 4.3 0 3.5-3 5.2-7.9 5.2-3.7 0-6.9-1-9.2-3.4l-2.9 2.9c3.3 3.1 7.2 4.3 12.2 4.3 7.2 0 12.1-3.3 12.1-9 .1-5.8-3.5-7.7-8.7-8.2zm37.2-13.4c-4.8 0-7.8.9-10.4 4.3l2.8 2.8c1.7-2.5 3.7-3.4 7.5-3.4 5.4 0 7.6 2.2 7.6 6.5V67h-8.9c-6.6 0-10.2 3.4-10.2 8.6 0 2.4.8 4.6 2.2 6 1.9 1.9 4.3 2.7 8.4 2.7 4 0 6.1-.8 8.6-3.2V84h4.3V63.8c-.1-6.4-4-9.9-11.9-9.9zm7.5 19.6c0 2.5-.5 4.2-1.5 5.1-1.9 1.8-4.1 2-6.6 2-4.7 0-6.8-1.6-6.8-5.1 0-3.4 2.2-5.2 6.6-5.2h8.3v3.2zm21.3-15.7c2.8 0 4.6.8 6.8 3.3l2.9-2.8c-3-3.3-5.6-4.3-9.7-4.3-7.5 0-13.1 5.1-13.1 15.2s5.7 15.2 13.1 15.2c4.1 0 6.7-1.1 9.8-4.4l-3-2.8c-2.2 2.5-4 3.4-6.8 3.4-2.9 0-5.3-1.1-6.9-3.4-1.4-1.9-1.9-4.2-1.9-8 0-3.7.5-6 1.9-8 1.6-2.3 4-3.4 6.9-3.4zm37.2-3.5h-5.4L208 67.4V41.1h-4.3V84h4.3V73.2l5.3-5.3 9.9 16.1h5.4l-12.3-19.1 10.6-10.6zm20.4-1.6c-4.6 0-7.6 1.8-9.5 3.8-2.8 2.9-3.5 6.4-3.5 12s.7 9.1 3.5 12c1.9 2 5 3.8 9.5 3.8 4.6 0 7.7-1.8 9.6-3.8 2.8-2.9 3.5-6.4 3.5-12s-.7-9.1-3.5-12c-1.9-2-5.1-3.8-9.6-3.8zm3.6 23.3c-.9.9-2.1 1.4-3.6 1.4s-2.7-.5-3.6-1.4c-1.6-1.6-1.8-4.3-1.8-7.5s.2-5.9 1.8-7.5c.9-.9 2-1.4 3.6-1.4 1.5 0 2.7.5 3.6 1.4 1.6 1.6 1.8 4.3 1.8 7.5s-.2 5.9-1.8 7.5zm30-22.9l-6.2 19.1-6.3-19.1h-8.1L271.7 84h6L289 53.1h-8.1zm21.3-.4c-8 0-13.5 5.7-13.5 15.8 0 12.5 7 15.8 14.3 15.8 5.6 0 8.6-1.7 11.7-4.9l-4.7-4.6c-2 2-3.6 2.9-7 2.9-4.3 0-6.8-2.9-6.8-6.9h19.3v-3.4c.1-8.4-4.8-14.7-13.3-14.7zm-5.9 12.9c.1-1.4.2-2.2.7-3.3.8-1.8 2.5-3.2 5.2-3.2 2.6 0 4.3 1.4 5.2 3.2.5 1.1.7 2 .7 3.3h-11.8zM327 56v-3h-7.5v31h7.7V65.4c0-3.9 2.6-5.7 5-5.7 1.9 0 2.9.6 4.1 1.8l5.8-5.8c-2.1-2.1-4.3-2.9-7.3-2.9-3.4-.1-6.3 1.5-7.8 3.2zm17.4-6.1V84h7.7V59.6h5.7v-5.9h-5.7v-3.4c0-1.8.9-2.8 2.7-2.8h3V41h-4.4c-6.2 0-9 4.5-9 8.9zm45.2 2.8c-4.6 0-7.6 1.8-9.5 3.8-2.8 2.9-3.5 6.4-3.5 12s.7 9.1 3.5 12c1.9 2 5 3.8 9.5 3.8 4.6 0 7.7-1.8 9.6-3.8 2.8-2.9 3.5-6.4 3.5-12s-.7-9.1-3.5-12c-1.9-2-5.1-3.8-9.6-3.8zm3.6 23.3c-.9.9-2.1 1.4-3.6 1.4s-2.7-.5-3.6-1.4c-1.6-1.6-1.8-4.3-1.8-7.5s.2-5.9 1.8-7.5c.9-.9 2-1.4 3.6-1.4 1.5 0 2.7.5 3.6 1.4 1.6 1.6 1.8 4.3 1.8 7.5s-.2 5.9-1.8 7.5zm45.9-22.9l-5 19.1-6.3-19.1h-5.6l-6.3 19.1-5-19.1h-8.2l9.5 30.9h6.3l6.5-19.4 6.5 19.4h6.3l9.4-30.9h-8.1zm-69.9 21.6V41h-7.7v34.1c0 4.4 2.7 8.8 9 8.8h4.4v-6.5h-3c-1.9 0-2.7-.9-2.7-2.7zM144.5 59l4-4h-8.2v-9.8H136V76c0 4.4 2.5 8 7.6 8h3.1v-3.7h-2.3c-2.8 0-4-1.6-4-4.3V59h4.1z"/><path class="st1" d="M87.6 91.3v-22H95v29.3H29.1V69.3h7.3v22z"/><path class="st2" d="M44.5 67.3l35.9 7.5 1.5-7.2L46 60.1l-1.5 7.2zm4.7-17.2l33.2 15.5 3.1-6.6-33.2-15.6-3.1 6.7zm9.2-16.3l28.2 23.4 4.7-5.6-28.2-23.4-4.7 5.6zm18.2-17.3l-5.9 4.4 21.9 29.4 5.9-4.4-21.9-29.4zM43.7 83.9h36.6v-7.3H43.7v7.3z"/></svg>`;
    const suLogo = `<svg xmlns="http://www.w3.org/2000/svg" width="208" height="47"><style>.st0{fill:${linkcolor}}</style><g fill="none" fill-rule="evenodd"><path d="M.5 37.01c-.3 0-.5-.1-.5-.4V.43c0-.3.2-.4.5-.4h8.91c.3 0 .6.1.6.4v2.2c0 .3-.2.4-.5.4h-4.9c-.5 0-.6.2-.6.5V33.6c0 .3.2.4.6.4h4.8c.3 0 .6.1.6.4v2.12c-.1.3-.2.5-.6.5H.5z" class="st0"/><path d="M24.03 26.5v6.3c0 4.7-4.03 4.2-9.53 4.2h-.9c-.3 0-.6-.1-.6-.4v-2.2c0-.3.2-.4.5-.4h.7c3.3 0 5.8.7 5.8-1.9v-6c0-1.9 1.3-4.4 3.9-5.4.2 0 .2-.1.2-.2s-.1-.2-.2-.3c-2.4-1.1-3.9-2.8-3.9-5V8.3C20 5.7 17.52 3 14.22 3h-.7c-.3 0-.5-.1-.5-.4V.4c0-.3.2-.4.6-.4h.9c5.6 0 9.53 4 9.53 8.7v5.7c0 2.2 1.41 3.4 3.71 4.2.9.3 1.3.3 1.3 1v1.8c0 .4-.4.6-1.5.9-2.3.7-3.52 2-3.52 4.2z" fill="#38A1CE"/><path d="M17.01 16.1c0 .5-.5.9-1 .9h-2c-.6 0-1-.4-1-.9V13.9c0-.5.5-.9 1-.9h2c.6 0 1 .4 1 .9v2.21zM43.87 36.96c-3.3 0-5.8-.8-8-2.9l1.9-2c1.5 1.7 3.6 2.3 6 2.3 3.2 0 5.2-1.2 5.2-3.6 0-1.8-1-2.7-3.2-3l-3.2-.3c-3.8-.3-5.8-2.1-5.8-5.4 0-3.7 3-5.9 7.1-5.9 2.8 0 5.2.7 7 2.2l-1.9 1.9a8.26 8.26 0 0 0-5.2-1.6c-2.8 0-4.3 1.3-4.3 3.3 0 1.7.9 2.7 3.4 3l3.1.3c3.4.3 5.7 1.7 5.7 5.5.1 3.9-3.1 6.2-7.8 6.2M67.6 36.69v-2.3a6.73 6.73 0 0 1-5.4 2.6c-2.1 0-3.8-.7-5-1.9-1.4-1.4-2-3.3-2-5.7v-12.8H58v12.4c0 3.6 1.8 5.4 4.7 5.4 2.9 0 4.9-1.8 4.9-5.4v-12.4h2.8v20.2h-2.8v-.1zM88.65 35.22c-1 1.1-2.8 1.8-4.7 1.8-2.1 0-3.9-.5-5.5-2.6v11.4h-2.8v-29.3h2.8v2.4c1.6-2.1 3.4-2.6 5.5-2.6 2 0 3.7.7 4.7 1.8 2 2 2.4 5.4 2.4 8.6 0 3.1-.4 6.4-2.4 8.5m-5.3-16.3c-4.2 0-4.9 3.8-4.9 7.7 0 3.9.7 7.7 4.9 7.7s4.9-3.8 4.9-7.7c-.1-3.9-.7-7.7-4.9-7.7M96.9 27.42c0 4.4 2 7 5.7 7 2.2 0 3.6-.7 5.1-2.3l1.9 1.8c-2 2.1-3.8 3.1-7.1 3.1-5.1 0-8.5-3.2-8.5-10.3 0-6.5 3-10.3 8-10.3s8 3.8 8 9.8v1.2H96.9zm9.7-5.6c-.8-1.8-2.5-3-4.5-3-2.1 0-3.8 1.2-4.5 3a9.9 9.9 0 0 0-.6 3.4h10.1c0-1.7-.1-2.3-.5-3.4zM124.86 20.39c-1.1-1.1-1.9-1.5-3.4-1.5-2.8 0-4.7 2.3-4.7 5.4v12.4h-2.7v-20.1h2.8v2.5c1.1-1.8 3.2-2.8 5.5-2.8 1.9 0 3.3.5 4.7 1.9l-2.2 2.2zM141.88 37.05v-1.9a6.95 6.95 0 0 1-5.1 2.1c-2.1 0-3.7-.7-4.9-1.8-1.7-1.7-2.1-3.6-2.1-5.8v-13.2h5.1v12.4c0 2.8 1.8 3.8 3.4 3.8 1.6 0 3.4-.9 3.4-3.8v-12.4h5.1v20.6h-4.9zM159.12 37.34c-3.2 0-6.2-.4-8.8-3l3.4-3.4c1.7 1.7 3.9 1.9 5.5 1.9 1.8 0 3.6-.6 3.6-2.1 0-1-.6-1.7-2.2-1.9l-3.2-.3c-3.7-.4-6-2-6-5.8 0-4.3 3.8-6.6 7.9-6.6 3.2 0 5.9.6 7.9 2.4l-3.2 3.2c-1.2-1.1-3-1.4-4.8-1.4-2.1 0-2.9.9-2.9 2 0 .7.3 1.6 2.1 1.8l3.2.3c4.1.4 6.1 2.6 6.1 6 .1 4.7-3.7 6.9-8.6 6.9M176.02 28.36c0 2.6 1.6 4.6 4.5 4.6 2.2 0 3.4-.6 4.7-1.9l3.1 3c-2.1 2.1-4.1 3.2-7.8 3.2-4.9 0-9.5-2.2-9.5-10.5 0-6.7 3.6-10.5 9-10.5 5.7 0 9 4.2 9 9.8v2.3h-13zm7.3-5.7c-.6-1.2-1.7-2.1-3.4-2.1s-2.9.9-3.4 2.1c-.3.8-.4 1.3-.5 2.2h7.8c-.1-.9-.2-1.5-.5-2.2zM203.78 22.08c-.8-.8-1.5-1.2-2.7-1.2-1.6 0-3.3 1.2-3.3 3.8v12.4h-5.1v-20.6h5v2a7 7 0 0 1 5.2-2.2c2 0 3.4.5 4.9 1.9l-4 3.9z" class="st0"/></g></svg>`;
    const sfLogo = `<svg xmlns="http://www.w3.org/2000/svg" width="203" height="33" viewBox="0 0 203 33" fill="none">
    <style>.st0{fill:#ccc;}.st1{fill:#eee;}</style>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.53241 16C3.84847 16 1.74681 15.3972 0 13.7458L1.55235 12.2218C2.81357 13.524 4.52742 14.0324 6.50055 14.0324C9.11967 14.0324 10.7368 13.1112 10.7368 11.2698C10.7368 9.90395 9.92825 9.14301 8.08476 8.98382L5.46565 8.76201C2.36094 8.5073 0.711907 7.14248 0.711907 4.57097C0.711907 1.71398 3.16953 0 6.56427 0C8.82853 0 10.8654 0.540196 12.2881 1.68214L10.7687 3.17432C9.63712 2.31679 8.18144 1.93685 6.53241 1.93685C4.20443 1.93685 2.97507 2.92067 2.97507 4.50836C2.97507 5.84134 3.7518 6.63518 5.75568 6.79331L8.31108 7.01618C11.0917 7.26983 13 8.31733 13 11.238C13 14.2542 10.3809 16 6.53241 16Z" transform="translate(58 16)" class="st0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2004 4.28552C9.58931 2.85703 8.17366 1.93689 6.50001 1.93689C4.82636 1.93689 3.4118 2.85703 2.79962 4.28552C2.44544 5.14304 2.38203 5.61956 2.31754 6.88887H10.6836C10.6191 5.61956 10.5546 5.14304 10.2004 4.28552ZM2.31752 8.60281C2.31752 12.0318 3.95838 14.0005 6.98318 14.0005C8.81643 14.0005 9.87899 13.4603 11.134 12.2229L12.7103 13.5877C11.1023 15.1754 9.62101 16 6.91868 16C2.73512 16 0 13.524 0 8C0 2.95251 2.47822 0 6.5 0C10.5874 0 13 2.92067 13 7.55638V8.60281H2.31752Z" transform="translate(73 16)" class="st0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.38426 3.21267C7.56189 2.34479 6.95184 2.05585 5.79285 2.05585C3.59814 2.05585 2.19575 3.88722 2.19575 6.29753V16H0V0.192266H2.19575V2.1203C3.01916 0.803437 4.66494 0 6.4029 0C7.83532 0 8.9332 0.352309 10 1.47798L8.38426 3.21267Z" transform="translate(89 16)" class="st0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.03741 16H5.92902L0 0H2.56946L6.98321 12.8461L11.4305 0H14L8.03741 16Z" transform="translate(100 16)" class="st0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2004 4.28552C9.58931 2.85703 8.17366 1.93689 6.50001 1.93689C4.82636 1.93689 3.41071 2.85703 2.79962 4.28552C2.44544 5.14304 2.38094 5.61956 2.31754 6.88887H10.6825C10.6191 5.61956 10.5546 5.14304 10.2004 4.28552ZM2.31752 8.60281C2.31752 12.0318 3.95838 14.0005 6.98318 14.0005C8.81643 14.0005 9.87899 13.4603 11.134 12.2229L12.7103 13.5877C11.1012 15.1754 9.62101 16 6.91868 16C2.73512 16 0 13.524 0 8C0 2.95251 2.47822 0 6.5 0C10.5874 0 13 2.92067 13 7.55638V8.60281H2.31752Z" transform="translate(115 16)" class="st0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.38426 3.21267C7.56085 2.34479 6.95184 2.05585 5.79285 2.05585C3.59814 2.05585 2.19472 3.88722 2.19472 6.29753V16H0V0.192266H2.19472V2.1203C3.01813 0.803437 4.66494 0 6.4029 0C7.83635 0 8.9332 0.352309 10 1.47798L8.38426 3.21267Z" transform="translate(131 16)" class="st0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.91482 9.99796V23H1.73535V9.99796H0V6.83582H1.73535V4.75976C1.73535 2.39537 3.21405 0 6.62141 0H9V3.51349H7.36076C6.36476 3.51349 5.91482 4.05706 5.91482 5.015V6.83582H9V9.99796H5.91482Z" transform="translate(143 9)" class="st1"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.7777 9.80969H6.43165C4.9054 9.80969 4.06006 10.5137 4.06006 11.6962C4.06006 12.8456 4.83919 13.6126 6.49676 13.6126C7.66655 13.6126 8.41368 13.5165 9.1597 12.8147C9.61547 12.398 9.7777 11.7272 9.7777 10.7049V9.80969ZM9.87482 16.8398V15.4019C8.73814 16.5204 7.66656 17 5.71654 17C3.80073 17 2.40359 16.5204 1.39603 15.5301C0.486678 14.6029 0 13.2612 0 11.7913C0 9.13988 1.8507 6.966 5.78165 6.966H9.77771V6.13491C9.77771 4.31356 8.86836 3.51452 6.62699 3.51452C5.00252 3.51452 4.2554 3.89801 3.37805 4.88934L0.682012 2.30099C2.33959 0.51062 3.96295 0 6.78922 0C11.5324 0 14 1.98159 14 5.8796V16.8398H9.87482Z" transform="translate(153 15)" class="st1"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.89392 16.8059V15.2573C8.79435 16.4187 7.24331 17 5.69117 17C4.00942 17 2.65171 16.4511 1.71361 15.5161C0.354806 14.1606 0 12.5807 0 10.7409V0H4.20275V10.1607C4.20275 12.4513 5.65932 13.2256 6.98407 13.2256C8.30993 13.2256 9.79725 12.4513 9.79725 10.1607V0H14V16.8059H9.89392Z" transform="translate(170 15)" class="st1"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.7084 23C1.39516 23 0 20.5778 0 18.1868V0H4.0266V17.9287C4.0266 18.9298 4.42853 19.4471 5.45122 19.4471H7V23H4.7084Z" transform="translate(186 9)" class="st1"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.73667 21.6233C3.27 21.6233 1.79889 19.1667 1.79889 16.7418V8.28876H0V5.04576H1.79889V0H6.05V5.04576H9.05889V8.28876H6.05V16.48C6.05 17.4625 6.50778 18.02 7.52111 18.02H9.05889V21.6233H6.73667Z" transform="translate(193.736 9.79614)" class="st1"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 5H24V0H0V5Z" transform="translate(0 7)" fill="#A7A8AB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 5H24V0H0V5Z" transform="translate(0 14)" fill="#808284"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 5H24V0H0V5Z" transform="translate(0 21)" fill="#59595B"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 5H24V0H0V5Z" fill="#D1D2D4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 5H24V0H0V5Z" transform="translate(0 28)" fill="#59595B"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 5H10V0H0V5Z" transform="translate(27 7)" fill="#982224"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 5H10V0H0V5Z" transform="translate(27 14)" fill="#630F16"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 5H10V0H0V5Z" transform="translate(27 21)" fill="#2B1315"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 5H10V0H0V5Z" transform="translate(27)" fill="#E7282D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 5H10V0H0V5Z" transform="translate(27 28)" fill="#2B1315"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 5H10V0H0V5Z" transform="translate(40 7)" fill="#A7A8AB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 5H10V0H0V5Z" transform="translate(40 14)" fill="#808284"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 5H10V0H0V5Z" transform="translate(40 21)" fill="#59595B"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 5H10V0H0V5Z" transform="translate(40)" fill="#D1D2D4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 5H10V0H0V5Z" transform="translate(40 28)" fill="#59595B"/>
</svg>`;


    GM_addStyle(`


/* Apply to all */
body {
    background-image: none;
    opacity: ${bodyopacity};
}
*,
*:before,
*:after,
#search-channel-selector,
body .bg-black-025,
body .bg-black-050,
body .bg-black-700,
.fc-light,
.fc-medium,
.fc-dark {
    background-color: ${bgcolor};
    color: ${textcolor};
    box-shadow: none;
    outline: none;
    text-shadow: none;
}
.btn,
.button,
button,
input[type="submit"],
input[type="button"],
input[type="reset"] {
    background-image: none;
    border-color: ${bordercolor};
}
hr {
    background-color: ${bordercolor};
    border-color: ${bordercolor};
}
#sidebar .module,
#sidebar .s-sidebarwidget:not(:last-child),
#sidebar .s-sidebarwidget__yellow {
    margin-bottom: 25px;
    padding-bottom: 20px;
    border: none;
    border-bottom: 1px dashed ${bordercolor};
}
.s-sidebarwidget,
.s-sidebarwidget--header,
.s-sidebarwidget--content,
.s-sidebarwidget:after {
    border: none;
}
#sidebar .community-bulletin .bulletin-item-content a,
a:not(.s-btn) {
    color: ${linkcolor};
}
#sidebar .community-bulletin .bulletin-item-content a:hover,
a:hover {
    color: ${linkcolor};
}
iframe:hover,
a:hover img,
a:hover svg,
button:hover img,
button:hover svg {
    filter: none;
    background-color: inherit;
}
iframe,
img,
.-img,
._glyph {
    filter: brightness(0.8) saturate(90%);
}
button:hover,
input[type="button"]:hover,
input[type="submit"]:hover,
.s-btn:hover, .btn:hover {
    background-color: ${btncolor};
    color: ${linkcolor};
}
body .fc-dark {
    color: #ddd;
}
body .fc-medium {
    color: #888;
}
body .bc-black-1,
body .bc-black-2,
body .bc-black-3 {
    border-color: ${bordercolor};
}
body .fc-theme-primary {
    color: ${orange};
}


/* Selection */
::selection { background: ${highlightcolor}; color: ${bordercolor}; }
::-moz-selection { background: ${highlightcolor}; color: ${bordercolor}; }


/* Scrollbars */
::-webkit-scrollbar{ width:10px; height:10px; }
::-webkit-scrollbar-thumb{ background-color:${textcolor}; border-radius: 5; }
::-webkit-scrollbar-thumb:hover{ background-color:${textcolor}; }
::-webkit-scrollbar-track{ background-color:${bordercolor}; }


/* Specific elements opacity & hover */
.wmd-button-row,
#left-sidebar,
#sidebar > *,
.deleted-answer,
.downvoted-answer,
.top-bar .-logo,
#usersidebar,
.usersidebar-open #usersidebar,
.js-admin-dashboard aside > * {
    opacity: 0.6;
    transition: opacity 0.2s ease;
}
.question-summary .started,
#footer > div {
    opacity: 0.4;
    transition: opacity 0.2s ease;
}
ul.comments-list .comment-voting,
ul.comments-list .comment-flagging {
    opacity: 0.1;
}
.wmd-button-row:hover,
#left-sidebar:hover,
#sidebar > *:hover,
.deleted-answer:hover,
.downvoted-answer:hover,
.top-bar .-logo:hover,
#usersidebar:hover,
.js-admin-dashboard aside > *:hover,
.question-summary:hover .started,
#footer:hover > div,
ul.comments-list .comment:hover .comment-voting,
ul.comments-list .comment:hover .comment-flagging {
    opacity: 1;
}


/* Specific elements */
#content,
.flush-left,
.question-summary,
.top-bar .searchbar .s-input,
#search-channel-selector {
    border-color: ${bordercolor};
}
.s-btn svg,
.s-btn svg * {
    color: inherit;
}
.s-btn * {
    background: none;
}
#sidebar a,
#content #sidebar .community-bulletin .bulletin-item-content a,
a.fc-medium,
a.fc-dark {
    color: inherit;
}
#sidebar a:hover,
#content #sidebar .community-bulletin .bulletin-item-content a:hover,
a.fc-medium:hover,
a.fc-dark:hover {
    color: ${linkcolor};
}
#content {
    border-right: none;
}
#footer {
    border-top: 1px solid ${bordercolor};
}
.topbar-dialog .unread-item *,
.expander-arrow-small-hide,
#tabs a:before,
.tabs a:before {
    background-color: transparent;
}
.top-bar .-logo,
.top-bar .-logo span {
    background-color: transparent;
    filter: none;
}
.top-bar.top-bar__network .-logo {
    background-color: transparent;
    opacity: 1;
}
.s-select:before, .s-select:after,
.f-select:before, .f-select:after {
    border-color: #AAA transparent;
}
.s-btn__muted.s-btn__outlined.s-btn__dropdown:after {
    border-color: currentColor transparent;
}
.temp-popover--arrow:before,
.temp-popover--arrow:after {
    border-color: transparent;
    border-bottom-color: #e4e6e8;
}
.top-bar .indicator-badge {
    background-color: #07C;
    color: white;
}
.top-bar .indicator-badge._important {
    background-color: #C91D2E;
}
.topbar-dialog .unread-item {
    background-color: ${darkblue};
}
ul.comments-list .comment > * {
    border-color: #333;
}
.comment .relativetime,
.comment .relativetime-clean,
.comment .comment-score {
    opacity: 0.5;
}
.message {
    border: 1px solid ${bordercolor};
}
.wmd-button-row {
    background-color: white;
}
.wmd-button-row * {
    background-color: inherit;
}
.js-post-issues .s-btn {
    border-color: transparent;
}
.question-summary .excerpt {
    color: #aaa;
}
.post-tag,
.tags .post-tag,
.post-taglist .post-tag {
    background-color: ${btncolor};
    color: #aaa;
}
body > div[style*="absolute"],
.tag-popup {
    background-color: transparent;
}
.tag-popup .-container,
.tag-popup .-container > *,
.tag-popup .-container .grid {
    background-color: black;
}
.badge1-alternate,
.badge2-alternate,
.badge3-alternate,
.badge-how-to {
    border-color: transparent;
}
.s-progress {
    background-color: #d6d9dc;
}
.s-progress--bar {
    background-color: #42d773;
}
.youarehere,
.is-selected {
    background-color: ${bordercolor};
}
.nav-links .youarehere .nav-links--link {
    border-right: 3px solid ${orange};
}
.bounty-indicator-tab {
    color: white;
    background-color: #0077dd;
}
.supernovabg {
    color: white;
    background-color: #F48024;
}
.hotbg {
    color: white;
    background-color: #CF7721;
}
.coolbg {
    color: white;
    background-color: #9199a1;
}
.tagged-interesting {
    box-shadow: inset 0 0 16px -4px #bbbb00;
}
.deleted-answer,
.deleted-comment .comment-actions,
.deleted-comment .comment-text,
.deleted-comment .comment-flags {
    box-shadow: inset 0 0 0 9999px #220000;
}
.tagged-interesting *,
.deleted-answer *:not(.popup):not(.post-stickyheader),
.deleted-comment .comment-text *:not(.popup),
.question-status * {
    background-color: transparent;
}
.question-status {
    background-color: #333;
}
.vote-up-off,
.vote-down-off,
.star-off {
    opacity: 0.2;
}
.vote-up-on,
.vote-down-on {
    background-blend-mode: exclusion;
    filter: brightness(1000%);
    background-color: #030303;
    opacity: 1;
}
.star-on {
    opacity: 1;
}
body .bg-white,
body .bg-yellow-100 {
    background-color: ${bgcolor};
}
body .bg-green-400,
.accepted,
.answered-accepted,
.special-rep {
    background-color: ${darkgreen};
}
.status > * {
    background-color: transparent;
}
.new-post-activity,
.new-answer-activity {
    background-color: #888;
}
.new-post-activity a,
.new-answer-activity a {
    background-color: transparent;
}
.answer-votes.answered-accepted {
    color: white;
    background-color: #5fba7d;
}
span.diff-delete {
    background-color: #e5bdb2;
    color: #a82400;
}
span.diff-add {
    background-color: #d1e1ad;
    color: #405a04;
}
img.diff-delete {
    border-color: red;
}
img.diff-add {
    border-color: #d1e1ad;
}
.inserted > div {
    background-color: #204a2e;
}
.profile-cards--graph {
    background-image: none;
}
#avatar-card {
    box-shadow: none;
}
a.comment-user.owner {
    background-color: #E1ECF4;
    color: #555;
}
.page-numbers {
    background-image: none;
}
body table.sorter > tbody > tr:nth-child(odd) > td {
    background-color: #181818;
}
body table.sorter > tbody > tr:nth-child(even) > td {
    background: none;
}


/* Code colours */
pre {
    background-color: #333;
}
pre * {
    background-color: inherit;
}
.str, .lit, .tag {
    color: #d68585;
}
.kwd, .dec {
    color: #7878d2;
}
.typ {
    color: #6dbcd5;
}
.atn {
    color: #d84222;
}
.pun, .pln {
    color: ${textcolor};
}
.atv {
    color: #0F74BD;
}


/* Dark mode for SOMU userscripts */
.js-usercolor:after {
    opacity: 0.7;
}
.post-stickyheader {
    background: #111;
}
.post-stickyheader * {
    background: none;
}
.ctype-custom,
.ctype-bad,
.ctype-poor,
.ctype-meh {
    display: inline;
    padding: 2px 5px 3px;
    line-height: 1;
    font-size: 10px;
    font-style: normal;
    border-radius: 2px;
    color: white;
}
.ctype-custom {
    background-color: #ffc;
    color: #333;
}
.ctype-bad {
    background-color: #ff2600;
}
.ctype-poor {
    background-color: #ff9300;
}
.ctype-meh {
    background-color: #999;
}
.cmmt-chatty {
    color: coral;
}
.cmmt-rude {
    color: red;
}
a.comment-user.owner {
    background-color: #5f666d;
    color: ${linkcolor};
}
.delete-comment,
.cancel-comment-flag,
.skip-post {
    background: #444;
}
.cancel-comment-flag .cancel-delete-comment-flag {
    background-color: red;
}
.post-mod-menu-link .post-mod-menu {
    background-color: ${bgcolor};
    box-shadow: 0px 0px 5px 0px white;
}
.deleted-answer .mod-userlinks,
.deleted-answer .post-mod-menu-link .post-mod-menu {
    background-color: #220000;
}
.post-mod-menu-link .post-mod-menu a.disabled,
.post-mod-menu-link .post-mod-menu a.disabled:hover {
    background-color: #222;
    color: #888;
}
.post-mod-menu-link .post-mod-menu a:hover {
    background-color: #666;
    color: ${textcolor};
}
#search-helper {
    padding-bottom: 20px;
    border: 1px solid ${bordercolor};
    border-top: none;
}
#saved-search .handle:before,
#saved-search .handle:after {
    background-color: ${bordercolor};
}
#search-helper svg,
#btn-bookmark-search svg,
#btn-auto-refresh svg {
    background-color: transparent;
    fill: #ccc;
}
#search-helper .active svg {
    fill: #888;
}
#btn-bookmark-search.active svg,
#btn-auto-refresh.active svg {
    fill: gold;
}
.fancybox-bg,
.fancybox-inner,
.fancybox-stage,
.fancybox-slide {
    background: none;
}
.fancybox-container {
    background-color: rgba(0,0,0,0.6);
}
#search-helper input[type="radio"] + label:before {
    color: transparent;
}
#search-helper input[type="radio"]:checked + label:before {
    color: ${orange};
}
.emojionearea .emojionearea-button {
    background-color: #777;
}


/* Chat */
.topbar {
    background: black;
}
.topbar .topbar-wrapper,
.topbar .topbar-wrapper *,
#modflag-count a,
#flag-count a,
#annotation-count a {
    background-color: transparent;
}
.topbar .topbar-icon-on,
.topbar .topbar-icon-on:hover {
    background-color: #eff0f1;
}
.topbar .js-topbar-dialog-corral > * {
    background-color: black;
}
#header-logo img,
#transcript-logo img {
    background-color: white;
}
#chat-body .messages,
#chat-body .message,
.messages,
.message,
.monologue .timestamp {
    background: none;
    border: none;
}
.message .content a {
    border-bottom: 1px dotted #777;
}
.pager .page-numbers.current,
#chat-body .button,
.button {
    background-color: #444;
}
.calendar,
.calendar-small {
    background-image: none;
}
#chat-body .notification {
    border-bottom: 2px dashed ${textcolor};
}
#chat-body div.message.reply-parent .content,
#chat-body div.message.reply-child .content,
#transcript div.message.reply-parent .content,
#transcript div.message.reply-child .content {
    background-color: #444;
}
.message .mention {
    background-color: #8f6224;
}
.vote-count-container.stars .img {
    background-size: 32px;
    background-position: 0px -343px;
}
.vote-count-container.stars.user-star .img {
    background-size: auto;
    background-position: top left;
    background-position: 0 -110px;
}
#feed-ticker {
    border: 2px dashed ${textcolor};
}
#feed-ticker > *,
#feed-ticker .ticker-item {
    background: none;
    border: none;
}
#chat-body .system-message-container .system-message {
    color: ${textcolor};
}
.mspark .mspbar,
.room-histogram .mspark .mspbar,
.mini-room-chart .mspark .mspbar,
.mini-user-chart .mspark .mspbar {
    background-color: ${bordercolor};
}
.mspark .mspbar.now,
.room-histogram .mspark .mspbar.now,
.mini-room-chart .mspark .mspbar.now,
.mini-user-chart .mspark .mspbar.now {
    background-color: #dd6205;
}
.highlight .content,
#main.select-mode .message.selected .content {
    background-color: #135;
}
#starred-posts > div > ul > li {
    border-bottom-color: #666;
}
#sidebar #info #sound {
    filter: brightness(6.5);
    background-color: transparent;
}
button#sayit-button {
    background: #f48024 url('https://cdn-chat.sstatic.net/chat/Img/mobile/skin/dark/ico-send.svg') 60% 50% no-repeat;
    opacity: 0.8;
}
#header .first-trigger[data-for="sidebar-left"] .ico-hamburger em {
    background: white;
}
#header [data-for="search"] {
    background: url('https://cdn-chat.sstatic.net/chat/Img/mobile/skin/light/ico-search.svg') 50% 50% no-repeat;
}
.sidebar-middle {
    background: transparent;
}


/* New mod interface only */
body .js-flagged-post .bc-black-3 {
    border: 1px dotted #666;
}
.js-post-flag-options {
    background-color: transparent;
}
.js-post-flag-group.js-cleared {
    opacity: 0.5;
}


`.replace(/;/g, ' !important;'));


    document.addEventListener('DOMContentLoaded', function() {
        const $ = unsafeWindow.jQuery || window.jQuery;

        if(location.hostname === "stackoverflow.com") {
            $('.top-bar .-logo .-img').replaceWith(soLogo);
        }
        else if(location.hostname === "chat.stackoverflow.com") {
            $('#footer-logo img').replaceWith(soLogo);
        }
        else if(location.hostname === "superuser.com") {
            $('.site-header .site-header--link img').replaceWith(suLogo);
        }
        else if(location.hostname === "serverfault.com") {
            $('.site-header .site-header--link img').replaceWith(sfLogo);
        }
    });


})();