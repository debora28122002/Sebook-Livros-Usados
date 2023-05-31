function btn() {
    var idTelaAnterior = localStorage.getItem('idTelaAtual');
    //
    if (idTelaAnterior === 'button1') {
        localStorage.setItem('idTelaAtual', 'button1');
    } else {
        localStorage.setItem('idTelaAtual', 'btn');
    }
}