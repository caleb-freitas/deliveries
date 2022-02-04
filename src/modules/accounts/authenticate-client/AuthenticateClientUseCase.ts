import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { prisma } from "../../../database/prismaClient";

interface IAuthenticateClient {
  user_name: string;
  password: string;
}

class AuthenticateClientUseCase {
  async execute({ user_name, password }: IAuthenticateClient) {
    const client = await prisma.clients.findFirst({
      where: {
        user_name,
      },
    });

    if (!client) {
      throw new Error("Username or password incorrect");
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Username or password incorrect");
    }

    const token = sign({ user_name }, "019acc25a4e242bb55ad489832ada12d", {
      subject: client.id,
      expiresIn: "1d",
    });

    return token;
  }
}

export { AuthenticateClientUseCase };
