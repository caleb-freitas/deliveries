import { prisma } from "../../../../database/prismaClient";

class FindDeliveriesInProgressUseCase {
  async execute() {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        finished_at: null,
      },
    });
    return deliveries;
  }
}

export { FindDeliveriesInProgressUseCase };
