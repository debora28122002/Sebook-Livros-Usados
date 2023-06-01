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

function Book() {
  var idBook = localStorage.getItem('idBook');
  var fotoBook = document.getElementById('fotoBook');
  var nomeBook = document.getElementById('nomeBook');
  var caracteristicas = document.getElementById('caracteristicas');
  var imgElement = document.createElement('img');
  imgElement.style.maxWidth = '150px';
  imgElement.style.borderRadius = '25px';
  imgElement.style.border = '3px solid #4B311C';

  if (idBook === 'book1') {
    var autorBook = document.getElementById('autorBook');
    var anoBook = document.getElementById('anoBook');
    var generoBook = document.getElementById('generoBook');
    var unidadesBook = document.getElementById('unidadesBook');
    var precoBook = document.getElementById('precoBook');

    nomeBook.textContent = 'Nome: ' + localStorage.getItem('titulo1');
    autorBook.textContent = 'Autor(a): ' + localStorage.getItem('autor1');
    anoBook.textContent = 'Ano: ' + localStorage.getItem('ano1');
    generoBook.textContent = 'Gênero: ' + localStorage.getItem('genero1');
    unidadesBook.textContent = 'Unidades: ' + localStorage.getItem('unidades1');
    precoBook.textContent = 'Preço: ' + localStorage.getItem('preco1');
    imgElement.src = 'img/crepusculo.jpg';

    fotoBook.appendChild(imgElement);
  } else if (idBook === 'book2') {
    nomeBook.textContent = 'Harry Potter e o Cálice de Fogo';
    var texto = 'Autor(a): J.K.Rowling<br>Ano: 2000<br>Gênero: Fantasia<br>Unidades: 5<br>Preço: R$ 20,00';
    caracteristicas.innerHTML = texto;
    imgElement.src = 'img/harryp.jpg';
    fotoBook.appendChild(imgElement);

  } else if (idBook === 'book3') {
    nomeBook.textContent = 'A Biografia Humana';
    var texto = 'Autor(a): Laura Gutman<br>Ano: 2016<br>Gênero: Desenvolvimento pessoal e autoajuda<br>Unidades: 4<br>Preço: R$ 35,90';
    caracteristicas.innerHTML = texto;
    imgElement.src = 'img/biografia.jpg';
    fotoBook.appendChild(imgElement);

  } else if (idBook === 'book4') {
    nomeBook.textContent = 'A psicologia das cores';
    var texto = 'Autor(a): Eva Heller<br>Ano: 1986<br>Gênero: Design<br>Unidades: 2<br>Preço: R$ 25,50';
    caracteristicas.innerHTML = texto;
    imgElement.src = 'img/psicologia2.png';
    fotoBook.appendChild(imgElement);
  }

}