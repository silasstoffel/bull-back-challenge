import { Router } from "express";
import { authRoute } from "./auth";
import { healthCheckRoute } from "./health-check";

const router = Router();

const routers = [
    { path: "/health-check", action: healthCheckRoute },
    { path: "/auth", action: authRoute },
];

for (const route of routers) {
    router.use(route.path, route.action);
}

export { router };
