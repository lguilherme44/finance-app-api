import prismaClient from "../../prisma";

class ExpenseSummaryService {
  async execute(user_id: string) {
    try {
      const expenseTotal = await prismaClient.transaction.groupBy({
        by: ["type"],
        where: {
          type: "expense",
          user: {
            id: user_id,
          },
        },
        _sum: {
          value: true,
        },
      });

      return expenseTotal;
    } catch (error) {
      return error;
    }
  }
}

export { ExpenseSummaryService };
