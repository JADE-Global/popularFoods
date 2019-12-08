import React from 'react';
import styles from './pancakeLoader.module.css'

const PancakeLoader = () => {
    return (
        <div className={styles.container}>
            <h1>Cooking in progress..</h1>
            <div id={styles.cooking}>
                <div className={styles.bubble}></div>
                <div className={styles.bubble}></div>
                <div className={styles.bubble}></div>
                <div className={styles.bubble}></div>
                <div className={styles.bubble}></div>
                <div id={styles.area}>
                    <div id={styles.sides}>
                        <div id={styles.pan}></div>
                        <div id={styles.handle}></div>
                    </div>
                    <div id={styles.pancake}>
                        <div id={styles.pastry}></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PancakeLoader;