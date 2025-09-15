'use server'

import { api } from '@/src/lib/api';
import { revalidatePath } from 'next/cache';
import { campaignCreateSchema } from '@/src/lib/schemas';
import { z } from 'zod';

export async function getCampaigns() {
  try {
    return await api.getCampaigns();
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    return [];
  }
}

export async function createCampaign(formData: FormData) {
  try {
    const rawData = {
      name: formData.get('name') as string,
      industry: formData.get('industry') as string || undefined,
      location: formData.get('location') as string || undefined,
      company_size: formData.get('company_size') as string || undefined,
      revenue_range: formData.get('revenue_range') as string || undefined,
    };

    // Validação com Zod
    const validatedData = campaignCreateSchema.parse(rawData);

    const result = await api.createCampaign(validatedData);
    revalidatePath('/dashboard/campanhas');
    return { success: true, data: result };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        error: 'Dados inválidos',
        fieldErrors: error.flatten().fieldErrors
      };
    }
    console.error('Error creating campaign:', error);
    return { success: false, error: 'Erro ao criar campanha' };
  }
}

export async function updateCampaignStatus(campaignId: number, status: string) {
  try {
    await api.updateCampaignStatus(campaignId, status);
    revalidatePath('/dashboard/campanhas');
    return { success: true };
  } catch (error) {
    console.error('Error updating campaign status:', error);
    return { success: false, error: 'Erro ao atualizar campanha' };
  }
}
