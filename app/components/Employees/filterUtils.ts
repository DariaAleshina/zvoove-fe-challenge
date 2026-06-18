import type { Employee, EmployeeFilterOption } from '~/mocked/types/employee';

export function uniqueOptions(
  employees: Employee[],
  field: keyof Pick<Employee, 'beruf' | 'plz' | 'status'>,
): EmployeeFilterOption[] {
  return [...new Set(employees.map(e => e[field]))].map(v => ({ value: v, label: v }));
}

export function uniqueYearOptions(
  employees: Employee[],
  field: keyof Pick<Employee, 'eintritt' | 'ueberlassen'>,
): EmployeeFilterOption[] {
  return [...new Set(employees.map(e => e[field].split('.')[2]))].map(y => ({ value: y, label: y }));
}
