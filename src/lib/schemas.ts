import { z } from "zod";

// Lead Schemas
export const leadCreateSchema = z.object({
  company: z.string().min(2, "Nome da empresa deve ter pelo menos 2 caracteres"),
  contact: z.string().min(2, "Nome do contato deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().optional(),
  industry: z.string().min(2, "Setor deve ter pelo menos 2 caracteres"),
  location: z.string().min(2, "Localização deve ter pelo menos 2 caracteres"),
});

export const searchFiltersSchema = z.object({
  industry: z.string().min(1, "Setor é obrigatório"),
  location: z.string().optional(),
  company_size: z.string().optional(),
  revenue_range: z.string().optional(),
});

// Campaign Schemas
export const campaignCreateSchema = z.object({
  name: z.string().min(3, "Nome da campanha deve ter pelo menos 3 caracteres"),
  industry: z.string().optional(),
  location: z.string().optional(),
  company_size: z.string().optional(),
  revenue_range: z.string().optional(),
});

// Types
export type LeadCreateInput = z.infer<typeof leadCreateSchema>;
export type SearchFiltersInput = z.infer<typeof searchFiltersSchema>;
export type CampaignCreateInput = z.infer<typeof campaignCreateSchema>;
