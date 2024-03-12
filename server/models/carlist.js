import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CarSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  photos: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('car', CarSchema);

export default User;