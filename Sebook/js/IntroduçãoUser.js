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
        paragraphText.textContent = 'Nessa plataforma disponibilizamos todo o suporte necessário para que você, leitor de livros usados, possa ter mais facilidade na procura de livros acessíveis, entre outras vantagens. Nossa meta é aproximar o contato entre sebos e leitores ativos. Qualquer dúvida, entre no menu, use o "Fale Conosco" ou tire suas dúvidas no "Manual Sebook".';

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
        paragraphText.textContent = 'Nessa plataforma disponibilizamos todo o suporte necessário para que você, leitor de livros usados, possa ter mais facilidade na procura de livros acessíveis, entre outras vantagens. Nossa meta é aproximar o contato entre sebos e leitores ativos. Qualquer dúvida, entre no menu, use o "Fale Conosco" ou tire suas dúvidas no "Manual Sebook".';

        imgElement.src = 'img/search.png';
        imagem1.appendChild(imgElement);
    } else {
        linkElement2.textContent = 'Meus Livros';
        linkElement2.href = 'MeusLivros.html';
        texto1.appendChild(linkElement2);

        linkElement.textContent = 'Editar Perfil';
        linkElement.href = 'EditarPerfilUser.html';
        elementoTexto.appendChild(linkElement);

        paragraphText.textContent = 'Nessa plataforma disponibilizamos todo o suporte necessário para que você, vendedor(a) de livros usados, possa ter um apoio e divulgação maior em relação ao seu trabalho. Nossa meta é aproximar o contato entre sebos e leitores ativos. Qualquer dúvida, entre no menu, use o "Fale Conosco" ou tire suas dúvidas no "Manual Sebook".';
        imgElement.src = 'img/book.png';
        imagem1.appendChild(imgElement);
    }
}

