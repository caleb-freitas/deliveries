import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { prisma } from "../../../../database/prismaClient";

interface IAuthenticateDeliveryman {
  user_name: string;
  password: string;
}

class AuthenticateDeliverymanUseCase {
  async execute({ user_name, password }: IAuthenticateDeliveryman) {
    const deliveryman = await prisma.deliverymen.findFirst({
      where: {
        user_name,
      },
    });

    if (!deliveryman) {
      throw new Error("Username or password incorrect");
    }

    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error("Username or password incorrect");
    }

    const token = sign({ user_name }, "019acc25a4e242bb55ad490832ada12d", {
      subject: deliveryman.id,
      expiresIn: "1d",
    });

    return token;
  }
}

export { AuthenticateDeliverymanUseCase };
