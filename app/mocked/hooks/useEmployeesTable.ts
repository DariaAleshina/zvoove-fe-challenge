import { useState, useMemo } from 'react';
import type { Employee } from '~/mocked/types/employee';

interface ActiveFilters {
  search: string;
  beruf: string;
  postleitzahl: string;
  status: string;
  eintrittsdatum: string;
  ueberlassenBis: string;
}

const INITIAL_FILTERS: ActiveFilters = {
  search: '',
  beruf: '',
  postleitzahl: '',
  status: '',
  eintrittsdatum: '',
  ueberlassenBis: '',
};

export function useEmployeeFilters(employees: Employee[]) {
  const [filters, setFilters] = useState<ActiveFilters>(INITIAL_FILTERS);
}
