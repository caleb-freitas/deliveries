import { Router } from "express";

import { ensureAuthenticateClient } from "./middleware/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middleware/ensureAuthenticateDeliveryman";
import { AuthenticateClientController } from "./modules/accounts/use-cases/authenticate-client/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/accounts/use-cases/authenticate-deliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/use-cases/create-client/CreateClientController";
import { FindAllDeliveriesController } from "./modules/clients/use-cases/find-deliveries/FindAllDeliveriesController";
import { AssociateDeliverymanController } from "./modules/deliveries/use-cases/associate-deliveryman/AssociateDeliverymanController";
import { CreateDeliveryController } from "./modules/deliveries/use-cases/create-delivery/CreateDeliveryController";
import { FindDeliveriesInProgressController } from "./modules/deliveries/use-cases/find-deliveries-in-progress/FindDeliveriesInProgressController";
import { UpdateFinishedAtController } from "./modules/deliveries/use-cases/update-finished-at/UpdateFinishedAtController";
import { CreateDeliverymanController } from "./modules/deliverymen/use-cases/create-deliveryman/CreateDeliverymanController";
import { FindAllDeliveriesDeliverymanController } from "./modules/deliverymen/use-cases/find-deliveries/FindAllDeliveriesDeliverymanController";

const routes = Router();

const createClientController = new CreateClientController();

const authenticateClientController = new AuthenticateClientController();

const createDeliverymanController = new CreateDeliverymanController();

const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();

const createDeliveryController = new CreateDeliveryController();

const findDeliveriesInProgressController =
  new FindDeliveriesInProgressController();

const associateDeliverymanController = new AssociateDeliverymanController();

const findAllDeliveriesClient = new FindAllDeliveriesController();

const findAllDeliveriesDeliveryman =
  new FindAllDeliveriesDeliverymanController();

const updateFinishedAtController = new UpdateFinishedAtController();

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

routes.get(
  "/delivery/available",
  ensureAuthenticateDeliveryman,
  findDeliveriesInProgressController.handle
);

routes.put(
  "/delivery/associate-deliveryman/:id",
  ensureAuthenticateDeliveryman,
  associateDeliverymanController.handle
);

routes.get(
  "/client/deliveries",
  ensureAuthenticateClient,
  findAllDeliveriesClient.handle
);

routes.get(
  "/deliveryman/deliveries",
  ensureAuthenticateDeliveryman,
  findAllDeliveriesDeliveryman.handle
);

routes.put(
  "/delivery/update-finished-at/:id",
  ensureAuthenticateDeliveryman,
  updateFinishedAtController.handle
);

export { routes };
