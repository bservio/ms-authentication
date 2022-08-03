import express, { Request, Response, NextFunction } from 'express';
import usersRoute from './routes/users.route';

const app = express();

//App Config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(usersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
	res.status(200).send({ foo: 'Sucesso!' })
});

app.listen(3000, () => {
	console.log('listening on port 3000');
});