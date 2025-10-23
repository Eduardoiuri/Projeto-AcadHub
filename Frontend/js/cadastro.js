document.getElementById('form-cadastro').addEventListener('submit', function(event) {
    
    event.preventDefault(); 

    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;

    
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem!');
        return;
    }

    
    const dadosParaBackend = {
        nome: nome,
        email: email,
        senha: senha 
    };

    console.log("Dados prontos para enviar:", dadosParaBackend);
});
