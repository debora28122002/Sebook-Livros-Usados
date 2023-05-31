var idTelaAnterior = localStorage.getItem('idTelaAtual');
if (idTelaAnterior === 'btn'){
    function editDataPerfil() {
        alterNumber = document.getElementById('telefone').value;
        alterPassword = document.getElementById('senha').value;
        N = alterNumber.split("")
        S = alterPassword.split("")
        if (N.length == 8) {
            alterNumber = '9.' + N[0] + N[1] + N[2] + N[3] + '-' + N[4] + N[5] + N[6] + N[7];
            localStorage.setItem('numero', alterNumber);
        }
        if (N.length == 9) {
            if (N[0] == 9) {
                alterNumber = N[0] + N[1] + N[2] + N[3] + N[4] + N[5] + N[6] + N[7] + N[8]
                localStorage.setItem('numero', alterNumber);
            }
            else {
                window.alert('Nono digito incoerente')
                return;
            }
        }
        if (N.length < 8 || N.length > 9) {
            window.alert('Quantidade de algarismos incoerente')
            return;
        }
        if (S.length >= 6) {
            localStorage.setItem('senha', alterPassword);
            editPerfil();
            window.location.href = 'Confirmação.html'
        }
        else {
            window.alert('Senha precisa ter mais de 5 caracteres')
            return;
        }
    }
}