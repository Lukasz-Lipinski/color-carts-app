import express, {
  Request,
  Response,
} from 'express';
import path from 'path';
import bodyparser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
const port = process.env.PORT || '5000';

dotenv.config();

app.use(
  cors(),
  express.urlencoded({ extended: true }),
  express.static(
    path.join(
      process.cwd(),
      '/frontend/dist/color-carts'
    )
  ),
  bodyparser.urlencoded({ extended: true }),
  bodyparser.json()
);

app.get(
  '/test',
  (req: Request, res: Response) => {
    res.json({
      msg: 'hello world!',
    });
  }
);

app.use('/', (req: Request, res: Response) => {
  res.sendFile(
    path.join(
      process.cwd(),
      '/frontend/dist/color-carts/index.html'
    )
  );
});

app.listen(port, () => {
  console.log('This app is running on' + port);
});
