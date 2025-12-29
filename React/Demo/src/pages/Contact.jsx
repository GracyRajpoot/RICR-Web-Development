import React, { useState } from "react";




const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const[isLoading,setIsLoading]= useState(false);


  const handleClearForm= ()=>{
    setFullName("");
    setEmail("");
    setMessage("");
  };
  
  

  const handleSubmit=(e)=>{
    e.preventDefault();
    const data ={
      fullName,
      email,
      message,
    };
    console.log(data);

    handleClearForm()  /*as a function*/
  }

  const handLeSubmit =async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try{
      const response = await fetch(
'https://official-joke-api.appspot.com/jokes/random'
      );
      const data={
        fullName,
        email,
        message
      };
      console,Log(data);
    }catch(error){
      console.Log(error.message);
    }finally{
      setIsLoading(false);
    }
    handleClearForm();
  };



  return (
    <>
      <div className="text-center">
        <h1>Contact Us</h1>

        <div className="container">
          <form onReset={handleClearForm} onSubmit={handleSubmit}>

            {/* Full Name */}
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input type="text"
               id="fullName"
               value={fullName} 
               onChange={(e)=>setFullName(e.target.value)}
              placeholder="Enter your name"
              className="text-primary" />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email">Email</label>
              <input type="email"
               id="email"
               value={email} 
               onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter your name"
              className="text-primary" />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message"
               value={message} 
               onChange={(e)=>setMessage(e.target.value)}
              placeholder="Enter your name"
              className="text-primary"
              ></textarea>
            </div>
                <button type="reset" className="btn btn-success">Clear</button>
              <button type="submit" className="btn btn-danger">
            
                {
                isLoading ? "Loading" : "Submit"
                }
              </button>
          
             
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
