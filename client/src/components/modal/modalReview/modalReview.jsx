import React, { Component } from 'react';
import moment from 'moment';
import FriendNumber from '../icons/friendNumber.jsx';
import ReviewNumber from '../icons/reviewNumber.jsx';
import styles from './modalReview.module.css';

class ModalReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayFull: false
        }
        this.toggleBody = this.toggleBody.bind(this);
    }

    toggleBody() {
        this.setState(state => ({ displayFull: !state.displayFull }))
    }
    render() {
        let { name, friendNumber, reviewNumber, body, snippet, dish, stars, date, userAvatar } = this.props;
        let formattedName;
        if (name) {
            let names = name.split(' ');
            formattedName = `${names[0]} ${names[1].charAt(0)}.`;
        } else {
            formattedName = 'Anonymous';
        }
        let starsArray = [0, 1, 2, 3, 4];

        return (
            <div className={styles.container}>
                <img src={userAvatar} className={styles.avatar} />
                <div className={styles.name}>{formattedName}</div>
                <div className={styles.friends}>
                    <FriendNumber /> {friendNumber}
                </div>
                <div className={styles.reviews}>
                    <ReviewNumber fill='rgb(241, 92, 0)' /> {reviewNumber}
                </div>
                <div className={styles.stars}>stars: {starsArray.map((data, index) => {
                    return (
                        <ReviewNumber fill={stars === 5 ? 'rgb(211,35,34)'
                            : stars === 4 && index + 1 <= stars ? 'rgb(241,92,79)'
                                : stars === 3 && index + 1 <= stars ? 'rgb(255,146,66)'
                                    : stars === 2 && index + 1 <= stars ? 'rgb(254,192,17)'
                                        : stars === 1 && index + 1 <= stars ? 'rgb(241,191,125)'
                                            : 'rgb(204,204,204)'} />
                    )
                })}</div>
                <div className={styles.date}>{moment(date).format("M/D/YYYY")}</div>
                <div className={styles.body}>
                    {this.state.displayFull ? body : snippet}
                </div>
                <div className={styles.bodyToggle} onClick={this.toggleBody}>{this.state.displayFull ? 'Read less' : 'Read more'}</div>
            </div>
        )
    }
}

export default ModalReview;