
function button1() {
    localStorage.setItem('idTelaAtual', 'button1');
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw/service-worker.js')
        .then(function (registration) {
            console.log('Service Worker registrado com sucesso:', registration);
        })
        .catch(function (error) {
            console.log('Falha ao registrar o Service Worker:', error);
        });
}
