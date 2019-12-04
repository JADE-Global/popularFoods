import React from 'react'
import styles from './carouselItem.module.css';


const CarouselItem = ({ imageUrl, price, name, photoNumber, reviewNumber, displayModal }) => {
    return (
        <div className={styles.container} onClick={displayModal}>
            <div className={styles.foodImage} style={{ backgroundImage: `url(${imageUrl})` }} >
                <div className={styles.price}>${price}</div>
            </div>
            {/* container for content */}
            <div className={styles.contentContainer}>
                <h3 className={styles.name}>{name}</h3>
                {/* container for photoNumber and reviewsNumber, probably use flexbox for this */}
                <div className={styles.flexRow}>
                    <div className={styles.photoNumber}>{photoNumber} Photos </div><div className={styles.reviewNumber}> • {reviewNumber} Reviews</div>
                </div>
            </div>
        </div >
    );
};

export default CarouselItem;