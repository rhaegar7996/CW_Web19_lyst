 
let form = document.querySelector('form');
let userData = JSON.parse(localStorage.getItem('userData')) || [];
let loggedIn = Boolean(localStorage.getItem('loggedIn')) || false;
if(loggedIn) {
        window.location.href = 'index.html';
}

form.addEventListener('submit',function(e)
{  e.preventDefault;
    let data = {
        email: form.email.value,
        password: form.pass.value,
    }
    if(checkSignin(data.email,data.password)===true)
    {
        localStorage.setItem('signin',JSON.stringify(data));
        loggedIn = true;
            localStorage.setItem('loggedIn',loggedIn);
            alert('login successful');
       
        window.location.href = "index.html";
    }
    else{
        alert('Wrong username or password')
    }
})

function checkSignin(email,password)
{
    let filter = userData.filter(function(element){
        return element.email === email &&
        element.password === password
    })
    if(filter.length>0){
        return true;
    }
    else{
        return false;
    }
}
