var img=document.querySelector('.img')
var card=document.querySelector('.card')
var love=document.querySelector('.love')
img.addEventListener('click' , function(){
     love.style.opacity='1'
     love.style.transform="translate(-50%,-50%) scale(1) rotate(0deg);"
     love.style.backgroundColor='pink'
})