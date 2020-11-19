import { useEffect } from "react";

const CarouselItem = (props) => {
    let {images, title, variants} = props.item

    useEffect(() => {
        console.log(props)
    }, []);

    return (
        <div className="carousel-item">
            <img className="carousel-item-image" src={images[0].src} alt="image"/>
            <p className="carousel-item-name">{title.toUpperCase()}</p>
            <p className="carousel-item-price">from ${variants[0].price}</p>
            <p>&#x2605; &#x2605; &#x2605; &#x2605; &#x2605;</p>
        </div>
    )
}

export default CarouselItem