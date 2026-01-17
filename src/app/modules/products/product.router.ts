import { NextFunction, Request, Response, Router } from 'express';
import { upload } from '../../utils/hosting/sendImageToCloudinary';
import { ProductController } from './product.controller';

const productRouter = Router();

productRouter.post(
  '/create-product',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  ProductController.createProduct,
);
productRouter.get('/all-product', ProductController.getProduct);
productRouter.get(
  '/all-product/:productId',
  ProductController.getSingleProduct,
);
productRouter.patch(
  '/update-product/:productId',
  ProductController.updateProduct,
);
productRouter.delete(
  '/delete-product/:productId',
  ProductController.deleteProduct,
);

export default productRouter;
