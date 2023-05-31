var myDiv = document.getElementById('btn');
myDiv.addEventListener('click', function () {
    capturarValores()
});
function capturarValores() {
    var input1 = document.getElementById("nome").value;
    var input2 = document.getElementById("email").value;
    var input3 = document.getElementById("senha").value;
    var input4 = document.getElementById("number").value;
    var valores = [input1, input2, input3, input4];
    var regexCaractereEspecial = /[!@#$%^&*(),.'?":{}|<>£¢¬\-_+=§°₢;ºª´`/]/;
    var regexNumero = /[0-9]/;
    const mailVld = ['outlook.com', 'outlook.com.br', 'hotmail.com', 'gmail.com']
    let Test = 'Cadastrado'

    testName = valores[0].split("")

    for (i = 0; i < testName.length; i++) {

        if ((regexCaractereEspecial.test(testName[i]) || regexNumero.test(testName[i])) == true) {
            Test = 'Nome Invalido'
            break;
        }
    }
    if (valores[1].includes('@gmail.com') || valores[1].includes('@hotmail.com') || valores[1].includes('@outlook.com')) {
        domin = valores[1].split('@')
        if (mailVld.indexOf(domin[1]) == -1) {
            Test = 'E-mail Invalido'
        }
    }
    else {
        Test = 'E-mail Invalido'
    }
    if (valores[2].length < 6) {
        Test = 'A senha deve ter mais de 5 caracteres'
    }
    if (Test == 'Cadastrado') {
        //enviarDados(valores);
        window.alert(Test)
<<<<<<< HEAD
        localStorage.setItem('nomeUser',valores[0])
=======
        localStorage.setItem('nome', valores[0])
>>>>>>> bfac2708abd4ff32f4ae76c7756ecd8e76e43b1a
        localStorage.setItem('login', valores[1])
        localStorage.setItem('senha', valores[2])
        localStorage.setItem('numero', valores[3])
        armazenarImagem()
        window.location.href ='IntroduçãoUser.html'
    }
    else {
        window.alert(Test);
    }
}



function armazenarImagem() {
    var inputElement = document.getElementById("file-input");
    
    if (inputElement.files && inputElement.files[0]) {
      var fileReader = new FileReader();
      fileReader.onload = function(event) {
        var imagem = event.target.result;
        localStorage.setItem("imagem", imagem);
      }
      fileReader.readAsDataURL(inputElement.files[0]);
    }
  }
  