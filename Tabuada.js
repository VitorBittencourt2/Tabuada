var numeroUsuario = prompt("Digite um número de 1 a 10 para realizar a operação");

// Verifica a entrada do usuario, se é ou não um número. Se não for um número ele retorna uma janela com o erro.
if(isNaN(numeroUsuario)){
  alert("Digite um número, não aceitamos caracteres! ");
}

// Verifica o número, se é inteiro ou não. Se permanecer número além de zero, tem ponto flutuante, logo não é inteiro.

else if(numeroUsuario % 1 === 0){
  
  //Verifica se o número está entre 1 e 10
  if(numeroUsuario > 0 && numeroUsuario <= 10 ){
    // Laço da Tabuada
   for(var i=0; i<=10; i++){
   var resultadoTabuada = i*numeroUsuario;
   
     // Exibe no console a tabuada
   console.log(numeroUsuario + " X " + i + " = "+ resultadoTabuada);
 }
  
}
else{
  alert("Digite um número de 1 a 10 ! ");
  
  }
}
else{
  alert("Não é um número inteiro, digite um número inteiro.");
  
}