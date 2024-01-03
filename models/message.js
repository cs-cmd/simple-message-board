import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema({
  date_posted: {type: Date, required: true, default: Date.now},
  original_poster: {type: String, required: true, minLength: 3, maxLength: 100},
  text: {type: String, required: true, minLength: 1, maxLength: 500},
});

// no virtuals

const Message = mongoose.model('Messages', messageSchema);

export default Message;
