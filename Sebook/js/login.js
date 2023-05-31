function acessoLogin(){
  var idTelaAnterior = localStorage.getItem('idTelaAtual');
  if(idTelaAnterior === 'btn'){
    var login = localStorage.getItem('login');
    var senha  = localStorage.getItem('senha');
    var inputLogin = document.getElementById('textbox1').value;
    var inputSenha = document.getElementById('textbox2').value;
    if (login == inputLogin && senha == inputSenha){
      window.location.href = 'IntroduçãoUser.html';
    }
    else{
    window.alert('Login ou Senha incorretos')  
    }
  }
  else if(idTelaAnterior === 'button1'){
    window.location.href = 'IntroduçãoUser.html';
  }
}

function loginDono(){
  var idTelaAnterior = localStorage.getItem('idTelaAtual');
  if(idTelaAnterior === 'button1'){
    var inputLogin = document.getElementById('textbox1');
    inputLogin.value = 'sou_dono_sebo@gmail.com'
    var inputSenha = document.getElementById('textbox2');
    inputSenha.value = 'minhasenha789'
  }
}