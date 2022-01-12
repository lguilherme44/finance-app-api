import { Request, Response } from "express";
import { GetTransactionsService } from "../../services/transactions/GetTransactionsService";
import { UpdateTransactionService } from "../../services/transactions/UpdateTransactionService";

class UpdateTransactionsController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { description, value, date, type } = request.body;

    const data = {
      description,
      value,
      date,
      type,
    };

    const transaction = new UpdateTransactionService();
    await transaction.execute(id, data);

    return response.json(transaction);
  }
}

export { UpdateTransactionsController };
