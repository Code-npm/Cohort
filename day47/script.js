var heart=document.querySelector('i')
var img=document.querySelector('img')

img.addEventListener('click', function(){
     heart.style.opacity=1
     heart.style.transform="translate(-50%,-50%) scale(1) rotate(0deg)"

     setTimeout(function(){
       heart.style.transform="translate(-50%,-200%) scale(1) rotate(60deg)"

     },800)
     setTimeout(function(){
       heart.style.opacity=0
     },900)
     setTimeout(function(){
       heart.style.transform="translate(-50%,-50%) scale(0) rotate(-60deg)"
     },1100)
})
