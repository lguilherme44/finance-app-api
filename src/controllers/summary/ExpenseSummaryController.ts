import { Request, Response } from "express";
import { ExpenseSummaryService } from "../../services/summary/ExpenseSummaryService";

class ExpenseSummaryController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const expenseTotal = new ExpenseSummaryService();

    const result = await expenseTotal.execute(user_id);

    return response.json(result);
  }
}

export { ExpenseSummaryController };
