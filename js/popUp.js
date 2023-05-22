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

// usuário logado
//btn: ao clicar no botão 'entrar' na tela 'login.html" o id 'btn' é armazenado no local Storage.
  if (idTelaAnterior === 'btn') {
    tituloPopUp.textContent = 'Iniciando Chat!';
    textPopUp.textContent = 'Por questões de segurança, nossa plataforma oferece a opção de compra diretamente com o vendedor. Está de acordo em finalizar o processo de compra diretamente pelo Whatsapp do Sebo?';
    textConfirmPopUp.textContent = 'Sim';

//usuário não logado
//btn3: ao clicar no botão 'Entrar sem login' na tela 'TipoDeAcesso.html" o id 'btn3' é armazenado no local Storage

  } else if (idTelaAnterior === 'btn3') {
    tituloPopUp.textContent = 'Faça o Login!';
    textPopUp.textContent = 'Por questões de segurança, nossa plataforma oferece a opção de compra diretamente com o vendedor apenas para quem tem login na plataforma. Deseja fazer login ou criar uma conta nova?';
    linkElement.textContent = 'Sim';
    linkElement.href = 'TipoDeAcesso.html';
    textConfirmPopUp.appendChild(linkElement);
  } 
}

function Book(){
  var idBook = localStorage.getItem('idBook');
  var fotoBook = document.getElementById('fotoBook');
  var nomeBook = document.getElementById('nomeBook');
  var caracteristicas = document.getElementById('caracteristicas');
  var imgElement = document.createElement('img');

  if(idBook === 'book1'){
    nomeBook.textContent = 'Vida e Morte: Crespúsculo Reimaginado';
    var texto = 'Autor(a): Stephenie Meyer<br>Ano: 2015<br>Unidades: 3<br>Preço: R$ 30,50';
    caracteristicas.innerHTML = texto;
    imgElement.src = 'img/crepusculo.png';
    fotoBook.appendChild(imgElement);
  } else if(idBook === 'book2'){
    nomeBook.textContent = 'Harry Potter e o Cálice de Fogo';
    var texto = 'Autor(a): J.K.Rowling<br>Ano: 2000<br>Unidades: 5<br>Preço: R$ 20,00';
    caracteristicas.innerHTML = texto;
    imgElement.src = 'img/harryp.png';
    fotoBook.appendChild(imgElement);
  }
}