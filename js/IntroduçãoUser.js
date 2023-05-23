function verificarIdTelaAnteriorIntro() {
    var idTelaAnterior = localStorage.getItem('idTelaAtual');
    var elementoTexto = document.getElementById('textBtn2');
    var paragraphText = document.getElementById('paragraphText');
    var linkElement = document.createElement('a');
    var texto1 = document.getElementById('texto1');
    var linkElement2 = document.createElement('a');
    var imgElement = document.createElement('img');
    var imagem1 = document.getElementById('imagem1');

    //usuário logado
    //btn: ao clicar no botão 'entrar' na tela 'login.html" o id 'btn' é armazenado no local Storage.
    if (idTelaAnterior === 'btn') {
        paragraphText.textContent = 'NESSA PLATAFORMA DISPONIBILIZAMOS TODO O SUPORTE NECESSÁRIO PARA QUE VOCÊ, LEITOR DE LIVROS USADOS, POSSA TER MAIS FACILIDADE NA PROCURA DE LIVROS ACESSÍVEIS, ENTRE OUTRAS VANTAGENS. NOSSA META É APROXIMAR O CONTATO ENTRE SEBOS E LEITORES ATIVOS. QUALQUER DÚVIDA, ENTRE NO MENU, USE O "FALE CONOSCO" OU TIRE SUAS DÚVIDAS NO "MANUAL SEBOOK".';
        
        linkElement.textContent = 'Editar Perfil';
        linkElement.href = 'PerfilPessoal.html';
        elementoTexto.appendChild(linkElement);

        linkElement2.textContent = 'Pesquisar Sebos';
        linkElement2.href = 'SebosLogado.html';
        texto1.appendChild(linkElement2);

        imgElement.src = 'img/search.png';
        imagem1.appendChild(imgElement);
    //usuário não logado
    //btn3: ao clicar no botão 'Entrar sem login' na tela 'TipoDeAcesso.html" o id 'btn3' é armazenado no local Storage
    } else if (idTelaAnterior === 'btn3') {
        linkElement2.textContent = 'Pesquisar Sebos';
        linkElement2.href = 'SebosLogado.html';
        texto1.appendChild(linkElement2);

        linkElement.textContent = 'Criar Conta';
        linkElement.href = 'TipoDeAcesso.html';
        elementoTexto.appendChild(linkElement);
        paragraphText.textContent = 'NESSA PLATAFORMA DISPONIBILIZAMOS TODO O SUPORTE NECESSÁRIO PARA QUE VOCÊ, LEITOR DE LIVROS USADOS, POSSA TER MAIS FACILIDADE NA PROCURA DE LIVROS ACESSÍVEIS, ENTRE OUTRAS VANTAGENS. NOSSA META É APROXIMAR O CONTATO ENTRE SEBOS E LEITORES ATIVOS. QUALQUER DÚVIDA, ENTRE NO MENU, USE O "FALE CONOSCO" OU TIRE SUAS DÚVIDAS NO "MANUAL SEBOOK".';
    
        imgElement.src = 'img/search.png';
        imagem1.appendChild(imgElement);
    }else{
        linkElement2.textContent = 'Meus Livros';
        linkElement2.href = 'MeusLivros.html';
        texto1.appendChild(linkElement2);

        linkElement.textContent = 'Editar Perfil';
        linkElement.href = 'EditarPerfilUser.html';
        elementoTexto.appendChild(linkElement);

        paragraphText.textContent = 'NESSA PLATAFORMA DISPONIBILIZAMOS TODO O SUPORTE NECESSÁRIO PARA QUE VOCÊ, VENDEDOR(A) DE LIVROS USADOS, POSSA TER UM APOIO E DIVULGAÇÃO MAIOR EM RELAÇÃO AO SEU TRABALHO. NOSSA META É APROXIMAR O CONTATO ENTRE SEBOS E LEITORES ATIVOS. QUALQUER DÚVIDA, ENTRE NO MENU, USE O "FALE CONOSCO" OU TIRE SUAS DÚVIDAS NO "MANUAL SEBOOK".';
        imgElement.src = 'img/book.png';
        imagem1.appendChild(imgElement);
    }
  }

