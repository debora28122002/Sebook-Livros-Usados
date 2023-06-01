


img = localStorage.getItem( 'img1')
titulo = localStorage.getItem( 'titulo1')
autor = localStorage.getItem( 'autor1' )
ano =localStorage.getItem('ano1')
genero =localStorage.getItem('genero1')
unidades = localStorage.getItem('unidades1')
preco =localStorage.getItem('preco1')

var book2 = ['img/harryp.jpg', 'Harry Potter e o Cálice de Fogo', 'Autor(a): J.K.Rowling', 'Ano: 2000', 'Gênero: Fantasia', 'Unidades: 5', 'Preço: R$ 20,00']
var book3 = ['img/biografia.jpg', 'A Biografia Humana', 'Autor(a): Laura Gutman', 'Ano: 2016', 'Gênero: Desenvolvimento pessoal e autoajuda', 'Unidades: 4', 'Preço: R$ 35,90']
var book4 = ['img/psicologia2.png', 'A psicologia das cores', 'Autor(a): Eva Heller', 'Ano: 1986', 'Gênero: Design', 'Unidades: 2', 'Preço: R$ 25,50']


function newBook1() {
    var newName = document.getElementById("nome").value;
    var newAutor = document.getElementById("autor").value;
    var newAno = document.getElementById("ano").value;
    var newGenero = document.getElementById("genero").value;
    var newUnidade = document.getElementById("unidades").value;
    var newValor = document.getElementById("valor").value;


    localStorage.setItem( 'titulo1',newName)
    localStorage.setItem( 'autor1' ,newAutor)
    localStorage.setItem('ano1',newAno)
    localStorage.setItem( 'genero1', newGenero)
    localStorage.setItem( 'unidades1' ,newUnidade)
    localStorage.setItem( 'preco1' ,newValor)
}





function Book() {
    var fotoBook = document.getElementById('fotoBook');
    var nomeBook = document.getElementById('nomeBook');
    var caracteristicas = document.getElementById('caracteristicas');
    var imgElement = document.createElement('img');

    imgElement.style.maxWidth = '150px';
    imgElement.style.borderRadius = '25px';
    imgElement.style.border = '3px solid #4B311C';

    var texto = 'Autor(a): ' + autor + '<br>' + 'Ano: ' + ano + '<br>' + 'Genero: ' + genero + '<br>' + 'Unidades: ' + unidades + '<br>' + 'Preço: R$ ' + preco;

    nomeBook.innerText = titulo;
    caracteristicas.innerHTML = texto;
    imgElement.src = img;
    fotoBook.appendChild(imgElement);
}

/*
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
*/






/*document.addEventListener("DOMContentLoaded", function () {
    var bokvalue = localStorage.getItem('thisbook');

    if (bokvalue == 'book1') {
        bookEdit1();
    }

});
function bookEdit1() {

    var fotobok = document.getElementById("imgCamera");
    var input1 = document.getElementById("nome");
    var input2 = document.getElementById("autor");
    var input3 = document.getElementById("ano");
    var input4 = document.getElementById("genero");
    var input5 = document.getElementById("unidades");
    var input6 = document.getElementById("valor");

    fotobok.setAttribute("src", img);
    input1.setAttribute("value", titulo);
    input2.setAttribute("value", autor);
    input3.setAttribute("value", ano);
    input4.setAttribute("value", genero);
    input5.setAttribute("value", unidades);
    input6.setAttribute("value", preco);

}*/