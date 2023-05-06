const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema({
  start_data: { type: Date, required: [true, "start date required"] },
  end_data: { type: Date, required: [true, "end date required"] },
  sku: { type: String, required: [true, "sku required"] },
  reviews: [
    {
      timestamp: {
        type: Date,
        default: Date.now(),
        required: [true, "timestamps required"],
      },
    },
    { username: { type: String, required: [true, "username required"] } },
    {
      rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
        required: [true, "rating required"],
      },
    },
    { review: { type: String, required: [true, "review required"] } },
  ],
  sum_reviews: { type: Number },
  num_reviews: { type: Number },
});

const ReviewsModel = mongoose.model("reviews", reviewsSchema);

module.exports = ReviewsModel;
