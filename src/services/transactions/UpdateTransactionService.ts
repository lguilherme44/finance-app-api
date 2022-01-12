import prismaClient from "../../prisma";

interface IUpdateTransaction {
  description: string;
  value: number;
  date: string;
  type: string;
}

class UpdateTransactionService {
  async execute(id: string, data: IUpdateTransaction) {
    const transactions = await prismaClient.transaction.update({
      where: {
        id,
      },
      data,
    });

    return transactions;
  }
}

export { UpdateTransactionService };
