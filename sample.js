var menu = document.getElementById("bar");
var items = document.getElementById("home");

items.style.right = "-360px";

menu.onclick = function(){
    if(items.style.right == "-360px"){
        items.style.right = "0";
    }
    else{
        items.style.right = "-360px";
    }
}


