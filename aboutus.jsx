import React from 'react';

class AboutUs extends React.Component {
    subscription() {
        const correo = document.getElementById('email').value;

        if (correo === '') {
            // Manejo de lógica de validación de correo vacío
        }
    }

    handleTouchStart1 = (e) => {
        this.isDragging1 = true;
        this.startX1 = e.touches[0].clientX;
        this.scrollLeft1 = this.carouselRef1.scrollLeft;
    }

    handleTouchEnd1 = () => {
        this.isDragging1 = false;
    }

    handleTouchMove1 = (e) => {
        if (!this.isDragging1) return;
        const x = e.touches[0].clientX;
        const walk = (x - this.startX1) * 1; // Ajusta este valor para controlar la velocidad del desplazamiento
        this.carouselRef1.scrollLeft = this.scrollLeft1 - walk;
    }

    handleTouchStart2 = (e) => {
        this.isDragging2 = true;
        this.startX2 = e.touches[0].clientX;
        this.scrollLeft2 = this.carouselRef2.scrollLeft;
    }

    handleTouchEnd2 = () => {
        this.isDragging2 = false;
    }

    handleTouchMove2 = (e) => {
        if (!this.isDragging2) return;
        const x = e.touches[0].clientX;
        const walk = (x - this.startX2) * 1; // Ajusta este valor para controlar la velocidad del desplazamiento
        this.carouselRef2.scrollLeft = this.scrollLeft2 - walk;
    }

    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>Nuestra historia</h1>
                <p>Aquí tienes una sección donde puedes personalizar la historia de tu empresa, adáptala a tu gusto y dale un toque diferente.</p>
                <div className="slideshow-container" onTouchStart={this.handleTouchStart1} onTouchEnd={this.handleTouchEnd1} onTouchMove={this.handleTouchMove1}>
                    <div className="carousel" id="carousel1" ref={(ref) => this.carouselRef1 = ref}>
                        <div className="slides">
                            <img src="img/galery4.avif" alt="Image 1"/>
                            <img src="img/galery5.avif" alt="Image 2"/>
                        </div>
                    </div>
                    <div className="dot-container" style={{textAlign: 'center'}}>
                        <span className="dot" onClick={() => this.currentSlide(1)}></span>
                        <span className="dot" onClick={() => this.currentSlide(2)}></span>
                    </div>
                </div>

                <h1 style={{textAlign: 'center'}}>Transformacion digital</h1>
                <p>Este proyecto es una iniciativa de la Red de Asistencia Digital Fortalece Pyme Ñuble y todo su equipo en nuestro proceso de transformación digital.</p>
                <div className="slideshow-container" onTouchStart={this.handleTouchStart2} onTouchEnd={this.handleTouchEnd2} onTouchMove={this.handleTouchMove2}>
                    <div className="carousel" id="carousel2" ref={(ref) => this.carouselRef2 = ref}>
                        <div className="slides">
                            <img src="img/galery2.avif" alt="Image 1"/>
                            <img src="img/galery3.avif" alt="Image 2"/>
                        </div>
                    </div>
                    <div className="dot-container" style={{textAlign: 'center'}}>
                        <span className="dot" onClick={() => this.currentSlide(1)}></span>
                        <span className="dot" onClick={() => this.currentSlide(2)}></span>
                    </div>
                </div>

                {/* Más contenido de la página aquí */}

                <div id="content">
                    <h1 style={{textAlign: 'center'}}>Encuéntranos en Maps</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.8480806941984!2d-72.11200162417059!3d-36.605967772303096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9668d72dd3646201%3A0xfb6f95074bb0cede!2sFortalece%20Pyme%20%C3%91uble!5e0!3m2!1ses!2scl!4v1711726890007!5m2!1ses!2scl" width="90%" height="350px" style={{border: 0, display: 'block', margin: 'auto'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                {/* Más contenido de la página aquí */}

                <div id="content">
                    <h1 style={{textAlign: 'center'}}>Reserva tu cita</h1>
                    {/* Google Calendar Appointment Scheduling begin */}
                    <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1i4SpqQY1zzMjvyRS6FFFJHJvj5RDtLt-aYaZ2n0qjRk2QGNosH6hg6lbvg8KXZ2DuVOfDHgaS?gv=true" style={{border: 0}} width="100%" height="600" frameborder="0"></iframe><br/>
                    {/* end Google Calendar Appointment Scheduling */}
                </div>

                {/* Más contenido de la página aquí */}

                <div id="content">
                    <img style={{display: 'block', margin: 'auto', width: '300px'}} src="img/footermain.png" alt="sponsor"/>
                </div>
            </div>
        );
    }
}

export default AboutUs;
