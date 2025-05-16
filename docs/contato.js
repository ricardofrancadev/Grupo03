document.getElementById('form-contato').addEventListener('submit', function (e) {
  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const mensagem = document.getElementById('mensagem');

  const erroNome = document.getElementById('erro-nome');
  const erroEmail = document.getElementById('erro-email');
  const erroMensagem = document.getElementById('erro-mensagem');

  [nome, email, mensagem].forEach(field => field.classList.remove('erro'));
  [erroNome, erroEmail, erroMensagem].forEach(span => span.textContent = '');

  let valid = true;

  if (!nome.value.trim()) {
    nome.classList.add('erro');
    erroNome.textContent = 'O nome é obrigatório.';
    valid = false;
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!email.value.trim()) {
    email.classList.add('erro');
    erroEmail.textContent = 'O e-mail é obrigatório.';
    valid = false;
  } else if (!emailRegex.test(email.value)) {
    email.classList.add('erro');
    erroEmail.textContent = 'O e-mail informado não é válido.';
    valid = false;
  }

  if (!mensagem.value.trim()) {
    mensagem.classList.add('erro');
    erroMensagem.textContent = 'A mensagem é obrigatória.';
    valid = false;
  }

  if (!valid) {
    e.preventDefault(); 
  }
});
