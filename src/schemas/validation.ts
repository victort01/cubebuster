import { z } from "zod";

/* ============================ FUNCIONÁRIOS ============================ */
export const FuncionarioSchema = z.object({
  nome: z.string().min(2, "O nome deve ter ao menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  senha: z.string().min(6, "A senha deve ter ao menos 6 caracteres"),
  cargo: z.string().min(2, "O cargo deve ser informado"),
  telefone: z.string().optional(),
});

export const FuncionarioUpdateSchema = FuncionarioSchema.partial();

/* ============================ ENDEREÇOS ============================ */
export const EnderecoSchema = z.object({
  rua: z.string(),
  numero: z.string(),
  bairro: z.string(),
  cidade: z.string(),
  estado: z.string(),
  cep: z.string().regex(/^\d{5}-?\d{3}$/, "CEP inválido"),
});

export const EnderecoUpdateSchema = EnderecoSchema.partial();

/* ============================ CLIENTES ============================ */
export const ClienteSchema = z.object({
  nome: z.string().min(2, "O nome deve ter ao menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  cpf: z.string().regex(/^\d{11}$/, "CPF deve conter 11 dígitos numéricos"),
  telefone: z.string().optional(),
  dataNascimento: z
    .union([z.string(), z.date()])
    .transform((val) => (typeof val === "string" ? new Date(val) : val)),
  enderecoId: z.number().optional(),
});

export const ClienteUpdateSchema = ClienteSchema.partial();

/* ============================ GÊNEROS ============================ */
export const GeneroSchema = z.object({
  nome: z.string().min(2, "O nome do gênero deve ter ao menos 2 caracteres"),
});

export const GeneroUpdateSchema = GeneroSchema.partial();

/* ============================ FILMES ============================ */
export const FilmeSchema = z.object({
  titulo: z.string().min(1, "O título é obrigatório"),
  anoLancamento: z
    .number()
    .int()
    .min(1888, "Ano inválido (deve ser posterior a 1888)"),
  classificacao: z.string().optional(),
  quantidade: z
    .number()
    .int()
    .min(1, "A quantidade deve ser pelo menos 1"),
  generoId: z.number().int().positive("O ID do gênero deve ser positivo"),
});

export const FilmeUpdateSchema = FilmeSchema.partial();

/* ============================ ALUGUÉIS ============================ */
export const AluguelSchema = z.object({
  dataAluguel: z
    .union([z.string(), z.date()])
    .optional()
    .transform((val) =>
      val ? (typeof val === "string" ? new Date(val) : val) : undefined
    ),
  dataDevolucao: z
    .union([z.string(), z.date()])
    .optional()
    .transform((val) =>
      val ? (typeof val === "string" ? new Date(val) : val) : undefined
    ),
  valor: z.number().positive("O valor deve ser positivo"),
  status: z.string().optional(),
  clienteId: z.number().int().positive("O clienteId deve ser positivo"),
  filmeId: z.number().int().positive("O filmeId deve ser positivo"),
  funcionarioId: z.number().int().positive("O funcionarioId deve ser positivo"),
});

export const AluguelUpdateSchema = AluguelSchema.partial();
