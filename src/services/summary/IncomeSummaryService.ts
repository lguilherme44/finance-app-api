import prismaClient from "../../prisma";

class IncomeSummaryService {
  async execute(email: string) {
    try {
      const transactions = await prismaClient.transaction.groupBy({
        by: ["type"],
        where: {
          type: "income",
          user: {
            id: email,
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
