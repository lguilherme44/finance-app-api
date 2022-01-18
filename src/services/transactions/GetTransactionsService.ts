import prismaClient from "../../prisma";

class GetTransactionsService {
  async execute(user_id: string) {
    try {
      const transactions = await prismaClient.transaction.findMany({
        orderBy: {
          type: "desc",
        },
        include: {
          user: true,
        },
        where: {
          user_id: user_id,
        },
      });

      return transactions;
    } catch (error) {
      return error;
    }
  }
}

export { GetTransactionsService };
