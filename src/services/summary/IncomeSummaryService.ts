import prismaClient from "../../prisma";

class IncomeSummaryService {
  async execute(user_id: string) {
    try {
      const transactions = await prismaClient.transaction.groupBy({
        by: ["type"],
        where: {
          type: "income",
          user: {
            id: user_id,
          },
        },
        _sum: {
          value: true,
        },
      });

      return transactions;
    } catch (error) {
      return error;
    }
  }
}

export { IncomeSummaryService };
