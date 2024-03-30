import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
      // Aquí puedes manejar la lógica para mostrar un mensaje de error
    } else {
      // Aquí puedes enviar los datos del formulario a través de una solicitud HTTP
      // Por ejemplo, puedes usar fetch o axios para enviar una solicitud al servidor
    }
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;

    // Agrega puntos basados en la longitud de la contraseña
    strength += password.length / 2;

    // Agrega puntos si la contraseña contiene caracteres especiales
    const specialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    if (specialChars.test(password)) {
      strength += 1;
    }

    // Agrega puntos si la contraseña contiene letras mayúsculas y minúsculas
    const lowercaseChars = /[a-z]+/;
    const uppercaseChars = /[A-Z]+/;
    if (lowercaseChars.test(password) && uppercaseChars.test(password)) {
      strength += 1;
    }

    // Agrega puntos si la contraseña contiene números
    const numericChars = /[0-9]+/;
    if (numericChars.test(password)) {
      strength += 1;
    }

    return strength;
  };

  const updateStrengthMeter = (strength) => {
    const clampedStrength = Math.max(strength, 1); // Establecer un mínimo de fuerza de 1
    const clampedWidth = Math.min(clampedStrength * 10, 100); // Limitar el ancho máximo a 100

    return (
      <div className={`strength-bar ${strength < 4 ? 'strength-weak' : strength < 7 ? 'strength-medium' : 'strength-strong'}`} style={{ width: `${clampedWidth}%` }}></div>
    );
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Registro de usuario</h1>

        <label htmlFor="foto_perfil">Foto de perfil:</label>
        <img src="img/user2.png" alt="perfil" />
        <input type="file" id="foto_perfil" name="foto_perfil" />

        <label htmlFor="username">Nombre de usuario:</label>
        <input type="text" id="username" name="username" placeholder="Ingrese tu nombre de usuario" value={formData.username} onChange={handleChange} required /><br />

        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" placeholder="Ingresa tu correo electronico" value={formData.email} onChange={handleChange} required /><br />

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña" value={formData.password} onChange={handleChange} required /><br />

        <label htmlFor="password">Confirmar contraseña:</label>
        <input type="password" id="confirmpassword" name="confirmPassword" placeholder="Ingresa nuevamente tu contraseña" value={formData.confirmPassword} onChange={handleChange} required /><br />

        <div className="strength-meter">
          {updateStrengthMeter(calculatePasswordStrength(formData.password))}
        </div>
        <div className="strength-label">Seguridad de la contraseña: <span>{calculatePasswordStrength(formData.password) < 4 ? 'Débil' : calculatePasswordStrength(formData.password) < 7 ? 'Medio' : 'Fuerte'}</span></div>

        <button id="actionButton" type="submit">Registrar</button><br />
        <a href="login.html" className="sin-subrayado">Iniciar sesion</a>
      </form>
    </div>
  );
};

export default Register;
