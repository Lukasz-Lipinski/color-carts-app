import express, {
  Request,
  Response,
} from 'express';

export interface User {
  name: string;
  surname: string;
  email: string;
  address?: {
    city: string;
    postcode: string;
    street: string;
    flatNo: number;
  };
}

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  return res.send('users works !');
});

router.post(
  '/login',
  (req: Request<any, User>, res: Response) => {}
);

router.post(
  '/register',
  (req: Request, res: Response) => {}
);

export default router;
