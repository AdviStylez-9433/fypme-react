import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (email === '' || password === '') {
      // Aquí puedes manejar la lógica para mostrar un mensaje de error
    } else {
      // Aquí puedes enviar los datos del formulario a través de una solicitud HTTP
      // Por ejemplo, puedes usar fetch o axios para enviar una solicitud al servidor
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Inicio de sesión</h1>

        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" placeholder="Ingresa tu correo electronico" value={formData.email} onChange={handleChange} required /><br />

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña" value={formData.password} onChange={handleChange} required /><br />

        <button id="actionButton" type="submit">Acceder</button><br />
        <a href="profile.html">Crear cuenta</a>
        <a href="verify.html">¿Olvidaste tu contraseña?</a>
      </form>
    </div>
  );
};

export default Login;
