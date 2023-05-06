const express = require("express");
const router = express.Router();
const {
  getReview,
  getReviews,
  createReview,
  updateReview,
  deleteReview,
} = require("../../controllers/reviews/index");

router.route("/").get(getReviews).post(createReview);
router.route("/:id").get(getReview).put(updateReview).delete(deleteReview);

const reviewRouter = router;
module.exports = reviewRouter;
