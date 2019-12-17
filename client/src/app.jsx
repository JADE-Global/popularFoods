import React from 'react';
import styles from './app.module.css';
import Carousel from './components/carousel/carousel.jsx';


const App = (props) => <div className={`${styles.app}`}>
    <Carousel />
</div>;

export default App;