






let div = document.createElement("div")
let body = document.querySelector("body")
body.style.background = 'red'

div.className = "div1"



div.style.color = 'red'
div.style = `
width:100px;
height:100px;
border:1px solid black;
margin:auto;
margin-top:100px;   
box-shadow:3px 3px 0px black; 
border-radius:0px 0px 100px 100px;
rotate:0deg;
background-color:blue;

`

div.innerHTML = `
<div class="div2"
style="width:50px;
height:50px;
border:1px solid black;
margin:auto;
margin-top:20px;
 border-radius:100%;
 box-shadow:3px 3px 0px black;
 cursor:no-drop;


">
<div class="div2_2"

style="

font-size:10px;
text-align:center;
font-size:30px
width:10px;
height:10px;
margin:auto;
margin-top:15px;
color:aqua;
letter-spacing: 3px;






">off
</div>
</div>

    `


body.appendChild(div)





// div.addEventListener("click", () => {
//   if(body.style.background < 'red'){
//     body.style.background = 'red'
//   }else{
//     body.style.background = 'blue'
//   }



// })

let div2 = document.querySelector(".div2")
let div22 = document.querySelector(".div2_2")
console.log(div22);

div2.addEventListener("click", () => {
    if (body.style.background != 'green') {
        body.style.background = 'green'

        div2.style = `
        cursor:no-drop;

width:50px;
height:50px;
border:1px solid black;
margin:auto;
margin-top:20px;
 border-radius:100%;
 box-shadow:3px 3px 0px black inset;
 
`
        div22.textContent = 'on'
    } else {
        body.style.background = 'red'


        div2.style = `
        cursor:no-drop;

width:50px;
height:50px;
border:1px solid black;
margin:auto;
margin-top:20px;
 border-radius:100%;
 box-shadow:3px 3px 0px black ;
 
`
        div22.textContent = 'off'

    }

})




// console.log(div2);