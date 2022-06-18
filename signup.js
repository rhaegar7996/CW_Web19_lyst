let form = document.querySelector("form") 
    
form.addEventListener("submit", mySignup);
let userData = JSON.parse(localStorage.getItem('userData')) || [];
function mySignup(event)
{
    event.preventDefault();
    let data = {
 
    email: form.email.value,
    password: form.pass.value,
         }
   if(checkEmails(data.email)===true)
  {
      userData.push(data);
      localStorage.setItem('userData',JSON.stringify(userData))
      alert('signup successful')
      window.location.href = "signin.html";
  }
  else{
      alert('Account already exists')
  }
   
}



function checkEmails(email)
{
    let filtered = userData.filter(function (element)
    {
return email === element.email;
    })
    if(filtered.length >0)
    {
        return false;
    }
    else{
        return true;
    }
}