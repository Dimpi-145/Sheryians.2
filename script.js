var inc = document.querySelector("#inc")
var h2 = document.querySelector("h2")
var dec = document.querySelector("#dec")

var a = 0
const MIN = 0
const MAX = 10

function updateDisplay(){
    h2.textContent = a
    if(a <= MIN){
        dec.setAttribute('aria-disabled','true')
    } else {
        dec.removeAttribute('aria-disabled')
    }
    if(a >= MAX){
        inc.setAttribute('aria-disabled','true')
    } else {
        inc.removeAttribute('aria-disabled')
    }
}

inc.addEventListener('click',function(){
    if(a < MAX) a++
    updateDisplay()
})

dec.addEventListener('click',function(){
    if(a > MIN) a--
    updateDisplay()
})

updateDisplay()