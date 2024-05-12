let b = document.querySelector(".box-1");
let c = document.querySelector(".box-2");
let d = document.querySelector(".box-3");
let li = document.getElementsByTagName("li");
console.log(li);
li[0].onmouseover = function(){
    if (b.style.background == "aqua") {
        b.style.background = "red";
    }
    else{
        b.style.background = "aqua"
    }

}
li[1].onmouseover = function(){
    if (c.style.background == "rgb(201, 213, 194)") {
        c.style.background = "red";
    }
    else{
        c.style.background = "rgb(201, 213, 194)"
    }
}
li[2].onmouseover = function(){
    if (d.style.background == "rgb(197, 191, 65)") {
        d.style.background = "red";
    }
    else{
        d.style.background = "rgb(197, 191, 65)"
    }
}
//Chưa có cách thoát hover thì màu đổi lại