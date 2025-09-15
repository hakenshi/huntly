'use server'

import { api } from '@/src/lib/api';

export async function getDashboardData() {
  try {
    const [metrics, leadsByMonth, sources, industries, performance, qualityScores] = await Promise.all([
      api.getDashboardMetrics(),
      api.getLeadsByMonth(),
      api.getLeadSources(),
      api.getIndustryBreakdown(),
      api.getPerformanceMetrics(),
      api.getQualityScores(),
    ]);

    return {
      metrics,
      leadsByMonth,
      sources,
      industries,
      performance,
      qualityScores,
    };
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return null;
  }
}

export async function getAnalyticsData() {
  try {
    const [leadsByMonth, sources, industries, qualityScores] = await Promise.all([
      api.getLeadsByMonth(),
      api.getLeadSources(),
      api.getIndustryBreakdown(),
      api.getQualityScores(),
    ]);

    return {
      leadsByMonth,
      sources,
      industries,
      qualityScores,
    };
  } catch (error) {
    console.error('Error fetching analytics data:', error);
    return null;
  }
}
