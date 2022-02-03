import { Request, Response } from "express";

import { AuthenticateClienUseCase } from "./AuthenticateClientUseCase";

class AuthenticateClientController {
  async handle(request: Request, response: Response) {
    const { user_name, password } = request.body;
    const authenticateClientUseCase = new AuthenticateClienUseCase();
    const token = await authenticateClientUseCase.execute({
      user_name,
      password,
    });
    return response.status(200).json(token);
  }
}

export { AuthenticateClientController };
