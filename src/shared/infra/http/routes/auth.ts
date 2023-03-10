import { Router } from "express";
import { AuthController } from "../../../../modules/accounts/infra/http/auth-controller";
import { LoadAccountController } from "../../../../modules/accounts/infra/http/load-account-controller";
import { GuardMiddleware } from "../middlewares/guad-middlewares";

const authRoute = Router();
const authController = new AuthController();
const loadAccountController = new LoadAccountController();

authRoute.get("/me", GuardMiddleware, loadAccountController.handle);
authRoute.post("/", authController.handle);

export { authRoute }
