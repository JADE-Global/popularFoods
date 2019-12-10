import React, { Component, Suspense, lazy } from "react";
import ModalImageDisplay from "./modalImageDisplay/modalImageDisplay.jsx";
import ModalReview from "./modalReview/modalReview.jsx";
import ModalReviewContainer from "./modalReviewContainer/modalReviewsContainer.jsx";
import RightScrollIcon from "../carousel/icons/rightScrollIcon.jsx";
import LeftScrollIcon from "../carousel/icons/leftScrollIcon.jsx";
import styles from "./modal.module.css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      dishes: ["Soup", "Salad", "Chicken", "Dessert"],
      pictures: [
        {
          src: "https://source.unsplash.com/random?food",
          caption: "This is a test caption for Soup",
        },
        {
          src: "https://source.unsplash.com/random?food",
          caption: "This is a test caption for Salad",
        },
        {
          src: "https://source.unsplash.com/random?food",
          caption: "This is a test caption for Chicken",
        },
        {
          src: "https://source.unsplash.com/random?food",
          caption: "This is a test caption for Desert",
        },
      ],
      previousDish: "",
      currentDish: this.props.dish,
      nextDish: "",
      dishIndex: this.props.dishIndex,
      pictureIndex: 0,
      picturesActive: false,
    };
    this.displayNextImage = this.displayNextImage.bind(this);
    this.displayPreviousImage = this.displayPreviousImage.bind(this);
    this.nextDish = this.nextDish.bind(this);
    this.previousDish = this.previousDish.bind(this);
    this.fetchDishPictureData = this.fetchDishPictureData.bind(this);
  }
  displayNextImage() {
    if (this.state.pictureIndex === this.state.pictures.length - 1) {
      this.setState({ pictureIndex: 0 });
    } else {
      this.setState(state => ({ pictureIndex: state.pictureIndex + 1 }));
    }
  }
  displayPreviousImage() {
    if (this.setState.pictureIndex === 0) {
      this.setState(state => ({ pictureIndex: state.pictures.length - 1 }));
    } else {
      this.setState(state => ({ pictureIndex: state.pictureIndex - 1 }));
    }
  }
  nextDish() {
    this.setState(
      state => ({
        dishIndex: state.dishIndex + 1,
        currentDish: state.nextDish,
        nextDish: state.dishes[state.dishIndex + 2],
        previousDish: state.currentDish,
      }),
      () => {
        this.fetchDishPictureData();
      }
    );
  }
  previousDish() {
    this.setState(
      state => ({
        dishIndex: state.dishIndex - 1,
        currentDish: state.previousDish,
        nextDish: state.currentDish,
        previousDish: state.dishes[state.dishIndex - 2],
      }),
      () => {
        this.fetchDishPictureData();
      }
    );
  }
  async fetchDishPictureData() {
    const response = await fetch(
      `http://localhost:3002/api/tests/${this.state.currentDish.toLowerCase()}`
    );
    const data = await response.json();
    this.setState(
      {
        pictures: data.pictures,
        pictureIndex: 0,
      },
      () => {
        this.setState({ picturesActive: true });
      }
    );
  }
  async componentDidMount() {
    const testData = {
      name: "Test Name",
      friendNumber: 4,
      reviewNumber: 8,
      dish: "Test Dish",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Potato Pancake dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      snippet:
        "Duis aute irure Potato Pancake dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      stars: 4,
      date: `${new Date()}`,
      userAvatar: "https://source.unsplash.com/random?person",
    };
    let mockReviews = [];
    for (let i = 0; i < 50; i++) {
      mockReviews.push(testData);
    }
    this.setState({
      reviews: mockReviews,
    });
    if (this.state.dishIndex === 0) {
      this.setState(state => ({
        nextDish: state.dishes[1],
      }));
    } else if (this.state.dishIndex === this.state.dishes.length - 1) {
      this.setState(state => ({
        previousDish: state.dishes[this.state.dishIndex - 1],
      }));
    } else {
      this.setState(state => ({
        nextDish: state.dishes[this.state.dishIndex + 1],
        previousDish: state.dishes[this.state.dishIndex - 1],
      }));
    }
    this.fetchDishPictureData();
  }
  render() {
    let imageSrc;
    let caption;
    if (this.state.picturesActive) {
      imageSrc = this.state.pictures[this.state.pictureIndex].src;
      caption = this.state.pictures[this.state.pictureIndex].caption;
    } else {
      imageSrc = "";
      caption = null;
    }
    return (
      <div className={styles.container} onClick={this.props.closeModal}>
        <div className={styles.closeButton} onClick={this.props.closeModal}>
          Close X
        </div>
        <div className={styles.contentContainer}>
          <ModalImageDisplay
            picturesActive={this.state.picturesActive}
            image={imageSrc}
            imageIndex={this.state.pictureIndex}
            caption={caption}
            imageQuantity={this.state.pictures ? this.state.pictures.length : 0}
            displayNextImage={this.displayNextImage}
            displayPreviousImage={this.displayPreviousImage}
          />
          <ModalReviewContainer
            dish={this.state.currentDish}
            reviewQuantity={this.state.reviews.length}
            reviews={this.state.reviews}
          />
        </div>
        {this.state.dishIndex !== 0 && (
          <div className={styles.previousDish} onClick={this.previousDish}>
            <span>{this.state.previousDish}</span>{" "}
            <LeftScrollIcon fill="white" />
          </div>
        )}
        {this.state.dishIndex !== this.state.dishes.length - 1 && (
          <div className={styles.nextDish} onClick={this.nextDish}>
            <span>{this.state.nextDish}</span> <RightScrollIcon fill="white" />
          </div>
        )}
      </div>
    );
  }
}
export default Modal;
