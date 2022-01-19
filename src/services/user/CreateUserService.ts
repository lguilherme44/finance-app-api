import prismaClient from "../../prisma";

class CreateUserService {
  async execute(name: string, email: string, avatar: string) {
    const userExist = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    if (!userExist) {
      const user = await prismaClient.user.create({
        data: { name, email, avatar },
      });

      return user;
    }

    return userExist;
  }
}

export { CreateUserService };
