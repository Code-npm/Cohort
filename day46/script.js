var h1=document.querySelector('h1')
var btn=document.querySelector('button')
var inner=document.querySelector('.inner')
var h2=document.querySelector('h2')
var grow=0
btn.addEventListener('click' , function(){
    btn.style.pointerEvents="none"
    var num=50 + Math.floor(Math.random()*50)
    h2.innerHTML=`Your file will Dowload in ${num /10} sec`
       var int= setInterval(() => {
          grow++
        h1.innerHTML=`${grow}%`
        inner.style.width = grow+'%'
        btn.innerHTML="Dowloading"
    }, num);
    
    setTimeout(()=>{
        clearInterval(int)
        btn.innerHTML="Dowloaded"
    },num *100)
    
      btn.style.backgroundColor="lightgreen"
})