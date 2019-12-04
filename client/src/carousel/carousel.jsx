import React, { Component } from 'react';
import CarouselItem from '../carouselItem/carouselItem.jsx';
import regeneratorRuntime from "regenerator-runtime";

class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dishes: [],
            dishToDisplay: '',
            scrollPosition: 0, // <- placeholder. refactor this
        }
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:3000/api/tests/threedish')
        const data = await response.json();
        this.setState({ dishes: data.dishes });
    }
    render() {
        return (
            <div>
                {this.state.dishes.map(dish => {
                    return (
                        <CarouselItem
                            imageUrl={dish.imageUrl}
                            price={dish.price}
                            name={dish.name}
                            photoNumber={dish.photoNumber}
                            reviewNumber={dish.reviewNumber}
                        />
                    )
                })}
            </div>
        )
    }
}
export default Carousel;