window.onload = window.onresize = function () {
    var window_height = window.innerHeight;
    var flexbox = document.querySelectorAll(".flexbox");
    var button = document.querySelectorAll(".main");
    console.log(button.style.height);
    console.log(flexbox.style.height);
    flexbox.style.height = window_height;
    button.style.height = window_height;
}