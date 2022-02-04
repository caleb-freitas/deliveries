import { hash } from "bcrypt";

import { prisma } from "../../../../database/prismaClient";

interface ICreateDeliveryman {
  user_name: string;
  password: string;
}

class CreateDeliverymanUseCase {
  async execute({ user_name, password }: ICreateDeliveryman) {
    const deliverymanExists = await prisma.deliverymen.findFirst({
      where: {
        user_name: {
          equals: user_name,
          mode: "insensitive",
        },
      },
    });

    if (deliverymanExists) {
      throw new Error("Deliveryman already exists");
    }

    const hashedPassword = await hash(password, 10);
    const deliveryman = await prisma.deliverymen.create({
      data: {
        user_name,
        password: hashedPassword,
      },
    });

    return deliveryman;
  }
}

export { CreateDeliverymanUseCase };
