let text = document.querySelector(".text-ready")
let btnHide = document.getElementById("btn-hide");
let btnShow = document.getElementById("btn-show");
btnHide.onclick = function () {
    text.style.opacity = "0";
}
btnShow.onclick = function () {
    text.style.opacity = "1";
}