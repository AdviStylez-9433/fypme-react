import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, email, telefono, mensaje } = formData;
    if (nombre === '' || email === '' || telefono === '' || mensaje === '') {
      // Aquí puedes manejar la lógica para mostrar un mensaje de error
    } else {
      // Aquí puedes enviar los datos del formulario a través de una solicitud HTTP
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Formulario de contacto</h1>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre" value={formData.nombre} onChange={handleChange} required /><br />

        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" placeholder="Ingresa tu correo electronico" value={formData.email} onChange={handleChange} required /><br />

        <label htmlFor="telefono">Telefono:</label>
        <input type="text" id="telefono" name="telefono" placeholder="Ingresa tu numero de telefono" value={formData.telefono} onChange={handleChange} required /><br />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" rows="7" placeholder="Escribe tu mensaje" value={formData.mensaje} onChange={handleChange} required></textarea><br />

        <button id="actionButton" type="submit">Enviar mensaje</button>
      </form>
    </div>
  );
};

export default ContactForm;
