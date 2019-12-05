import React, { Component } from 'react';
import CarouselItem from '../carouselItem/carouselItem.jsx';
import LeftScrollIcon from './icons/leftScrollIcon.jsx';
import RightScrollIcon from './icons/rightScrollIcon.jsx';
import regeneratorRuntime from "regenerator-runtime";
import styles from "./carousel.module.css";

class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dishes: [],
            dishToDisplay: '',
            scrollPosition: 0,
            maxScrollLength: 0,
        }
        this.scrollLeft = this.scrollLeft.bind(this);
        this.scrollRight = this.scrollRight.bind(this);
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:3000/api/tests/threedish')
        const data = await response.json();
        this.setState({ dishes: data.dishes }, () => {
            const scrollContainer = document.getElementsByClassName(`${styles.itemContainer}`)[0];
            const newMaxScrollLength = scrollContainer.scrollWidth - scrollContainer.clientWidth;
            this.setState({
                maxScrollLength: newMaxScrollLength
            })
        });
    }

    scrollRight() {
        const scrollContainer = document.getElementsByClassName(`${styles.itemContainer}`)[0];
        scrollContainer.scrollBy({
            top: 0,
            left: 100,
            behavior: 'smooth'
        });
        setTimeout(() => {
            this.setState({ scrollPosition: document.getElementsByClassName(`${styles.itemContainer}`)[0].scrollLeft })
        }, 300)
    }
    scrollLeft() {
        const scrollContainer = document.getElementsByClassName(`${styles.itemContainer}`)[0];
        scrollContainer.scrollBy({
            top: 0,
            left: -100,
            behavior: 'smooth'
        });
        setTimeout(() => {
            this.setState({ scrollPosition: document.getElementsByClassName(`${styles.itemContainer}`)[0].scrollLeft })
        }, 300)
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h4>Popular Dishes</h4>
                    <div className={styles.fakeLink}>View Full Menu</div>
                </div>
                <div className={styles.itemContainer}>
                    {this.state.scrollPosition > 2 && <button className={`${styles.scrollButton} ${styles.leftScrollButton}`} onClick={this.scrollLeft}><LeftScrollIcon /></button>}
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
                    {this.state.maxScrollLength - this.state.scrollPosition > 2 && <button className={`${styles.scrollButton} ${styles.rightScrollButton}`} onClick={this.scrollRight}><RightScrollIcon /></button>}
                </div>
            </div>
        )
    }
}
export default Carousel;


