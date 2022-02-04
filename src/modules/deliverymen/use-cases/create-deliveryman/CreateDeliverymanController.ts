import { Request, Response } from "express";

import { CreateDeliverymanUseCase } from "./CreateDeliverymanUseCase";

class CreateDeliverymanController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_name, password } = request.body;
    const createDeliverymanUseCase = new CreateDeliverymanUseCase();
    const client = await createDeliverymanUseCase.execute({
      user_name,
      password,
    });
    return response.status(201).json(client);
  }
}

export { CreateDeliverymanController };
