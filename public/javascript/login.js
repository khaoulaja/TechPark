async function signupFormHandler(event){
    event.preventDefault();
    const username= document.querySelector('#username-signup').value.trim();
    const password= document.querySelector('#password-signup').value.trim();

    if(username && password){
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {'Content-Type' : 'application/json'}
        });
        // check the response status
        if(response.ok){
            username.value='';
            password.value='';
            document.location.replace('/login');
        }else{
            alert("Username used before OR password less than 6 characters!");
        }
    }
    
}
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

async function loginFormHandler(event){
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if(username && password){
        const response = await fetch('/api/users/login',{
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json'}
        });
        if(response.ok){
            document.location.replace('/dashboard')
        }else {
            alert("Incorrect username or password!");
        }
    }
}


document.querySelector('.login-form').addEventListener('submit', loginFormHandler)