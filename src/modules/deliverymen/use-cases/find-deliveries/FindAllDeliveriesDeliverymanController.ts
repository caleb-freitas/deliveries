import { Request, Response } from "express";

import { FindAllDeliveriesDeliverymanUseCase } from "./FindAllDeliveriesDeliverymanUseCase";

class FindAllDeliveriesDeliverymanController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_deliveryman } = request;
    const findAllDeliveriesUseCase = new FindAllDeliveriesDeliverymanUseCase();
    const deliveries = await findAllDeliveriesUseCase.execute(id_deliveryman);
    return response.json(deliveries);
  }
}

export { FindAllDeliveriesDeliverymanController };
