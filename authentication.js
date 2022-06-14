 async function register(){
    const a=document.getElementById("username").value;
    const b=document.getElementById("email").value;
    const c=document.getElementById("year").value;
    const d=document.getElementById("mobile").value;
    const e=document.getElementById("password").value;
    console.log(a,b,c,d,e);
     await fetch("https://orgaplants.pythonanywhere.com/register/",{
        method: 'POST',
       
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "name":a,
          "email":b,
          "year_of_passing":c,
          "mobilenumber":d,
          "password":e
        })
        
      }).then((response)=>console.log(response.json())).catch((error) => {
        console.error('Error:', error);
      });
        
      
        
    
};