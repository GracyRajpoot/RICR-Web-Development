function Submit(){
    const nm = document.getElementById("fullName").value.trim()
    const em = document.getElementById("email").value.trim()
    const ph = document.getElementById("phone").value.trim()
    const db = document.getElementById("dob").value.trim()

    //validate
   // if(data is invalid) 
   //alert()

   //we wannt only formal form (not use = .  @  numbers );


      if(!/^[A-Za-z]+&/.test(nm))
    {
             alert("Wrong input");
             return;
    }
      if(!/^[A-Za-z]+&/.test(nm))
    {
             alert("Wrong Name");
             return;
    }

      if(!/^[\w\.]+@(gmail|outlook|ricr|yahoon)\.(com|in|co.in)&/.test(em)){
        alert("Wrong email");
        return;
      }

        if(!/^[6-9]\d{9}&/.test(ph))
    {
             alert("Wrong phone number");
             return;
    }

    const currentdate = new Date();
    console.log(currendate);

    

    
    const data = {
        FullName: nm,
        Email:em,
        Phone:ph,
        DOB:db,
    };

    console.log(data);
}