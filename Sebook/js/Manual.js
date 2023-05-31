function Manual() {
    var idTelaAnterior = localStorage.getItem('idTelaAtual');
    var title1 = document.getElementById('title1');
    var title2 = document.getElementById('title2');
    var title3 = document.getElementById('title3');
    var title4 = document.getElementById('title4');
    var text1 = document.getElementById('text1');
    var text2 = document.getElementById('text2');
    var text3 = document.getElementById('text3');
    var text4 = document.getElementById('text4');
    var textButton = document.getElementById('textButton');

    if (idTelaAnterior === 'button1') {
        textButton.textContent = 'Uso dos Sebos';
        title1.textContent = '1. Por que existe um Login fixo para os Sebos?';
        text1.textContent = 'Para que você possa ter acesso verificado pela nossa equipe na plataforma, ajudando a evitar possíveis fraudes.';
        title2.textContent = '2. Como excluo e edito meus livros?';
        text2.textContent = 'Vá na opção “Meus Livros”, lá terá acesso a uma lista de livros, adicionados por você, aparecerá as opções de excluir (o icone de lixeiro) e editar (icone do lápis), assim como terá acesso a pré-visualização do produto ao clicar na caixa do livro em questão.';
        title3.style.display = 'none';
        text3.style.display = 'none';
        title4.style.display = 'none';
        text4.style.display = 'none';
    } else {
        textButton.textContent = 'Uso dos Leitores';
        title1.textContent = '1. Para que serve o Login?';
        text1.textContent = 'Para que você possa ter acesso aos benefícios extras do app: contato do vendedor e certificados com prêmios (descontos).';
        title2.textContent = '2. Para quê serve a divisão de Regiões?';
        text2.textContent = 'Para facilitar o encontro de sebos próximos da sua localidade.';
        title3.textContent = '3.Como eu encontro livros?';
        text3.textContent = 'Você pode pesquisá-los ao abrir os perfis dos Sebos.';
        title4.textContent = '4. Como eu compro, troco ou faço doação para os Sebos?';
        text4.textContent = 'Você pode entrar em contato com os Sebos atravéz do botão do whatsapp nos perfis dos Sebos, ou você pode ser redirecionado ao chat quando for fechar uma compra.';
    }

}

/* if (idTelaAnterior === 'btn') {
    elementoTexto.textContent = 'Whatsapp do Vendedor';
} else if (idTelaAnterior === 'btn3') {
    elementoTexto2.style.display = "none";
} */
