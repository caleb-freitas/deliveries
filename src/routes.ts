import { Router } from "express";

import { AuthenticateClientController } from "./modules/account/authenticate-client/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticate-deliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/use-cases/create-client/CreateClientController";
import { CreateDeliverymanController } from "./modules/deliverymen/use-cases/create-deliveryman/CreateDeliverymanController";

const routes = Router();

const createClientController = new CreateClientController();

const authenticateClientController = new AuthenticateClientController();

const createDeliverymanController = new CreateDeliverymanController();

const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();

routes.post("/client/authenticate", authenticateClientController.handle);

routes.post("/client", createClientController.handle);

routes.post("/deliveryman", createDeliverymanController.handle);

routes.post(
  "/deliveryman/authenticate",
  authenticateDeliverymanController.handle
);

export { routes };
