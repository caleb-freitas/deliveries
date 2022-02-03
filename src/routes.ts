import { Router } from "express";

import { AuthenticateClientController } from "./modules/account/authenticate-client/AuthenticateClientController";
import { CreateClientController } from "./modules/clients/use-cases/create-client/CreateClientController";

const routes = Router();

const createClientController = new CreateClientController();

const authenticateClientController = new AuthenticateClientController();

routes.post("/authenticate", authenticateClientController.handle);
routes.post("/client", createClientController.handle);

export { routes };
