function acessoLogin(){
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