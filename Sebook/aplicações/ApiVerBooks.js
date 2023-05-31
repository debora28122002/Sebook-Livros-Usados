
const divExistente = document.querySelector('.telasSm');
qtd = 8
for (let i = 0; i < qtd; i += 2) {

    let url = "https://sebook-production.up.railway.app/livros"

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const novaDiv = document.createElement('div');
            const titulo1 = data[i].titulo;
            const preco1 = data[i].preco;
            const img1 = data[i].imgUrl;
            const titulo2 = data[i + 1].titulo;
            const preco2 = data[i + 1].preco;
            const img2 = data[i + 1].imgUrl;


            novaDiv.innerHTML = `
                <div class="row">
                    <div class="col colunas">
                        <a href="Book.html">
                            <div class="imgLivro" onclick="book1()">
                                <img src="${img1}" alt="" id="crepusculo" width="120px">
                            </div>
                        </a>
                        <p class="descricao">${titulo1}</p>
                        <p class="descricao">R$ ${preco1}</p>
                        <div class="row icones">
                            <div class="col icons bord1">
                                <img src="img/delete.png" alt="Delete" id="delete" width="30px">
                            </div>
                            <div class="col icons bord2">
                                <a href="EditarLivro.html">
                                    <img src="img/border_color2.png" alt="Editar" id="editar"
                                        width="30px">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col colunas">
                        <a href="Book.html">
                            <div onclick="book2()">
                                <img src="${img2}" alt="" id="harry" width="120px"
                                    class="imgLivro">
                            </div>
                        </a>
                        <p class="descricao">${titulo2}</p>
                        <p class="descricao">R$ ${preco2}</p>
                        <div class="row icones">
                            <div class="col icons bord1">
                                <img src="img/delete.png" alt="Delete" id="delete1" width="30px">
                            </div>
                            <div class="col icons bord2">
                                <a href="EditarLivro.html">
                                    <img src="img/border_color2.png" alt="Editar" id="editar"
                                        width="30px">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            divExistente.appendChild(novaDiv);
        })
        .catch(error => {
            console.log("Ocorreu um erro:", error);
        });
}

