import { Request, Response } from "express";
import { IncomeSummaryService } from "../../services/summary/IncomeSummaryService";

class IncomeSummaryController {
  async handle(request: Request, response: Response) {
    const { email } = request.body;

    const transaction = new IncomeSummaryService();

    const result = await transaction.execute(email);

    return response.json(result);
  }
}

export { IncomeSummaryController };
