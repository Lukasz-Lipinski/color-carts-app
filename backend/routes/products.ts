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

    products &&
      res.status(200).json({
        products,
      });

    !products &&
      res.status(408).json({
        msg: "A Connectibity error. Currently database isn't available due to maintainance process. Please try again later",
      });
  }
);

export default router;
