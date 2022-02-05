import { prisma } from "../../../../database/prismaClient";

class FindAllDeliveriesDeliverymanUseCase {
  async execute(id_deliveryman: string) {
    const deliveries = await prisma.deliverymen.findMany({
      where: {
        id: id_deliveryman,
      },
      select: {
        user_name: true,
        Deliveries: true,
      },
    });
    return deliveries;
  }
}

export { FindAllDeliveriesDeliverymanUseCase };
