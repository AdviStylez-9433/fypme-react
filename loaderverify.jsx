import React, { useEffect } from 'react';

const RedirectLoader = () => {
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = "restart.html"; // Reemplaza "restart.html" con la URL de la página a la que deseas redirigir
    }, 5000); // Redirigir después de 5 segundos (5000 milisegundos)

    const alertTimer = setTimeout(() => {
      alert("Verificacion confirmada"); // Alerta al usuario después de que se haya redirigido
    }, 5000); // Mostrar alerta 5 segundos después de cargar la nueva página

    return () => {
      clearTimeout(redirectTimer);
      clearTimeout(alertTimer);
    };
  }, []);

  return (
    <div className="container">
      <div className="loader"></div>
    </div>
  );
};

export default RedirectLoader;
