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
    var fotoSebo = document.getElementById('fotoSebo');

    if (idBox === 'box1') {
        fotoSebo.src='img/seboDaTorre.jpg';
        nomeSebo.textContent = 'Sebo da Torre';
        local.textContent = 'Localização: Rua José Bonifácio, n° 674';
    } else if (idBox === 'box2') {
        fotoSebo.src='img/seboMarela.jpg';
        nomeSebo.textContent = 'Sebo de Casa Amarela';
        local.textContent = 'Localização: Rua Senador Soares Meireles';
    } else if (idBox === 'box3') {
        fotoSebo.src='img/seboPraçinha.jpg';
        nomeSebo.textContent = 'Largo da Praça do Sebo';
        local.textContent = 'Localização: Rua da roda';
    }
}