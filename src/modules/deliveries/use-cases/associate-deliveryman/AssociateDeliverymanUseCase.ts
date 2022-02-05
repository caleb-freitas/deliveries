import { prisma } from "../../../../database/prismaClient";

interface IAssociateDeliveryman {
  id_delivery: string;
  id_deliveryman: string;
}

class AssociateDeliverymanUseCase {
  async execute({ id_delivery, id_deliveryman }: IAssociateDeliveryman) {
    const associatedDelivery = await prisma.deliveries.update({
      where: {
        id: id_delivery,
      },
      data: {
        id_deliveryman,
      },
    });
    return associatedDelivery;
  }
}

export { AssociateDeliverymanUseCase };
