function SeboProfile() {
    var idTelaAnterior = localStorage.getItem('idTelaAtual');
    var elementoTexto = document.getElementById('wppText');
    var elementoTexto2 = document.getElementById('wppBox');

    if (idTelaAnterior === 'btn') {
        elementoTexto.textContent = 'Whatsapp do Vendedor';
    } else if (idTelaAnterior === 'btn3') {
        elementoTexto2.style.display = "none";
    }
}

function Sebos() {
    var idBox = localStorage.getItem('idBox');
    var nomeSebo = document.getElementById('nomeSebo');
    var local = document.getElementById('local');

    if (idBox === 'box1') {
        nomeSebo.textContent = 'Sebo da Torre';
        local.textContent = 'Localização: R.\nJosé Bonifácio, n° 674';
    } else if (idBox === 'box2') {
        nomeSebo.textContent = 'Sebo de Casa A.';
        local.textContent = 'Localização: R.\nSenador Soares Meireles';
    } else if (idBox === 'box3') {
        nomeSebo.textContent = 'L. Praça Sebo';
        local.textContent = 'Localização: R.\nSenador Soares Meireles';
    }
}