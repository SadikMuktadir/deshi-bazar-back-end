import { Request, Response } from 'express';
import { ProductService } from './produvt.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await ProductService.createProduct(payload, req?.file);
    res.status(201).send({
      success: true,
      message: 'Product Created Succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Product is not created',
      error: error,
    });
  }
};
const getProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getProduct();
    res.status(201).send({
      success: true,
      message: 'Product get Succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Product is not get',
      error: error,
    });
  }
};
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductService.getSingleProduct(productId);
    res.status(201).send({
      success: true,
      message: 'Single Product get',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Single Product is not get',
      error: error,
    });
  }
};
const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const body = req.body;
    const result = await ProductService.updateProduct(productId, body);
    res.status(201).send({
      success: true,
      message: 'Product update Succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Product is not updated',
      error: error,
    });
  }
};
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductService.deleteProduct(productId);
    res.status(201).send({
      success: true,
      message: 'Product deleted Succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Product is not deleted',
      error: error,
    });
  }
};

export const ProductController = {
  createProduct,
  getProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
