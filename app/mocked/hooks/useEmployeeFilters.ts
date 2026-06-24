import { useState, useMemo } from 'react';
import type { ChangeEvent } from 'react';
import type { Employee } from '~/mocked/types/employee';

interface ActiveFilters {
  search: string;
  beruf: string;
  plz: string;
  status: string;
  eintritt: string;
  ueberlassen: string;
}

interface UseEmployeeFiltersReturn {
  handleFilterClick: (filterKey: keyof ActiveFilters, value: string) => void;
  activeFilters: ActiveFilters;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  filteredEmployees: Employee[];
}

const INITIAL_FILTERS: ActiveFilters = {
  search: '',
  beruf: '',
  plz: '',
  status: '',
  eintritt: '',
  ueberlassen: '',
};

export function useEmployeeFilters(
  employees: Employee[],
): UseEmployeeFiltersReturn {
  const [activeFilters, setActiveFilters] =
    useState<ActiveFilters>(INITIAL_FILTERS);

  const handleFilterClick = (filterKey: keyof ActiveFilters, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterKey]: prev[filterKey] === value ? '' : value,
    }));
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setActiveFilters(prev => ({ ...prev, search: e.target.value }));
  };

  const filteredEmployees = useMemo(() => {
    return employees.filter(emp => {
      if (activeFilters.search) {
        const q = activeFilters.search.toLowerCase();
        if (
          !emp.nachname.toLowerCase().includes(q) &&
          !emp.vorname.toLowerCase().includes(q)
        )
          return false;
      }
      if (activeFilters.beruf && emp.beruf !== activeFilters.beruf)
        return false;
      if (activeFilters.plz && emp.plz !== activeFilters.plz) return false;
      if (activeFilters.status && emp.status !== activeFilters.status)
        return false;
      if (
        activeFilters.eintritt &&
        emp.eintritt.split('.')[2] !== activeFilters.eintritt
      )
        return false;
      if (
        activeFilters.ueberlassen &&
        Number(emp.ueberlassen.split('.')[2]) >
          Number(activeFilters.ueberlassen)
      )
        return false;
      return true;
    });
  }, [employees, activeFilters]);

  return {
    handleFilterClick,
    activeFilters,
    handleSearchChange,
    filteredEmployees,
  };
}
