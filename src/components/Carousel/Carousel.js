import React from 'react'
import barberAction from '../../assets/barber-action.jpg'
import beard from '../../assets/beard.jpg'

const Carousel = () => {

    const tabImages = [
        {
            src: barberAction,
            id: "barber-action"
        },        
        {
            src: beard,
            id: "beard"
        }
    ]
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
            {tabImages.map((image) => {
                return ( 
                    <div class="carousel-item active" id={image.id}>
                        <img src={image.src} class="d-block" alt={image.alt}/>
                    </div>
                )
            })}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
    );
};

export default Carousel;