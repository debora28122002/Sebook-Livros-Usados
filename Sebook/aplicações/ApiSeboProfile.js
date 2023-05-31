
const divExistente = document.querySelector('.boxLine');
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
                    <div class="subBoxBook" id="book1" onclick="book1()">
                        <img src="${img1}" alt="" class="fotoBook">
                        <div class="tituloBook">
                            ${titulo1}
                        </div>
                        <div class="precoBook">
                            R$ ${preco1}
                        </div>
                    </div>
                    <div class="subBoxBook" id="book2" onclick="book2()">
                        <img src="${img2}" alt="" class="fotoBook">
                        <div class="tituloBook">
                            ${titulo2}
                        </div>
                        <div class="precoBook">
                            R$ ${preco2}
                        </div>
                    </div>
            `;
            divExistente.appendChild(novaDiv);
        })
        .catch(error => {
            console.log("Ocorreu um erro:", error);
        });
}







