const botao = document.getElementById('saudacao');
const mensagemSaudacao = document.getElementById('mensagemSaudacao');

botao.addEventListener('click', function() {
    // Escondendo o botão
    botao.style.opacity = '0'; 
    botao.style.transform = 'scale(0.8)';

    // Quando a transição do botão terminar mostra a mensagem
    setTimeout(() => {
        botao.style.display = 'none';

        mensagemSaudacao.innerHTML = "Seja bem-vindo(a)!<br>Agora que você me conhece um pouco melhor, confira meus hobbies abaixo!"; 
        
        mensagemSaudacao.classList.add('visivel'); 
    }, 500); // 500ms (0.5 segundos) é o tempo da transição do botão
});