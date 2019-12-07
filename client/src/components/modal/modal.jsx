import React, { Component, Suspense, lazy } from 'react';
import RightScrollIcon from '../carousel/icons/rightScrollIcon.jsx';
import LeftScrollIcon from '../carousel/icons/leftScrollIcon.jsx';
import styles from './modal.module.css'

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: ['Soup', 'Salad', 'Chicken', 'Desert'],
            pictures: [],
            previousDish: '',
            nextDish: 'Salad',
            pictureIndex: 0
        }
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.closeButton}>Close X</div>
                <div className={styles.contentContainer}>

                </div>
                {this.state.pictureIndex !== 0 && <div className={styles.previousDish}><span>{this.state.previousDish}</span> <LeftScrollIcon fill='white' /></div>}
                {this.state.pictureIndex !== this.state.dishes.length - 1 && <div className={styles.nextDish}><span>{this.state.nextDish}</span> <RightScrollIcon fill='white' /></div>}
            </div>
        )
    }
}
export default Modal;

