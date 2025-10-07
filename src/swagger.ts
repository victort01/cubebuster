import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";


const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Cubebuster",
      version: "1.0.0",
      description:
        "Documentação da API Cubebuster, construída com Express, TypeScript, Prisma e Zod. Esta API gerencia clientes, filmes, funcionários e aluguéis.",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor local de desenvolvimento",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);


export function setupSwagger(app: Express): void {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    explorer: true, 
  }));
}
