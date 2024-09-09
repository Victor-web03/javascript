
let random = Math.floor(Math.random()*11)
document.getElementById(`game`)
function guess(){
    let input = document.getElementById(`guessinput`).value
    let  worc  = document.getElementById(`worc`);
   
    if (input == random) {
        worc.innerHTML =`Winner !!!<br>The correct number is ${random}`
    } else{
        worc.innerHTML = `you are wrong <br> the correct number is  ${random}`
    }

}