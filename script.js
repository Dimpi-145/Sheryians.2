var h5 = document.querySelector('h5')

var btn = document.querySelector('#add')

var check = 0

btn.addEventListener('click', function(){
    if(check == 0){
        h5.innerHTML = "Friends"
        h5.style.color = "green"
        btn.innerHTML ="Remove Friend"
        check =1
        
    }else{
        h5.innerHTML = "Stranger"
        h5.style.color = "red"
        btn.innerHTML ="Add Friend"
        check =0
    }
})
