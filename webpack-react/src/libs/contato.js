const enviarContato = (props)=>{
  const { name, email, telefone, message } = props
  const url = "https://wa.me/5573999005211?text=" // Seu numero
    + "*Contato*" + "%0a" // Mensagem personalizada
    + "%0a" // Quebra de linha
    + "*Nome*: " + name + "%0a" // Dados do formulário
    + "*Telefone*: " + telefone + "%0a"
    + "*E-mail*: " + email + "%0a"
    + "*Mensagem*: " + message;
  // window.open(url, '_blank');
  return url
}
export default enviarContato
