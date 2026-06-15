import { useEffect, useState } from 'react';
import { fetchEmployees } from '../api/employees';
import type { Employee, EmployeeFilters } from '../types/employee';

type UseEmployeesResult = {
  employees: Employee[];
  filters: EmployeeFilters | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
};

export function useEmployees(): UseEmployeesResult {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [fetchCount, setFetchCount] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const loadEmployees = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchEmployees();
        if (!cancelled) setEmployees(data);
      } catch (err) {
        const error = err instanceof Error ? err : new Error(String(err));
        if (!cancelled) setError(error);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };
    loadEmployees();
    // cancelled = true on unmount prevents setState calls on an unmounted component
    // (guards against the 300ms fetch resolving after navigation away)
    return () => {
      cancelled = true;
    };
  }, [fetchCount]);

  const handleRefetch = () => setFetchCount(c => c + 1);

  return {
    employees,
    filters: null,
    isLoading,
    error,
    refetch: handleRefetch,
  };
}
