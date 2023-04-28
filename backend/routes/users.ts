import express, {
  Request,
  Response,
} from 'express';
import {
  Credentials,
  FrontendResponse,
  addNewUser,
  findUser,
} from '../services';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  return res.send('users works !');
});

router.post<
  any,
  any,
  FrontendResponse,
  Credentials
>('/login', async (req, res) => {
  const foundUser = await findUser(req.body);

  foundUser &&
    res.status(200).json({
      data: foundUser,
    });

  !foundUser &&
    res.status(404).json({
      error: { msg: "User doesn't exsist" },
    });
});

router.post<
  any,
  any,
  FrontendResponse,
  Credentials
>('/register', async (req, res) => {
  const user = await findUser(req.body);

  if (user) {
    return res
      .type('json')
      .status(409)
      .json({
        error: {
          msg: 'User already exsists',
        },
      });
  } else {
    await addNewUser(req.body);

    return res.status(200).json({
      error: {
        msg: 'An account created successfully',
      },
    });
  }
});

export default router;
