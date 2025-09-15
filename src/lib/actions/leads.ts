'use server'

import { api } from '@/src/lib/api';
import { revalidatePath } from 'next/cache';
import { leadCreateSchema, searchFiltersSchema } from '@/src/lib/schemas';
import { z } from 'zod';

export async function getLeads(params?: { 
  skip?: number; 
  limit?: number; 
  industry?: string; 
  status?: string; 
}) {
  try {
    return await api.getLeads(params);
  } catch (error) {
    console.error('Error fetching leads:', error);
    return [];
  }
}

export async function createLead(formData: FormData) {
  try {
    const rawData = {
      company: formData.get('company') as string,
      contact: formData.get('contact') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string || undefined,
      industry: formData.get('industry') as string,
      location: formData.get('location') as string,
    };

    // Validação com Zod
    const validatedData = leadCreateSchema.parse(rawData);

    const result = await api.createLead(validatedData);
    revalidatePath('/dashboard/meus-leads');
    return { success: true, data: result };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        error: 'Dados inválidos',
        fieldErrors: error.flatten().fieldErrors
      };
    }
    console.error('Error creating lead:', error);
    return { success: false, error: 'Erro ao criar lead' };
  }
}

export async function searchLeads(formData: FormData) {
  try {
    const rawFilters = {
      industry: formData.get('industry') as string,
      location: formData.get('location') as string || undefined,
      company_size: formData.get('company_size') as string || undefined,
      revenue_range: formData.get('revenue_range') as string || undefined,
    };

    // Validação com Zod
    const validatedFilters = searchFiltersSchema.parse(rawFilters);

    const results = await api.searchLeads(validatedFilters);
    revalidatePath('/dashboard/buscar-leads');
    return { success: true, data: results };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        error: 'Filtros inválidos',
        fieldErrors: error.flatten().fieldErrors
      };
    }
    console.error('Error searching leads:', error);
    return { success: false, error: 'Erro na busca de leads' };
  }
}
