import prismaClient from "../../prisma";

class CreateTransactionService {
  async execute(
    description: string,
    value: number,
    date: string,
    user_id: string,
    type: string
  ) {
    const transaction = await prismaClient.transaction.create({
      data: { description, value, date, user_id, type },
      include: {
        user: true,
      },
    });

    return transaction;
  }
}

export { CreateTransactionService };
