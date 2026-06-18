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

  console.log('activeFilters: ', activeFilters);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setActiveFilters(prev => ({ ...prev, search: e.target.value }));
  };

  return { handleFilterClick, activeFilters, handleSearchChange };
}
