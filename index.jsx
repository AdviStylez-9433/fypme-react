import React from 'react';

class MyApp extends React.Component {
    subscription() {
        const correo = document.getElementById('email').value;

        if (correo === '') {
            // Manejo de lógica de validación de correo vacío
        }
    }

    handleTouchStart = (e) => {
        this.isDragging = true;
        this.startX = e.touches[0].clientX;
        this.scrollLeft = this.carouselRef.scrollLeft;
    }

    handleTouchEnd = () => {
        this.isDragging = false;
    }

    handleTouchMove = (e) => {
        if (!this.isDragging) return;
        const x = e.touches[0].clientX;
        const walk = (x - this.startX) * 1; // Ajusta este valor para controlar la velocidad del desplazamiento
        this.carouselRef.scrollLeft = this.scrollLeft - walk;
    }

    render() {
        return (
            <div>
                <p>Hola, esta es tu app hecha solo con HTML 5</p>
                <h1 style={{textAlign: 'center'}}>Bienvenido a MyApp</h1>
                <p>Esta es una app de ejemplo hecha 100% con HTML 5, puedes personalizar este contenido según tus necesidades.</p>

                <h2>¿Quiénes somos?</h2>
                <p>Esta una sección editable para que la personalices con la identidad de tu empresa.</p>
                <img style={{display: 'block', margin: 'auto', width: '300px'}} src="img/logo.png" alt="foto"/><br/>
                <a href="aboutus.html">Ir a...</a>

                <div className="container">
                    <h2>Últimas novedades</h2>
                    <p>Esta una sección con las últimas noticias ocurridas en nuestra empresa y nuestro círculo.</p>
                    <div className="noticias">
                        {/* Noticia 1 */}
                        <div className="noticia">
                            <h3>"Robots que aprenden por sí mismos: Avance revolucionario en Inteligencia Artificial"</h3>
                            <img src="img/news1.jpeg" alt="image 1" style={{display: 'block', margin: 'auto', width: '300px', height: '200px'}}/>
                            <br/><a href="aboutus.html">Leer más...</a>
                        </div>
                    </div>
                </div>

                <h2>Galería de fotos</h2>
                <p>Esta es una galería de fotos con carrusel donde puedes poner imágenes de tu empresa o tu contenido.</p>
                <div className="slideshow-container" onTouchStart={this.handleTouchStart} onTouchEnd={this.handleTouchEnd} onTouchMove={this.handleTouchMove}>
                    <div className="carousel" ref={(ref) => this.carouselRef = ref}>
                        <div className="slides">
                            <img src="img/galery1.avif" alt="Image 1"/>
                            <img src="img/galery2.avif" alt="Image 2"/>
                            <img src="img/galery3.avif" alt="Image 3"/>
                        </div>
                    </div>
                    <div className="dot-container" style={{textAlign: 'center'}}>
                        <span className="dot" onClick={() => this.currentSlide(1)}></span>
                        <span className="dot" onClick={() => this.currentSlide(2)}></span>
                        <span className="dot" onClick={() => this.currentSlide(3)}></span>
                    </div>
                    <a href="gallery.html">Ver más...</a>
                </div>

                <div id="suscripción">
                    <h2>Suscríbete y no te pierdas nada</h2>
                    <p>Con tu correo electrónico puedes recibir notificaciones de nuestra app o nuevas actualizaciones</p>
                    <form id="register-form" action="loader.html">
                        <input id="email" type="email" name="email" placeholder="Ingresa tu correo electrónico" required/>
                        <button id="actionButton" onClick={this.subscription}>Enviar</button>
                        <label for="text">‎ </label>
                    </form>
                </div>

                <div id="content">
                    <img style={{display: 'block', margin: 'auto', width: '300px'}} src="img/footermain.png" alt="sponsor"/>
                </div>
            </div>
        );
    }
}

export default MyApp;
