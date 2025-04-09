import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    index: true,
  },
  ipHash: {
    type: String,
    required: true,
  },
  likedAt: {
    type: Date,
    default: Date.now,
  }
});

likeSchema.index({ slug: 1, ipHash: 1 }, { unique: true });

const Like = mongoose.models.Like || mongoose.model("Like", likeSchema);
export default Like;