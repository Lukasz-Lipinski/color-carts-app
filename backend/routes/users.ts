import express, {
  Request,
  Response,
} from 'express';
import {
  Credentials,
  User,
  addNewUser,
  findUser,
} from '../services';
import { GetUserDto } from '../Dto/User/UserDto';
import { ResponseService } from '../services/ResponseService';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  return res.send('users works !');
});

router.post<
  any,
  any,
  ResponseService<User>,
  Credentials
>('/login', async (req, res) => {
  const foundUser = await findUser(req.body);

  foundUser &&
    res.status(200).json({
      data: foundUser,
    });

  !foundUser &&
    res.status(404).json({
      msg: "User doesn't exsist",
    });
});

router.post<
  any,
  any,
  ResponseService<GetUserDto>,
  Credentials
>('/register', async (req, res) => {
  const user = await findUser(req.body);

  if (user) {
    return res.type('json').status(409).json({
      msg: 'User already exsists',
    });
  } else {
    await addNewUser(req.body);
    let responseUser: GetUserDto;
    const newUser = await findUser(req.body);

    console.log('added user', newUser);

    if (newUser) {
      responseUser = {
        ...newUser,
        surname: '',
      };
    }

    return res.status(200).json({
      data: newUser,
    });
  }
});

export default router;
