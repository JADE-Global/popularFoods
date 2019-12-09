import React from 'react';
import styles from './app.module.css';
import Carousel from './components/carousel/carousel.jsx';
// import ModalReview from './components/modal/modalReview/modalReview.jsx';
// import Modal from './components/modal/modal.jsx';

const App = (props) => <div className={`${styles.app}`}>
    <Carousel />
    {/* <Modal /> */}
</div>;

export default App;