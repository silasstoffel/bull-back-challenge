import { Router } from "express";
import { AuthController } from "../../../../modules/accounts/infra/http/auth-controller";

const authRoute = Router();
const authController = new AuthController();

authRoute.get("/me", authController.handle);
authRoute.post("/", authController.handle);

export { authRoute }
