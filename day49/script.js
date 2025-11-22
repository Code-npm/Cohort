var audio1=document.querySelector('#Audio1')
var audio2=document.querySelector('#Audio2')
var audio3=document.querySelector('#Audio3')
var audio4=document.querySelector('#Audio4')
var audio5=document.querySelector('#Audio5')
var audio6=document.querySelector('#Audio6')
var audio7=document.querySelector('#Audio7')
var audio8=document.querySelector('#Audio8')
var audio9=document.querySelector('#Audio9')
var h2=document.querySelector('h2')

document.body.addEventListener("keydown" , function(dets){
    console.log(dets)
   if(dets.key=="a"){
        document.getElementById('myAudio1').play();
        
   }
   else if(dets.key=="d"){
       document.getElementById('myAudio2').play()
   }
   else if(dets.key=='e'){
       document.getElementById('myAudio3').play()
   }
   else if(dets.key=='b'){
       document.getElementById('myAudio4').play()
   }
   else if(dets.key=='c'){
       document.getElementById('myAudio5').play()
   }
   else if(dets.key=='f'){
        document.getElementById('myAudio6').play()
   }
   else if(dets.key=='g'){
        document.getElementById('myAudio7').play()
   }
   else if(dets.key=='h'){
        document.getElementById('myAudio8').play()
   }
   else if(dets.key=='i'){
        document.getElementById('myAudio9').play()
   }
   else{
       h2.innerHTML="Press Any key From A to I"
   }
   
})