import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  postId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  ipHash:{
    type: String,
    required: true,
  },
  likedAt:{
    type: Date,
    default: Date.now,
  }
});

likeSchema.index({postId: 1, ipHash: 1}, {unique: true});
const Like = mongoose.models.Like || mongoose.model("Like",likeSchema);
export default Like;