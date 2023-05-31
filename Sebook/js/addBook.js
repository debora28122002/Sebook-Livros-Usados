
function addBook(){
const divNewBooks = document.querySelector('.newBooks');
var Name = document.getElementById("nome").value;
const novaDiv = document.createElement('div');
var Valor = document.getElementById("valor").value;


novaDiv.innerHTML = `
    <div class="row">
        <div id="booknew" class="col colunas">
            <a href="Book.html">
                <div onclick="book3()">
                    <img src="img/harryp.jpg" alt="Biografia" id="biografia" width="120px" class="imgLivro">
                </div>
            </a>
            <p class="descricao">${Name}</p>
            <p class="descricao">R$ ${Valor}</p>
            <div class="row icones">
                <div class="col icons bord1">
                    <img src="img/delete.png" alt="Delete" onclick="showPopUpDelete(event, 'booknew')" width="30px">
                </div>
                <div class="col icons bord2">
                    <a href="EditarLivro.html">
                        <img src="img/border_color2.png" alt="Editar" id="editar" width="30px">
                    </a>
                </div>
            </div>
        </div>
    </div>
`;
divNewBooks.appendChild(novaDiv);
}