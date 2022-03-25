import { Request, Response } from "express";
import { IncomeSummaryService } from "../../services/summary/IncomeSummaryService";

class IncomeSummaryController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    if (!user_id) {
      return response.status(400).json({ errorCode: "Usuário não encontrado" });
    }

    const transaction = new IncomeSummaryService();

    const result = await transaction.execute(user_id);

    return response.json(result);
  }
}

export { IncomeSummaryController };
