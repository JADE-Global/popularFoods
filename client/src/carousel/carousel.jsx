import React, { Component } from 'react';
import CarouselItem from '../carouselItem/carouselItem.jsx';
import regeneratorRuntime from "regenerator-runtime";
import styles from "./carousel.module.css";

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
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h4>Popular Dishes</h4>
                    <div className={styles.fakeLink}>View Full Menu</div>
                </div>
                <div className={styles.itemContainer}>
                    {this.state.dishes.map((dish, index) => {
                        return (
                            <CarouselItem
                                last={index === this.state.dishes.length - 1 ? true : false}
                                imageUrl={dish.imageUrl}
                                price={dish.price}
                                name={dish.name}
                                photoNumber={dish.photoNumber}
                                reviewNumber={dish.reviewNumber}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Carousel;