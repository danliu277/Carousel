import { useEffect, useState } from "react";
import CarouselItem from "../components/carouselItem";

const Carousel = () => {
    const [items, setItems] = useState([])
    const [page, setPage] = useState(0)

    useEffect(() => {
        fetch("./challenge.products.json")
            .then(res => res.json())
            .then(data => { setItems(data.products ? data.products : []) })
    }, []);

    const getItems = () => {
        return items.slice(0 + (page * 3), 3 + (page * 3)).map((item, index) => {
            return <CarouselItem key={index} item={item} />
        })
    }

    const prevPage = () => {
        if(page > 0) 
            setPage(page - 1)
    }

    const nextPage = () => {
        if(page < (items.length / 3) - 1)
            setPage(page + 1)
    }

    return (
        <div>
            <h4 className="carousel-title">SHOP BESTSELLERS</h4>
            <div className="page-toggle">
                <button onClick={prevPage}>&lt;</button>
                <button onClick={nextPage}>&gt;</button>
            </div>
            <div className="carousel">
                {getItems()}
            </div>
            <button>SHOP ALL BESTSELLERS</button>
        </div>
    )
}

export default Carousel