var btn =document.querySelector("button")
var h2=document.querySelector('h2')

document.body.addEventListener("keydown" , function(dets){
    console.log(dets)
   if(dets.key=="a"){
        document.getElementById('myAudio1').play();
        btn.style.transform="scale(0.9)"
        
        h2.innerHTML="Pressed A"
   }
   else if(dets.key=="b"){
       document.getElementById('myAudio2').play()
       btn.style.transform="scale(0.9)"
       
       h2.innerHTML="Pressed B"
   }
   else if(dets.key=='c'){
       document.getElementById('myAudio3').play()
       btn.style.transform="scale(0.9)"
       h2.innerHTML="Pressed C"
   }
   else if(dets.key=='d'){
       document.getElementById('myAudio4').play()
       btn.style.transform="scale(0.9)"
       h2.innerHTML="Pressed D"
   }
   else if(dets.key=='e'){
       document.getElementById('myAudio5').play()
       btn.style.transform="scale(0.9)"
       h2.innerHTML="Pressed E"
   }
   else if(dets.key=='f'){
        document.getElementById('myAudio6').play()
        btn.style.transform="scale(0.9)"
        h2.innerHTML="Pressed F"
   }
   else if(dets.key=='g'){
        document.getElementById('myAudio7').play()
        btn.style.transform="scale(0.9)"
        h2.innerHTML="Pressed G"
   }
   else if(dets.key=='h'){
        document.getElementById('myAudio8').play()
        btn.style.transform="scale(0.9)"
        h2.innerHTML="Pressed H"
   }
   else if(dets.key=='i'){
        document.getElementById('myAudio9').play()
        btn.style.transform="scale(0.9)"
        h2.innerHTML="Pressed I"
   }
   else{
       h2.innerHTML="Press Any key From A to I"
   }
   
})