// models/BlogPost.js
import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imgurl: { type: String }
});
const BlogPost = mongoose.model('BlogPost', blogPostSchema);
export default BlogPost;
