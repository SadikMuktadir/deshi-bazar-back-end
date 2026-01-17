import { sendImageToCloudinary } from "../../utils/hosting/sendImageToCloudinary";
import { IProduct } from "./product.interface";
import Product from "./product.model";

const createProduct = async (payload: IProduct, file: any) => {
  let imageUrl;
  if (file) {
    const imageName = `${payload?.name}`;
    const path = file?.path;
    const uploadImage = await sendImageToCloudinary(imageName, path);
    imageUrl = uploadImage?.secure_url;
  }
  const ProductData = { ...payload, image: imageUrl };
  const result = await Product.create(ProductData);
  return result;
};

const getProduct = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProduct = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateProduct = async (id: string, data: IProduct) => {
  const result = await Product.findByIdAndUpdate(id, data, { new: true });
  return result;
};

const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const ProductService = {
  createProduct,
  getProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
