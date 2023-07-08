 
const btnH = document.querySelectorAll("button")[0]
const btnJ  = document.querySelectorAll("button")[1]
const btnK = document.querySelectorAll('button')[2]
const btnL = document.querySelectorAll('button')[3]

var audioH = new Audio ('Audio/Harry Potter.mp3');
var audioJ = new Audio ('Audio/carol of the bells.mp3');
var audioK = new Audio ('Audio/Lord Krishna Flute.mp3'); 
var audioL = new Audio ('Audio/Death Note.mp3');

btnH.addEventListener("click",function (){
    
    audioH.play();
    audioJ.pause();
    audioK.pause();
    audioL.pause();
    

 });

 document.querySelectorAll('button')[1].addEventListener("click",function (){
   
    audioJ.play();
    audioH.pause();
    audioK.pause();
   audioL.pause();

 });

 document.querySelectorAll('button')[2].addEventListener("click",function (){
    
    audioK.play();
    audioH.pause();
    audioJ.pause();
    audioL.pause();

 });

 document.querySelectorAll('button')[3].addEventListener("click",function (){
    
    audioL.play();
    audioH.pause();
    audioJ.pause();
    audioK.pause();

 })
     
 
 
 document.addEventListener("keydown", function(e) {
 
    if (e.key === "h") {

      audioH.play();
      audioJ.pause();
      audioK.pause();
      audioL.pause();
      

    } else if (e.key === "j"){

      audioJ.play();
      audioH.pause();
      audioK.pause();
     audioL.pause();
  

    }else if (e.key === "k"){

      audioK.play();
      audioH.pause();
      audioJ.pause();
      audioL.pause();
  

    }else if (e.key === "l"){
          
    audioL.play();
    audioH.pause();
    audioJ.pause();
    audioK.pause();
    }
  });
