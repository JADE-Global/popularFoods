import React, { Component, Suspense, lazy } from 'react';
import ModalImageDisplay from './modalImageDisplay/modalImageDisplay.jsx';
import ModalReview from './modalReview/modalReview.jsx';
import ModalReviewContainer from './modalReviewContainer/modalReviewsContainer.jsx';
import RightScrollIcon from '../carousel/icons/rightScrollIcon.jsx';
import LeftScrollIcon from '../carousel/icons/leftScrollIcon.jsx';
import styles from './modal.module.css'

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            dishes: ['Soup', 'Salad', 'Chicken', 'Desert'],
            pictures: [],
            previousDish: 'Soup',
            currentDish: 'Salad',
            nextDish: 'Chicken',
            dishIndex: 1,
            pictureIndex: 0
        }
    }
    componentDidMount() {
        const testData = {
            name: 'Test Name',
            friendNumber: 4,
            reviewNumber: 8,
            dish: 'Test Dish',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Potato Pancake dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            snippet: 'Duis aute irure Potato Pancake dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            stars: 4,
            date: `${new Date()}`,
            userAvatar: 'https://source.unsplash.com/random?person'
        }
        let mockReviews = []
        for (let i = 0; i < 50; i++) {
            mockReviews.push(testData);
        };
        this.setState({ reviews: mockReviews });
    }
    render() {
        return (
            <div className={styles.container} onClick={this.props.closeModal}>
                <div className={styles.closeButton} onClick={this.props.closeModal}>Close X</div>
                <div className={styles.contentContainer}>
                    <ModalImageDisplay />
                    <ModalReviewContainer
                        dish={this.state.currentDish}
                        reviewQuantity={this.state.reviews.length}
                        reviews={this.state.reviews}
                    />
                </div>
                {this.state.dishIndex !== 0 && <div className={styles.previousDish}><span>{this.state.previousDish}</span> <LeftScrollIcon fill='white' /></div>}
                {this.state.dishIndex !== this.state.dishes.length - 1 && <div className={styles.nextDish}><span>{this.state.nextDish}</span> <RightScrollIcon fill='white' /></div>}
            </div>
        )
    }
}
export default Modal;

