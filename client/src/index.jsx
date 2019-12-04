import React from 'react';
import ReactDOM from 'react-dom';
import CarouselItem from './carouselItem/carouselItem.jsx';

ReactDOM.render(<CarouselItem
    imageUrl={'https://source.unsplash.com/random'}
    price={8.29}
    name={'Galvanize'}
    photoNumber={5}
    reviewNumber={10} />, document.getElementById('app'));