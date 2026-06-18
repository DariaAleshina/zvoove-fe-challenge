import { useEffect, useMemo, useState } from 'react';
import { fetchEmployees } from '../api/employees';
import type { Employee, EmployeeFilters } from '../types/employee';
import { uniqueOptions, uniqueYearOptions } from '~/components/Employees/filterUtils';

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

  const filters = useMemo<EmployeeFilters>(() => ({
    beruf: uniqueOptions(employees, 'beruf'),
    plz: uniqueOptions(employees, 'plz'),
    eintritt: uniqueYearOptions(employees, 'eintritt'),
    ueberlassen: uniqueYearOptions(employees, 'ueberlassen'),
    status: uniqueOptions(employees, 'status'),
  }), [employees]);

  const handleRefetch = () => setFetchCount(c => c + 1);

  return {
    employees,
    filters,
    isLoading,
    error,
    refetch: handleRefetch,
  };
}
