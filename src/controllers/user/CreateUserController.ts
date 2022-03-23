import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, avatar } = request.body;

    const user = new CreateUserService();

    const result = await user.execute(name, email, avatar);

    console.log(result);
    return response.json(result);
  }
}

export { CreateUserController };
