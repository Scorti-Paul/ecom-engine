const ReviewsModel = require("../../db/models/reviews/");
const asyncHandler = require("express-async-handler");

const getReviews = asyncHandler(async (req, res) => {});
const getReview = asyncHandler(async (req, res) => {});
const createReview = asyncHandler(async (req, res) => {});
const updateReview = asyncHandler(async (req, res) => {});
const deleteReview = asyncHandler(async (req, res) => {});

module.exports = {
  getReview,
  getReviews,
  createReview,
  updateReview,
  deleteReview,
};
