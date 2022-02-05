import { Router } from "express";

import { ensureAuthenticateClient } from "./middleware/ensureAuthenticateClient";
import { AuthenticateClientController } from "./modules/accounts/authenticate-client/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/accounts/authenticate-deliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/use-cases/create-client/CreateClientController";
import { CreateDeliveryController } from "./modules/deliveries/use-cases/create-delivery/CreateDeliveryController";
import { CreateDeliverymanController } from "./modules/deliverymen/use-cases/create-deliveryman/CreateDeliverymanController";

const routes = Router();

const createClientController = new CreateClientController();

const authenticateClientController = new AuthenticateClientController();

const createDeliverymanController = new CreateDeliverymanController();

const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();

const createDeliveryController = new CreateDeliveryController();

routes.post("/client/authenticate", authenticateClientController.handle);

routes.post("/client", createClientController.handle);

routes.post("/deliveryman", createDeliverymanController.handle);

routes.post(
  "/deliveryman/authenticate",
  authenticateDeliverymanController.handle
);

routes.post(
  "/delivery",
  ensureAuthenticateClient,
  createDeliveryController.handle
);

export { routes };
