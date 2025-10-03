const username = document.getElementById('username');
const password = document.getElementById('password');

const loginButton = document.getElementById('loginButton');

const url = 'http://localhost:3000/api/login';

const login = async (name,pass) =>{
    if(name === '' || pass === ''){
        alert('Please fill in all fields');
        return;
    }
    await verificateDb();
}

async function verificateDb(){
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    const user = {
        username: username.value,
        password: password.value
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    const data = await response.json();

    if(data.success){
        localStorage.setItem('token', data.token);
        window.location.href = '/dashboard.html';
    } else {
        alert('Login failed: ' + data.message);
    }
}