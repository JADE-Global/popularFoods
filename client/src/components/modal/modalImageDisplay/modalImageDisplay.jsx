import React from 'react';
import styles from './modalImageDisplay.module.css';
import PancakeLoader from '../preloaders/pancakeLoader.jsx'
import LargeLeftScrollIcon from '../icons/largeLeftScrollIcon.jsx';
import LargeRightScrollIcon from '../icons/largeRightScrollIcon.jsx';
const ModalImageDisplay = ({ image, picturesActive, imageIndex, caption, imageQuantity, displayNextImage, displayPreviousImage }) => {
    return (
        <div className={styles.container}>
            {image && picturesActive ? <React.Fragment>
                <button className={`${styles.scrollButton} ${styles.leftScrollButton}`} onClick={displayPreviousImage}><LargeLeftScrollIcon /></button>
                <div className={styles.imageContainer}>
                    <img className={styles.image}
                        src={image}
                    />
                </div>
                <div className={styles.captionContainer}>
                    <div className={styles.caption}>
                        {caption}
                    </div>
                    <div className={styles.indexTracker}>{imageIndex + 1} of {imageQuantity}</div>
                </div>
                <button className={`${styles.scrollButton} ${styles.rightScrollButton}`} onClick={displayNextImage}><LargeRightScrollIcon /></button>
            </React.Fragment>
                : <PancakeLoader />}

        </div>
    )
}
export default ModalImageDisplay;