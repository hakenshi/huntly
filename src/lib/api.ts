const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

async function apiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new ApiError(response.status, `API Error: ${response.statusText}`);
  }

  return response.json();
}

export const api = {
  // Leads
  getLeads: (params?: { skip?: number; limit?: number; industry?: string; status?: string }) => {
    const searchParams = new URLSearchParams();
    if (params?.skip) searchParams.set('skip', params.skip.toString());
    if (params?.limit) searchParams.set('limit', params.limit.toString());
    if (params?.industry) searchParams.set('industry', params.industry);
    if (params?.status) searchParams.set('status', params.status);
    
    return apiRequest(`/leads?${searchParams}`);
  },

  createLead: (data: any) => 
    apiRequest('/leads', { method: 'POST', body: JSON.stringify(data) }),

  searchLeads: (filters: any) => 
    apiRequest('/leads/search', { method: 'POST', body: JSON.stringify(filters) }),

  // Campaigns
  getCampaigns: () => apiRequest('/campaigns'),
  
  createCampaign: (data: any) => 
    apiRequest('/campaigns', { method: 'POST', body: JSON.stringify(data) }),

  updateCampaignStatus: (id: number, status: string) => 
    apiRequest(`/campaigns/${id}/status`, { method: 'PUT', body: JSON.stringify({ status }) }),

  // Analytics
  getDashboardMetrics: () => apiRequest('/analytics/dashboard'),
  getLeadsByMonth: () => apiRequest('/analytics/leads-by-month'),
  getLeadSources: () => apiRequest('/analytics/sources'),
  getIndustryBreakdown: () => apiRequest('/analytics/industries'),
  getPerformanceMetrics: () => apiRequest('/analytics/performance'),
  getQualityScores: () => apiRequest('/analytics/quality-scores'),
};
