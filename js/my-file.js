
let up = document.querySelector(".btn");
window.onscroll = function(){
    if(this.scrollY >= 1000){
        up.classList.remove("hide")
    }
    else{
        up.classList.add("hide")
    }
};
up.onclick = function(){
    window.scrollTo({
        top:0,
    })
}

