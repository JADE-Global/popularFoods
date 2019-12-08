import React from 'react';
import styles from './modalImageDisplay.module.css';
import PancakeLoader from '../preloaders/pancakeLoader.jsx'
const ModalImageDisplay = ({ image, caption, imageQuantity }) => {
    return (
        <div className={styles.container}>
            {image ? <React.Fragment>
                <img className={styles.image} src={image} />
                <div className={styles.captionContainer}>
                    <div className={styles.caption}>{caption}</div>
                </div>
            </React.Fragment> : <PancakeLoader />}
        </div>
    )
}
export default ModalImageDisplay;