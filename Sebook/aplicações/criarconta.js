
function enviarDados(valores) {
    var url = 'https://sebook-production.up.railway.app/usuarios';

    var dados = {
        "nome": valores[0],
        "email": valores[1],
        "senha": valores[2],
        "number": valores[3]
    };
    console.log(dados)
    fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.error('Ocorreu um erro:', error);
        });

}