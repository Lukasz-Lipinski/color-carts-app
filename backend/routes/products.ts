import express, {
  Request,
  Response,
} from 'express';
import { getAllProducts } from '../services';

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

router.get(
  '/bestsellers',
  async (req: Request, res: Response) => {
    const bestsellers = (
      await getAllProducts()
    ).slice(0, 5);

    bestsellers &&
      res.status(200).json(bestsellers);

    !bestsellers &&
      res.status(404).json({
        msg: 'Not found',
      });
  }
);

export default router;
