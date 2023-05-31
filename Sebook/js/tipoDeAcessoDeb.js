const removerClasseBtn = document.getElementById('textbtn');
removerClasseBtn.addEventListener('click', function () {
    localStorage.setItem('removerClasse', 'false');
    window.location.href = 'SeboProfile.html';
});
function btn3() {
    localStorage.setItem('idTelaAtual', 'btn3');
}