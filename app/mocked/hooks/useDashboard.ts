import { useState, useEffect } from 'react';
import { fetchDashboard } from '../api/dashboard';

import type { DashboardData } from '../types/dashboard';

type UseDashboardResult = {
  dashboard: DashboardData | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
};

export function useDashboard(): UseDashboardResult {
  const [dashboard, setDashboard] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [fetchCount, setFetchCount] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const loadDashboard = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchDashboard();
        if (!cancelled) setDashboard(data);
      } catch (err) {
        const error = err instanceof Error ? err : new Error(String(err));
        if (!cancelled) setError(error);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };
    loadDashboard();
    // cancelled = true on unmount prevents setState calls on an unmounted component
    // (guards against the 300ms fetch resolving after navigation away)
    return () => {
      cancelled = true;
    };
  }, [fetchCount]);

  const handleRefetch = () => setFetchCount(c => c + 1);

  return {
    dashboard,
    isLoading,
    error,
    refetch: handleRefetch,
  };
}
