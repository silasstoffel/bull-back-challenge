import { Request, Response } from "express";
import {container} from "tsyringe";

import { LoadAccountUseCase } from "../../use-cases/load-account-use-case";
import { AuthException } from "./auth-exceptions";


export class LoadAccountController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(LoadAccountUseCase)

    try {
        const data = await useCase.execute(req.accountId);
        return res.status(200).json(data);
    } catch (error: unknown) {
        return AuthException.resolve(res, error)
    }
  }
}
