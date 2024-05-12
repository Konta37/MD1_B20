let btn = document.getElementById("btn")
let b = document.querySelector(".show-nofi");
btn.onclick = function(){
    if (b.style.opacity !=1) {
        b.style.opacity ="1"
    }
    else{
        b.style.opacity ="0"
    }
}
let btn2 =  document.getElementById("icon-hide");
btn2.onclick = function(){
    b.style.opacity ="0"
}