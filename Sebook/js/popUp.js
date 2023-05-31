document.getElementById('textTrade').addEventListener('click', function () {

  document.getElementById('embaçado').classList.remove('hidden');
});

document.getElementById('cancelarPopUp').addEventListener('click', function () {
  document.getElementById('embaçado').classList.add('hidden');
});

function popUpUserDono() {
  var idTelaAnterior = localStorage.getItem('idTelaAtual');
  var tituloPopUp = document.getElementById('tituloPopUp');
  var textPopUp = document.getElementById('textPopUp');
  var textConfirmPopUp = document.getElementById('textConfirmPopUp');
  var linkElement = document.createElement('a');
  var textTrade = document.getElementById('textTrade');
  var trade = document.getElementById('trade');

  // usuário logado
  //btn: ao clicar no botão 'entrar' na tela 'login.html" o id 'btn' é armazenado no local Storage.
  if (idTelaAnterior === 'btn') {
    tituloPopUp.textContent = 'Iniciando Chat!';
    textPopUp.textContent = 'Por questões de segurança, nossa plataforma oferece a opção de compra diretamente com o vendedor. Está de acordo em finalizar o processo de compra diretamente pelo Whatsapp do Sebo?';
    textConfirmPopUp.textContent = 'Sim';
    var texto = 'Negociar<br>Comprar';
    textTrade.innerHTML = texto;

    //usuário não logado
    //btn3: ao clicar no botão 'Entrar sem login' na tela 'TipoDeAcesso.html" o id 'btn3' é armazenado no local Storage

  } else if (idTelaAnterior === 'btn3') {
    tituloPopUp.textContent = 'Faça o Login!';
    textPopUp.textContent = 'Por questões de segurança, nossa plataforma oferece a opção de compra diretamente com o vendedor apenas para quem tem login na plataforma. Deseja fazer login ou criar uma conta nova?';
    linkElement.textContent = 'Sim';
    linkElement.href = 'TipoDeAcesso.html';
    textConfirmPopUp.appendChild(linkElement);
    var texto = 'Negociar<br>Comprar';
    textTrade.innerHTML = texto;
  } else if (idTelaAnterior === 'button1') {
    trade.style.display = 'none';
  }
}

