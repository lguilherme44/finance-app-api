import { Request, Response } from "express";
import { IncomeSummaryService } from "../../services/summary/IncomeSummaryService";

class IncomeSummaryController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const transaction = new IncomeSummaryService();

    const result = await transaction.execute(user_id);

    return response.json(result);
  }
}

export { IncomeSummaryController };
