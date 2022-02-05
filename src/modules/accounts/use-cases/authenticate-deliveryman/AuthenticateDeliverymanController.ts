import { Request, Response } from "express";

import { AuthenticateDeliverymanUseCase } from "./AuthenticateDeliverymanUseCase";

class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { user_name, password } = request.body;
    const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase();
    const token = await authenticateDeliverymanUseCase.execute({
      user_name,
      password,
    });
    return response.status(200).json(token);
  }
}

export { AuthenticateDeliverymanController };
