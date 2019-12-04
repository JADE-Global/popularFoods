import React from 'react'
import styles from './carouselItem.module.css';


const CarouselItem = ({ imageUrl, price, name, photoNumber, reviewNumber }) => {
    return (
        <div className={styles.container}>
            <div className={styles.foodImage} style={{ backgroundImage: `url(${imageUrl})` }} >
                <div className={styles.price}>{price}</div>
            </div>
            {/* container for content */}
            <div>
                <h3>{name}</h3>
                {/* container for photoNumber and reviewsNumber, probably use flexbox for this */}
                <div>
                    <div>{photoNumber}</div><ul>{reviewNumber}</ul>
                </div>
            </div>
        </div >
    );
};

export default CarouselItem;