import { sign } from "jsonwebtoken";
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

      return { data: user };
    }

    const token = sign(
      {
        user: {
          name: userExist.name,
          avatar: userExist.avatar,
          id: userExist.id,
        },
      },
      process.env.JWT_SECRET,
      {
        subject: userExist.id,
        expiresIn: "1d",
      }
    );
    return { token, userExist };
  }
}

export { CreateUserService };
