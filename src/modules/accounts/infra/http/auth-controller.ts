import { Request, Response } from "express";
import {container} from "tsyringe";

import { AuthenticateAccountUseCase } from "../../use-cases/authenticate-account-use-case";
import { AuthException } from "./auth-exceptions";

export class AuthController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const useCase = container.resolve(AuthenticateAccountUseCase)

    try {
        const data = await useCase.execute({ email, password });
        return res.status(200).json(data);
    } catch (error: unknown) {
        return AuthException.resolve(res, error)
    }
  }
}
