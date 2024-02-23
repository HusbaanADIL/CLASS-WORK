var inp=document.querySelector(".inp")
var inp1=document.querySelector(".inp1")
var button=document.querySelector("button")
let  txt =document.querySelector("#txt")
let colour = document.querySelector(".colour")
button.addEventListener( "click", textet)
button.addEventListener( "click", colour)

function textet(){
    let a=  +inp.value  +    +inp1.value ;
    //document.write(a);
    txt.innerHTML = a;

  
}

function colour(){
    let c=  colour.value
document.body.style.backgroundColor = c;
}