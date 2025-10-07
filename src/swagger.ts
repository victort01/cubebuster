import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import path from "path";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Cubebuster API",
      version: "1.0.0",
      description: "API de gerenciamento de filmes, gêneros, clientes, funcionários e alugueis.",
    },
  },
  apis: [
    path.join(__dirname, "routes/*.ts"),
    path.join(__dirname, "schemas/swaggerSchemas.ts") 
  ],
};

const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};