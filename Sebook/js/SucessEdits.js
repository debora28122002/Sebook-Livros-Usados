document.addEventListener('DOMContentLoaded', function () {
    const editPerfil = ['Perfil editado com sucesso!<br><br>', 'Verifique se um e-mail de confirmação foi enviado.<br><br>', 'Voltar ao <br>início', 'IntroduçãoUser.html']
    const editLivro = ['Livro editado com sucesso!<br><br>', 'Verifique se o livro foi editado corretamente no seu perfil.<br><br>', 'Ir ao perfil', 'VerLivros.html']
    const addLivro = ['Livro adicionado com sucesso!<br><br>', 'Verifique se o livro foi adicionado corretamente no seu perfil.<br><br>', 'Ver livros', 'VerLivros.html']
    var conteudo = localStorage.getItem('confirmeishon');
    var link = document.getElementById('confirmLink');

    if (conteudo == 'editPerfil') {
        document.getElementById('confirm1').innerHTML = editPerfil[0];
        document.getElementById('confirm2').innerHTML = editPerfil[1];
        document.getElementById('confirmBtn').innerHTML = editPerfil[2];
        link.href = editPerfil[3];
    }
    if (conteudo == 'editLivro') {
        document.getElementById('confirm1').innerHTML = editLivro[0];
        document.getElementById('confirm2').innerHTML = editLivro[1];
        document.getElementById('confirmBtn').innerHTML = editLivro[2];
        link.href = editLivro[3];
    }
    if (conteudo == 'addLivro') {
        document.getElementById('confirm1').innerHTML = addLivro[0];
        document.getElementById('confirm2').innerHTML = addLivro[1];
        document.getElementById('confirmBtn').innerHTML = addLivro[2];
        link.href = addLivro[3];
    }
    localStorage.removeItem('confirmeishon');
});