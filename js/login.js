function Voltar(){
    var idTelaAnterior = localStorage.getItem('idTelaAtual');
    var back = document.getElementById('back');
    if(idTelaAnterior === 'button1'){
        back.href = 'index.html';
    }else{
        back.href = 'TipoDeAcesso.html';
    }
}