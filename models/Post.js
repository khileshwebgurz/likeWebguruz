import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  slug: { type: String, required: true },
  title: { type: Object, required: true },
  content: { type: Object, required: true },
  author: { type: Number },
  wgt_post_views_count: { type: String },
  total_author_likes: { type: String },
  excerpt: { type: Object, required: true },
  acf: { type: Object },
  yoast_head_json: { type: Object },
  date: { type: Date },
});

export default mongoose.models.Post || mongoose.model("Post", postSchema);
