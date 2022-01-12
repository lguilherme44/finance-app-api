import { Request, Response } from "express";
import { CreateTransactionService } from "../../services/transactions/CreateTransactionService";

class CreateTransactionController {
  async handle(request: Request, response: Response) {
    const { description, value, date, type } = request.body;

    const { user_id } = request;

    const transaction = new CreateTransactionService();

    const result = await transaction.execute(
      description,
      value,
      date,
      user_id,
      type
    );

    return response.json(result);
  }
}

export { CreateTransactionController };
