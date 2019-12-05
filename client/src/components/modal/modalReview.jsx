import React, { Component } from 'react';
import FriendNumber from './icons/friendNumber.jsx';
import reviewNumber from './icons/reviewNumber.jsx';
import styles from './modalReview.module.css';
import ReviewNumber from './icons/reviewNumber.jsx';

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

        return (
            <div className={styles.container}>
                <img src={userAvatar} className={styles.avatar} />
                <div className={styles.name}>{formattedName}</div>
                <div>
                    <div>
                        <FriendNumber /> {friendNumber}
                    </div>
                    <div>
                        <ReviewNumber /> {reviewNumber}
                    </div>
                </div>
                <div>
                    <div>{stars}</div>
                    <div>{date}</div>
                </div>
                <div>
                    {this.state.displayFull ? body : snippet}
                </div>
                <div className={styles.bodyToggle} onClick={this.toggleBody}>{this.state.displayFull ? 'Read less' : 'Read more'}</div>
            </div>
        )
    }
}

export default ModalReview;