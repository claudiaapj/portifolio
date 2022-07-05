

function validar(){
  var nome  = formuser.nome.value;
  var email = formuser.email.value;
  var assunto = formuser.assunto.value;
  var texto = formuser.texto.value; 
  
  if(nome == ""){
    alert('Preencha o campo nome.');
    formuser.nome.focus();
    return false;
  }else if(email == " " ){
    alert('Preencha o campo E-mail.');
    formuser.email.focus();
    return false;
  }else if(email.indexOf('@') == -1 || email.indexOf('.com')== -1){
    alert('Formato de e-mail inválido.');
    formuser.email.focus();
    return false;
  } else if(assunto == "" || assunto.length <= 5){
    alert('Preencha o campo assunto com no minimo 6 caracteres');
    formuser.assunto.focus();
    return false;
  }
   else if(texto == "" || texto.length <= 5){
    alert('Preencha o campo de mensagem com no minimo 6 caracteres');
    formuser.texto.focus();
    return false;
  }   else{
    alert("Mensagem enviada com sucesso!!!")
  }
}console.log(formuser.nome);
