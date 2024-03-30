import React, { useState } from 'react';

const AccountRecovery = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '') {
      // Aquí puedes manejar la lógica para mostrar un mensaje de error
    } else {
      // Aquí puedes enviar la dirección de correo electrónico a través de una solicitud HTTP
      // Por ejemplo, puedes usar fetch o axios para enviar una solicitud al servidor
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Recuperar cuenta</h1>

        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Ingresa tu correo electrónico"
          value={email}
          onChange={handleChange}
          required
        /><br />

        <button id="actionButton" type="submit">Recuperar</button>
      </form>
    </div>
  );
};

export default AccountRecovery;
