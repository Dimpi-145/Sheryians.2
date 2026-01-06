var btn = document.querySelector('button')
var main = document.querySelector('main')
var arr = ['hey! I am Dimpi', 'Learning with Sheryians is fun.', 'harsh bahiya ki jai ho', 'Sarthak bhaiya is cute', 'keep motivated']

btn.addEventListener('click',()=>{

    var h1 = document.createElement('h1')
    var x = Math.random()*80
    var y = Math.random()*80
    var r = Math.random()*360
    var scl = Math.random()*3

    var a = Math.floor(Math.random()*arr.length)
    var c1 = Math.floor(Math.random()*256)
    var c2 = Math.floor(Math.random()*256)
    var c3 = Math.floor(Math.random()*256)

    h1.innerHTML = arr[a]

    h1.style.position = 'absolute'
    h1.style.color = `rgb(${c1},${c2},${c3})`

    h1.style.left = x+'%'
    h1.style.top = y+'%'
    h1.style.rotate = r+'deg'
    h1.style.scale = scl
    

    
    main.appendChild(h1)
    // var div = document.createElement('div')
    // var x = Math.random()*100
    // var y = Math.random()*100
    // var r = Math.random()*360

    // var c1 = Math.floor(Math.random()*256)
    // var c2 = Math.floor(Math.random()*256)
    // var c3 = Math.floor(Math.random()*256)

    // div.style.height = '50px'
    // div.style.width = '50px'
    // div.style.position = 'absolute'
    // div.style.backgroundColor = `rgb(${c1},${c2},${c3})`

    // div.style.top = y+'%'
    // div.style.left = x+'%'
    // div.style.rotate = r+'deg'
   
    // main.appendChild(div)
})