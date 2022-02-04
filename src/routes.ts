import { Router } from "express";

import { AuthenticateClientController } from "./modules/account/authenticate-client/AuthenticateClientController";
import { CreateClientController } from "./modules/clients/use-cases/create-client/CreateClientController";
import { CreateDeliverymanController } from "./modules/deliverymen/use-cases/create-deliveryman/CreateDeliverymanController";

const routes = Router();

const createClientController = new CreateClientController();

const authenticateClientController = new AuthenticateClientController();

const createDeliverymanController = new CreateDeliverymanController();

routes.post("/authenticate", authenticateClientController.handle);

routes.post("/client", createClientController.handle);

routes.post("/deliveryman", createDeliverymanController.handle);

export { routes };
