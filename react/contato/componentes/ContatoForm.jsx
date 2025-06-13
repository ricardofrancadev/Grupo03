import React, { useState } from 'react';
import '../contato.css';

const ContatoForm = () => {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [erros, setErros] = useState({ nome: '', email: '', mensagem: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErros({ ...erros, [name]: '' });
  };

  const validar = () => {
    let valido = true;
    const novosErros = { nome: '', email: '', mensagem: '' };

    if (!form.nome.trim()) {
      novosErros.nome = 'O nome é obrigatório.';
      valido = false;
    }

    if (!form.email.trim()) {
      novosErros.email = 'O e-mail é obrigatório.';
      valido = false;
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      novosErros.email = 'O e-mail informado não é válido.';
      valido = false;
    }

    if (!form.mensagem.trim()) {
      novosErros.mensagem = 'A mensagem é obrigatória.';
      valido = false;
    }

    setErros(novosErros);
    return valido;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      console.log('Formulário enviado:', form);
    }
  };

  return (
    <main>
      <section className="form-container" role="form" aria-labelledby="form-title">
        <h2 id="form-title">Contato</h2>
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            maxLength="100"
            autoComplete="name"
            required
            className={erros.nome ? 'erro' : ''}
            aria-required="true"
          />
          <div className="mensagem-erro">{erros.nome}</div>

          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            maxLength="100"
            autoComplete="email"
            required
            className={erros.email ? 'erro' : ''}
            aria-required="true"
          />
          <div className="mensagem-erro">{erros.email}</div>

          <label htmlFor="mensagem">Mensagem:</label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows="5"
            value={form.mensagem}
            onChange={handleChange}
            maxLength="1000"
            required
            className={erros.mensagem ? 'erro' : ''}
            aria-required="true"
          />
          <div className="mensagem-erro">{erros.mensagem}</div>

          <button type="submit" aria-label="Enviar formulário de contato">Enviar</button>
        </form>
      </section>
    </main>
  );
};

export default ContatoForm;