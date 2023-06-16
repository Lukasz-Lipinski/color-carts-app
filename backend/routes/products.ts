import express, {
  Request,
  Response,
} from 'express';
import {
  Product,
  getAllProducts,
  getProductsByCategory,
} from '../services';
import { ResponseService } from '../services/ResponseService';

const router = express.Router();

router.get(
  '/',
  async (req: Request, res: Response) => {
    const products = await getAllProducts();

    products && res.status(200).json(products);

    !products &&
      res.status(408).json({
        msg: "A Connectibity error. Currently database isn't available due to maintainance process. Please try again later",
      });
  }
);

router.get<
  any,
  any,
  ResponseService<Product[]>,
  any
>('/bestsellers', async (req, res) => {
  const products = (await getAllProducts()).slice(
    0,
    5
  );

  products &&
    res.status(200).json({
      data: products,
    });

  !products &&
    res.status(404).json({
      msg: 'Products not available!',
    });
});

router.get<
  any,
  any,
  ResponseService<Product[]>,
  any
>('/:category', async (req, res) => {
  const { category } = req.params;
  const products = await getProductsByCategory(
    category
  );

  return products
    ? res.status(200).json({
        data: products,
      })
    : res.status(404).json({
        msg: 'Not found',
      });
});

router.get<
  any,
  any,
  ResponseService<Product[]>,
  any
>('/:category/:subcategory', async (req, res) => {
  const { category, subcategory } = req.params;

  const allProducts = await getAllProducts();

  const products = allProducts.filter(
    (product) =>
      product.category === category &&
      product.subcategory === subcategory
  );

  return products.length
    ? res.status(200).json({
        data: products,
      })
    : res.status(404).json({
        msg: 'Not found',
      });
});

export default router;
