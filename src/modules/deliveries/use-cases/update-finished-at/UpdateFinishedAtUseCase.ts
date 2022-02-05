import { prisma } from "../../../../database/prismaClient";

interface IUpdateFinishedAt {
  id_delivery: string;
  id_deliveryman: string;
}

class UpdateFinishedAtUseCase {
  async execute({ id_delivery, id_deliveryman }: IUpdateFinishedAt) {
    const updatedDelivery = await prisma.deliveries.updateMany({
      where: {
        id: id_delivery,
        id_deliveryman,
      },
      data: {
        finished_at: new Date(),
      },
    });
    return updatedDelivery;
  }
}

export { UpdateFinishedAtUseCase };
