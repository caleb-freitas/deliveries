import { Request, Response } from "express";

import { UpdateFinishedAtUseCase } from "./UpdateFinishedAtUseCase";

class UpdateFinishedAtController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;
    const updateFinishedAtUseCase = new UpdateFinishedAtUseCase();
    const delivery = await updateFinishedAtUseCase.execute({
      id_deliveryman,
      id_delivery,
    });
    return response.json(delivery);
  }
}

export { UpdateFinishedAtController };
