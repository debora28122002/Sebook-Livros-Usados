function verificarIdTelaAnteriorIntro() {
    var idTelaAnterior = localStorage.getItem('idTelaAtual');
    var elementoTexto = document.getElementById('textBtn2');
    var linkElement = document.createElement('a');

    //usuário logado
    //btn: ao clicar no botão 'entrar' na tela 'login.html" o id 'btn' é armazenado no local Storage.
    if (idTelaAnterior === 'btn') {
        linkElement.textContent = 'Editar Perfil';
        linkElement.href = 'PerfilPessoal.html';
        elementoTexto.appendChild(linkElement);

    //usuário não logado
    //btn3: ao clicar no botão 'Entrar sem login' na tela 'TipoDeAcesso.html" o id 'btn3' é armazenado no local Storage
    } else if (idTelaAnterior === 'btn3') {
        linkElement.textContent = 'Criar Conta';
        linkElement.href = 'TipoDeAcesso.html';
        elementoTexto.appendChild(linkElement);
    } 
  }

