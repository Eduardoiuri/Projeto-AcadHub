document.getElementById('form-cadastro').addEventListener('submit', function(event) {
    // 1. Impedir o comportamento padrão de recarregar a página
    event.preventDefault(); 

    // 2. Capturar os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;

    // 3. Validação Básica
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem!');
        return;
    }

    // 4. Preparar os dados que serão enviados ao backend
    const dadosParaBackend = {
        nome: nome,
        email: email,
        senha: senha // o backend vai criptografar depois
    };

    console.log("Dados prontos para enviar:", dadosParaBackend);
});
