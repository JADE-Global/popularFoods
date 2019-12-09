import React, { Suspense, lazy } from "react";
const ModalReview = React.lazy(() => import("../modalReview/modalReview.jsx"));
import styles from "./modalReviewsContainer.module.css";

const ModalReviewsContainer = ({ dish, reviewQuantity, reviews }) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2>{dish}</h2>
        <div className={styles.reviewContainerLabel}>
          Reviews({reviewQuantity})
        </div>
      </div>
      <div className={styles.reviewsContainer}>
        {reviews.map(review => {
          return (
            <Suspense fallback={<div>Loading ...</div>}>
              <ModalReview
                name={review.name}
                friendNumber={review.friendNumber}
                reviewNumber={review.reviewNumber}
                dish={review.dish}
                body={review.body}
                snippet={review.snippet}
                stars={review.stars}
                date={review.date}
                userAvatar={review.userAvatar}
              />
            </Suspense>
          );
        })}
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.footer}>View Menu On Website</div>
      </div>
    </div>
  );
};

export default ModalReviewsContainer;
