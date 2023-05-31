function showPopUpDelete(event, elementoPai) {
  document.getElementById('embaçado').classList.remove('hidden');
  
  var confirmarPopUp = document.getElementById('confirmarPopUp');
  confirmarPopUp.onclick = function() {
    confirmDelete(elementoPai);
  };
}

function confirmDelete(elementoPai) {
  document.getElementById('embaçado').classList.add('hidden');
  
  var div = document.getElementById(elementoPai);
  if (div) {
    div.remove();
  } else {
    console.log('Elemento não encontrado');
  }
}

function hidePopUpDelete() {
  document.getElementById('embaçado').classList.add('hidden');
};