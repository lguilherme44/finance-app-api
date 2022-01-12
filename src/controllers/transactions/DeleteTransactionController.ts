import { Request, Response } from "express";
import { DeleteTransactionService } from "../../services/transactions/DeleteTransactionService";

class DeleteTransactionController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const transaction = new DeleteTransactionService();

    const result = await transaction.execute(id);

    return response.json(result);
  }
}

export { DeleteTransactionController };
