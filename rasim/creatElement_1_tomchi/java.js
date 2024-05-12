let div = document.createElement("div")
let body = document.querySelector("body")
div.className = "div1"



div.style.color = 'red'
div.style = `
width:100px;
height:100px;
border:0px solid black;
margin:auto;
margin-top:100px;   
opoctiy:0; 


`

div.innerHTML = `
<div class="div2"
style="width:50px;
height:50px;
border:1px solid black;
margin:auto;
margin-top:20px;
 border-radius:100%;
 box-shadow:3px 3px 5px black, 7px 7px 10px black inset;
 
"></div>

    `


body.appendChild(div)

let div2 = document.querySelector(".div2")

console.log(div2);