import { prisma } from "../../../../database/prismaClient";

class FindDeliveriesInProgressUseCase {
  async execute() {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        finished_at: null,
        id_deliveryman: null,
      },
    });
    return deliveries;
  }
}

export { FindDeliveriesInProgressUseCase };
