// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// JavaScript to change text shadow over time
let title = document.getElementById("animatedTitle");
let colors = ["#ff0000", "#f08080", "#e9967a", "#dc143c"];
let i = 0;

setInterval(() => {
    title.style.textShadow = `0 0 10px ${colors[i]}, 0 0 20px ${colors[i]}`;
    i = (i + 1) % colors.length;
}, 500);
