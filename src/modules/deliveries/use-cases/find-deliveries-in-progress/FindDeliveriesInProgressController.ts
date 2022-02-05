import { Request, Response } from "express";

import { FindDeliveriesInProgressUseCase } from "./FindDeliveriesInProgressUseCase";

class FindDeliveriesInProgressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findDeliveriesInProgressUseCase =
      new FindDeliveriesInProgressUseCase();

    const deliveries = await findDeliveriesInProgressUseCase.execute();

    return response.json(deliveries);
  }
}

export { FindDeliveriesInProgressController };
