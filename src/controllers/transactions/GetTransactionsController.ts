import { Request, Response } from "express";
import { GetTransactionsService } from "../../services/transactions/GetTransactionsService";

class GetTransactionsController {
  async handle(request: Request, response: Response) {
    const transaction = new GetTransactionsService();

    // console.log(request.user_id);

    const result = await transaction.execute(request.user_id);

    return response.json(result);
  }
}

export { GetTransactionsController };
