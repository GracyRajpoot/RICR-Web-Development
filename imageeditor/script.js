 let b=1;
 c=1;
 g=0;
 s=0;
 i=0;

 const img=document.getElementById("image").src;
 console.log(img);

 if(img === "http://127.0.0.1:5500/imageeditor/index.html"){
    document.getElementById("image").style.display ="none";
 }
 /*
 else{
    document.getElementById(uploadLabel).style.display ="none";
 }*/

 function UploadImage(){
    const file = document.getElementById("Upload").files[0];

    const  fileURL= URL.createObjectURL(file);

    document.getElementById("image").src=fileURL;
    document.getElementById("image").style.display="block";
    document.getElementById("UploadLabel").style.display="none";
    
 }

 function  chnageBrightness(){
   const value = document.getElementById("Brigthness");
   document.getElementById("image").style.filter=brightness(${value*2/100})
 }

 function applyFilter(){
   document.getElementById("image").style.filter
 }