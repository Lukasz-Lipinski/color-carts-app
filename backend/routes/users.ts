import express, {
  Request,
  Response,
} from 'express';
import {
  Credentials,
  addNewUser,
  findUser,
} from '../services';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  return res.send('users works !');
});

router.post(
  '/login',
  async (
    req: Request<any, Credentials>,
    res: Response
  ) => {
    const foundUser = await findUser(req.body);

    foundUser &&
      res.status(200).json({
        foundUser,
      });

    !foundUser &&
      res.status(404).json({
        msg: "User doesn't exsist",
      });
  }
);

router.post(
  '/register',
  async (
    req: Request<any, Credentials>,
    res: Response
  ) => {
    const user = await findUser(req.body);

    if (user) {
      return res.status(409).json({
        msg: 'User already exsists',
      });
    } else {
      await addNewUser(req.body);

      return res.status(200).json({
        msg: 'An account created successfully',
      });
    }
  }
);

export default router;
