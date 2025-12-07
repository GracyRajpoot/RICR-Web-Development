function Input(char){
   document.getElementById("display").innerText +=char;

   if(char ==='='){
     document.getElementById("display").innerText="reset";  
    }else if(char ==='c'){
        document.getElementById("display").innerText ="";
    }
    else{
    }
}