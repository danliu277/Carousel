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
        return items.slice(0 + (page * 4), 4 + (page * 4)).map((item, index) => {
            return <CarouselItem key={index} item={item} />
        })
    }

    const prevPage = () => {
        if (page > 0)
            setPage(page - 1)
    }

    const nextPage = () => {
        if (page < (items.length / 4) - 1)
            setPage(page + 1)
    }

    const prevPageClass = () => {
        let name = "page-button"
        if (page > 0)
            name += " active-button"
        return name
    }

    const nextPageClass = () => {
        let name = "page-button"
        if (page < (items.length / 4) - 1)
            name += " active-button"
        return name
    }

    return (
        <div>
            <div className="carousel-header">
                <h4 className="carousel-title">SHOP BESTSELLERS</h4>
                <div className="page-toggle">
                    <button className={prevPageClass()} onClick={prevPage}>&lt;</button>
                    <button className={nextPageClass()} onClick={nextPage}>&gt;</button>
                </div>
            </div>
            <div className="carousel">
                {getItems()}
            </div>
            <button className="shop-all-button">SHOP ALL BESTSELLERS</button>
        </div>
    )
}

export default Carousel