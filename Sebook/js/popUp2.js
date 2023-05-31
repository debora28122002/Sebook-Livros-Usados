document.getElementById('pop').addEventListener('click', function () {

  document.getElementById('excluir').classList.remove('hidden');
});

document.getElementById('cancelarPopUpEX').addEventListener('click', function () {
  document.getElementById('excluir').classList.add('hidden');
});