import React, { Component } from 'react';

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
        let { name, friendNumber, reviewNumber, body, dish, stars, date, userAvatar } = this.props;
        let formattedName;
        if (name) {
            let names = name.split(' ');
            formattedName = `${names[0]} ${names[1].charAt(0)}.`;
        } else {
            formattedName = 'Anonymous';
        }

        return (
            <div>
                <img src={userAvatar} />
                <div>{formattedName}</div>
                <div>
                    <div>
                        {friendNumber}
                    </div>
                    <div>
                        {reviewNumber}
                    </div>
                </div>
                <div>
                    <div>{stars}</div>
                    <div>{date}</div>
                </div>
                <div>
                    {this.state.displayFull ? body : body}
                </div>
                <div onClick={this.toggleBody}>{this.state.displayFull ? 'Read less' : 'Read more'}</div>
            </div>
        )
    }
}

export default ModalReview;