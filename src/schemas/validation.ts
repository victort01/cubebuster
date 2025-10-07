import { z } from 'zod';

export const FuncionarioSchema = z.object({
  nome: z.string().min(2, "O nome deve ter ao menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  senha: z.string().min(6, "A senha deve ter ao menos 6 caracteres"),
  cargo: z.string().min(2, "O cargo deve ser informado"),
  telefone: z.string().optional(),
});

export const FuncionarioUpdateSchema = FuncionarioSchema.partial();

export const EnderecoSchema = z.object({
  rua: z.string(),
  numero: z.string(),
  bairro: z.string(),
  cidade: z.string(),
  estado: z.string(),
  cep: z.string().regex(/^\d{5}-?\d{3}$/, "CEP inválido"),
});

export const EnderecoUpdateSchema = EnderecoSchema.partial();

export const ClienteSchema = z.object({
  nome: z.string().min(2),
  email: z.string().email(),
  cpf: z.string().regex(/^\d{11}$/, "CPF inválido"),
  telefone: z.string().optional(),
  dataNascimento: z.string().transform((val) => new Date(val)),
  enderecoId: z.number().optional(),
});

export const ClienteUpdateSchema = ClienteSchema.partial();

export const GeneroSchema = z.object({
  nome: z.string().min(2),
});

export const GeneroUpdateSchema = GeneroSchema.partial();

export const FilmeSchema = z.object({
  titulo: z.string(),
  anoLancamento: z.number().int().min(1888, "Ano inválido"),
  classificacao: z.string().optional(),
  quantidade: z.number().int().min(1),
  generoId: z.number(),
});

export const FilmeUpdateSchema = FilmeSchema.partial();

export const AluguelSchema = z.object({
  dataAluguel: z.string().transform((val) => new Date(val)).optional(),
  dataDevolucao: z.string().transform((val) => new Date(val)).optional(),
  valor: z.number().positive(),
  status: z.string().optional(),
  clienteId: z.number(),
  filmeId: z.number(),
  funcionarioId: z.number(),
});

export const AluguelUpdateSchema = AluguelSchema.partial();