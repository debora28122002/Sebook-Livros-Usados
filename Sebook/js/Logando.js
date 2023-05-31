const removerClasseBtn = document.getElementById('textbtn');
removerClasseBtn.addEventListener('click', function () {
  localStorage.setItem('removerClasse', 'true');
  window.location.href = 'SeboProfile.html';
});
document.addEventListener('DOMContentLoaded', function () {
  const removerClasse = localStorage.getItem('removerClasse');
  if (removerClasse === 'true') {
    const elemento = document.getElementById('wppBox');
    elemento.classList.remove('hidden');
  }
});