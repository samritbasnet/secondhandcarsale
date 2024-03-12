import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  address: {
    type: String,
    required: true,
  },
  cars: [
    {
      type: Schema.Types.ObjectId,
      ref: 'carlist',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model('order', OrderSchema);

export default Order;