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
      <Suspense
        fallback={<div className={styles.reviewContainer}>Loading ...</div>}
      >
        <div className={styles.reviewsContainer}>
          {reviews.map(review => {
            return (
              <ModalReview
                name={review.user.name}
                friendNumber={review.user.friendsNumber}
                reviewNumber={review.user.reviewsNumber}
                dish={review.dish.name}
                body={review.body}
                // snippet={review.snippet}
                stars={review.stars}
                date={review.createdAt}
                userAvatar={review.user.avatarURL}
              />
            );
          })}
        </div>
      </Suspense>
      <div className={styles.footerContainer}>
        <div className={styles.footer}>View Menu On Website</div>
      </div>
    </div>
  );
};

export default ModalReviewsContainer;
