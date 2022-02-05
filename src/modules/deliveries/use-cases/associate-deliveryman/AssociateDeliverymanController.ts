import { Request, Response } from "express";

import { AssociateDeliverymanUseCase } from "./AssociateDeliverymanUseCase";

class AssociateDeliverymanController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;
    const associateDeliverymanUseCase = new AssociateDeliverymanUseCase();
    const delivery = await associateDeliverymanUseCase.execute({
      id_deliveryman,
      id_delivery,
    });
    return response.json(delivery);
  }
}

export { AssociateDeliverymanController };
