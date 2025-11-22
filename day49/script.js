document.body.addEventListener("keydown" , function(dets){
    console.log(dets)
   if(dets.key=="a"){
    document.getElementById('myAudio1').play()
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
   
})