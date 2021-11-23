function alertBox(){
    alert("HELLO ...GOOD MORNING..")
}

function mob1(){
    alert("Thanks for purchasing a phone from us..!")
}
function mob2(){
    alert("Thanks for purchasing a phone from us..!")
}
function mob3(){
    alert("Thanks for purchasing a phone from us..!")
}
function mob4(){
    alert("Thanks for purchasing a phone from us..!")
}







function del1(){
    var table=document.getElementsByTagName("tr")
    table[1].style.display="none"
    
}


function del2(){
    var table=document.getElementsByTagName("tr")
    table[2].style.display="none"
    
}


function del3(){
    var table=document.getElementsByTagName("tr")
    table[3].style.display="none"
    
}


function del4(){
    var table=document.getElementsByTagName("tr")
    table[4].style.display="none"
    
}





function bulbToggler(id, element){
    if(id==1){
        element.src = "./images/car1.jpg"
    }else{
        element.src = "./images/bike1.png"

    }
    
}





var count = 0;
var btn = document.getElementById("btn");
var disp1 = document.getElementById("display");

btn.onclick = function () {
    count++;
    disp1.innerHTML = count;
}
var count1 = -100;
var btn = document.getElementById("btn2");
var disp = document.getElementById("display");

btn.onclick = function () {
    count--;
    disp.innerHTML = count;
}