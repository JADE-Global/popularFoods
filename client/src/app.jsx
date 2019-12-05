import React from 'react';
import styles from './app.module.css';
import Carousel from './components/carousel/carousel.jsx';
import ModalReview from './components/modal/modalReview.jsx';

const App = (props) => <div className={`${styles.app}`}>
    <Carousel />
    <ModalReview
        name='Test Name'
        friendNumber={4}
        reviewNumber={8}
        dish='Test Dish'
        body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Potato Pancake dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
        snippet={'Duis aute irure Potato Pancake dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
        stars={4}
        date={`${new Date()}`}
        userAvatar='https://source.unsplash.com/random?person'
    /></div>;

export default App;