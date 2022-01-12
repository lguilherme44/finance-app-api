import prismaClient from "../../prisma";

class DeleteTransactionService {
  async execute(id: string) {
    const transaction = await prismaClient.transaction.delete({
      where: {
        id,
      },
    });

    return transaction;
  }
}

export { DeleteTransactionService };
