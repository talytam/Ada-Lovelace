const formulario = document.getElementById('formulario');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const mensagem = document.getElementById('mensagem-formulario');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  const nomePreenchido = nome.value.trim();
  const emailPreenchido = email.value.trim();

  if (!nomePreenchido || !emailPreenchido) {
    mensagem.textContent = 'Por favor, preencha os campos nome e e-mail.';
    return;
  }

  if (!email.checkValidity()) {
    mensagem.textContent = 'Digite um endereço de e-mail válido.';
    return;
  }

  mensagem.textContent = 'Prontinho! Cadastro simulado com sucesso.';
  formulario.reset();
});
