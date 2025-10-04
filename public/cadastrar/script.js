const name = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

const url = 'http://localhost:3000/usuarios';

document.getElementById('registerForm').addEventListener('submit', (event) => {
    event.preventDefault();
    cadastrarUsuario();
    window.location.href = '../public/login.html';
});


async function cadastrarUsuario(){
    const response = await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: name.value,   
            email: email.value,
            senha: senha.value
        })
    });

    if (response.ok) {
        const data = await response.json();
        console.log('Usuário cadastrado com sucesso:', data);
    } else {
        console.error('Erro ao cadastrar usuário:', response.statusText);
    }
}

