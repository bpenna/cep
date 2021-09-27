function procuraCEP() {
  var cep_desejado = document.getElementById("desejado").value;
  var requestURL = "https://viacep.com.br/ws/" + cep_desejado + "/json/";
  console.log(requestURL);
  
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    var resposta = request.response;
    console.log(resposta);
    
    var endereco = resposta.logradouro + ", " + resposta.bairro + ", " + resposta.localidade;
    console.log(endereco); 
    
    var elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = endereco;
  }
}
