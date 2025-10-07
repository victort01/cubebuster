import { Request, Response, NextFunction } from "express";
import { z, ZodError } from "zod";

/**
 * Middleware para validar o corpo (body) da requisição usando Zod
 * 
 * Exemplo de uso:
 * router.post("/clientes", validateBody(createClienteSchema), createCliente);
 */
export const validateBody = (schema: z.ZodTypeAny) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = schema.parse(req.body);
      req.body = validatedData;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: "Dados de entrada inválidos",
          errors: error.issues.map((err) => ({
            campo: err.path.join("."),
            mensagem: err.message,
          })),
        });
      }
      next(error);
    }
  };
};

/**
 * Middleware para validar parâmetros da URL (ex: /clientes/:id)
 * 
 * Exemplo de uso:
 * router.get("/clientes/:id", validateParams(idParamSchema), getClienteById);
 */
export const validateParams = (schema: z.ZodTypeAny) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedParams = schema.parse(req.params);
      (req as any).params = validatedParams;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: "Parâmetros inválidos",
          errors: error.issues.map((err) => ({
            campo: err.path.join("."),
            mensagem: err.message,
          })),
        });
      }
      next(error);
    }
  };
};

/**
 * Middleware para validar parâmetros de consulta (query params)
 * 
 * Exemplo de uso:
 * router.get("/filmes", validateQuery(filmeQuerySchema), getAllFilmes);
 */
export const validateQuery = (schema: z.ZodTypeAny) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedQuery = schema.parse(req.query);
      (req as any).query = validatedQuery;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: "Parâmetros de consulta inválidos",
          errors: error.issues.map((err) => ({
            campo: err.path.join("."),
            mensagem: err.message,
          })),
        });
      }
      next(error);
    }
  };
};
