import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
	const users = [{ userName: 'John' }];
	res.status(StatusCodes.OK).json(users);
});

usersRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
	const uuid = req.params.uuid;
	res.status(StatusCodes.OK).send({ uuid });
});

usersRoute.post('/users', (request: Request, res: Response, next: NextFunction) => {
	const newUser = request.body;
	res.status(201).send(newUser);
});

usersRoute.put('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
	const uuid = req.params.uuid;
	const modifiedUser = req.body;

	modifiedUser.uuid = uuid;

	res.status(StatusCodes.OK).send(modifiedUser);
});

usersRoute.delete('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
	const uuid = req.params.uuid;
	res.status(StatusCodes.OK).send(`Deleted user ${uuid}`);
});

export default usersRoute;