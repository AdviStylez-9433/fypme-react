import React from 'react';

class ImageGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDragging1: false,
            isDragging2: false,
            isDragging3: false,
            startX1: 0,
            startX2: 0,
            startX3: 0,
            scrollLeft1: 0,
            scrollLeft2: 0,
            scrollLeft3: 0
        };
    }

    handleTouchStart = (e, carousel) => {
        const { id } = carousel;
        const { clientX } = e.touches[0];
        const { scrollLeft } = this.state[`scrollLeft${id}`];
        this.setState({
            [`isDragging${id}`]: true,
            [`startX${id}`]: clientX,
            [`scrollLeft${id}`]: scrollLeft
        });
    };

    handleTouchEnd = (carousel) => {
        const { id } = carousel;
        this.setState({ [`isDragging${id}`]: false });
    };

    handleTouchMove = (e, carousel) => {
        const { id } = carousel;
        if (!this.state[`isDragging${id}`]) return;
        const { clientX } = e.touches[0];
        const { startX, scrollLeft } = this.state[`startX${id}`];
        const walk = (clientX - startX) * 1; // Ajusta este valor para controlar la velocidad del desplazamiento
        carousel.scrollLeft = scrollLeft - walk;
    };

    render() {
        return (
            <div>
                <div id="content">
                    <h1 style={{textAlign: 'center'}}>Galeria de imagenes</h1>
                    <p>Esta es tu galeria completamente animada, llenala de imagenes y fotografias que caracterizen tu empresa y le
                        dan su identidad para que la compartas con tus clientes.</p>

                    <div className="carousel" id="carousel1" onTouchStart={(e) => this.handleTouchStart(e, {id: 1})} onTouchEnd={() => this.handleTouchEnd({id: 1})} onTouchMove={(e) => this.handleTouchMove(e, {id: 1})}>
                        <div className="slides" id="slides">
                            <img src="img/galery1.avif" alt="Image 1"/>
                            <img src="img/galery2.avif" alt="Image 2"/>
                            <img src="img/galery3.avif" alt="Image 3"/>
                            <img src="img/galery4.avif" alt="Image 4"/>
                            <img src="img/galery5.avif" alt="Image 5"/>
                        </div>
                    </div>
                    
                    <div className="dot-container" style={{textAlign:'center'}}>
                        <span className="dot" onClick={() => currentSlide(1)}></span>
                        <span className="dot" onClick={() => currentSlide(2)}></span>
                        <span className="dot" onClick={() => currentSlide(3)}></span>
                        <span className="dot" onClick={() => currentSlide(4)}></span>
                        <span className="dot" onClick={() => currentSlide(5)}></span>
                    </div>

                    <h1 style={{textAlign: 'center'}}>Galeria de premios</h1>
                    <p>Esta es tu galeria completamente animada, llenala de imagenes y fotografias que caracterizen tu empresa y le
                        dan su identidad para que la compartas con tus clientes.</p>
                    <div className="carousel" id="carousel2" onTouchStart={(e) => this.handleTouchStart(e, {id: 2})} onTouchEnd={() => this.handleTouchEnd({id: 2})} onTouchMove={(e) => this.handleTouchMove(e, {id: 2})}>
                        <div className="slides" id="slides">
                            <img src="img/galery3.avif" alt="Image 3"/>
                            <img src="img/galery1.avif" alt="Image 1"/>
                            <img src="img/galery4.avif" alt="Image 4"/>
                            <img src="img/galery2.avif" alt="Image 2"/>
                            <img src="img/galery5.avif" alt="Image 5"/>
                        </div>
                    </div>
                    <div className="dot-container" style={{textAlign:'center'}}>
                        <span className="dot" onClick={() => currentSlide(1)}></span>
                        <span className="dot" onClick={() => currentSlide(2)}></span>
                        <span className="dot" onClick={() => currentSlide(3)}></span>
                        <span className="dot" onClick={() => currentSlide(4)}></span>
                        <span className="dot" onClick={() => currentSlide(5)}></span>
                    </div>

                    <h1 style={{textAlign: 'center'}}>Galeria de noticias</h1>
                    <p>Esta es tu galeria completamente animada, llenala de imagenes y fotografias que caracterizen tu empresa y le
                        dan su identidad para que la compartas con tus clientes.</p>
                    <div className="carousel" id="carousel3" onTouchStart={(e) => this.handleTouchStart(e, {id: 3})} onTouchEnd={() => this.handleTouchEnd({id: 3})} onTouchMove={(e) => this.handleTouchMove(e, {id: 3})}>
                        <div className="slides" id="slides">
                            <img src="img/galery5.avif" alt="Image 5"/>
                            <img src="img/galery4.avif" alt="Image 4"/>
                            <img src="img/galery3.avif" alt="Image 3"/>
                            <img src="img/galery2.avif" alt="Image 2"/>
                            <img src="img/galery1.avif" alt="Image 1"/>
                        </div>
                    </div>
                    <div className="dot-container" style={{textAlign:'center'}}>
                        <span className="dot" onClick={() => currentSlide(1)}></span>
                        <span className="dot" onClick={() => currentSlide(2)}></span>
                        <span className="dot" onClick={() => currentSlide(3)}></span>
                        <span className="dot" onClick={() => currentSlide(4)}></span>
                        <span className="dot" onClick={() => currentSlide(5)}></span>
                    </div>
                </div>
                <div id="content">
                    <img style={{display: 'block', margin: 'auto', width: '300px'}} src="img/footermain.png" alt="sponsor"/>
                </div>
            </div>
        );
    }
}

export default ImageGallery;
