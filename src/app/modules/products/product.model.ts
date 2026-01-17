import { model, Schema } from 'mongoose';
import { IProduct } from './product.interface';

const productSchema = new Schema<IProduct>(
  {
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    rating: {
      type: Number,
    },
    category: {
      type: String,
      enum: ['Phone', 'Computer'],
    },
  },
  {
    timestamps: true,
  },
);

const Product = model<IProduct>('Product', productSchema);
export default Product;
