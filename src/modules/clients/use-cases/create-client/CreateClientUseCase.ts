import { hash } from "bcrypt";

import { prisma } from "../../../../database/prismaClient";

interface ICreateClient {
  user_name: string;
  password: string;
}

class CreateClientUseCase {
  async execute({ user_name, password }: ICreateClient) {
    const clientExists = await prisma.clients.findFirst({
      where: {
        user_name: {
          mode: "insensitive",
        },
      },
    });

    if (clientExists) {
      throw new Error("Client already exists");
    }

    const hashedPassword = await hash(password, 10);
    const client = await prisma.clients.create({
      data: {
        user_name,
        password: hashedPassword,
      },
    });

    return client;
  }
}

export { CreateClientUseCase };
