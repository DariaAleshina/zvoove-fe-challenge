import { Table } from '@zvoove/unity-ui';
import { useTranslation } from 'react-i18next';
import type { Employee, EmployeeFilters } from '~/mocked/types/employee';
import { NameCell } from './NameCell';
import { StatusCell } from './StatusCell';
import { ActionsCell } from './ActionsCell';
import { EmployeeTableActions } from './EmployeeTableActions';
import { EmployeesTableFilters } from './EmployeesTableFilters';
import { useEmployeeFilters } from '~/mocked/hooks/useEmployeeFilters';

type Props = { employees: Employee[]; filters: EmployeeFilters };

export function EmployeesTable({ employees, filters }: Props) {
  const { t } = useTranslation();
  const { handleFilterClick, activeFilters, handleSearchChange, filteredEmployees } = useEmployeeFilters(employees);

  const tableTitle = t('employees.table.title', { count: filteredEmployees.length });

  const columns = [
    { id: 'nachname', label: t('employees.table.columns.nachname'), orderable: true },
    { id: 'vorname', label: t('employees.table.columns.vorname') },
    { id: 'beruf', label: t('employees.table.columns.beruf') },
    { id: 'telefon', label: t('employees.table.columns.telefon') },
    { id: 'plz', label: t('employees.table.columns.plz') },
    { id: 'eintritt', label: t('employees.table.columns.eintritt') },
    { id: 'ueberlassen', label: t('employees.table.columns.ueberlassen') },
    { id: 'status', label: t('employees.table.columns.status') },
    { id: 'aktionen', label: t('employees.table.columns.actions'), align: 'right' as const },
  ];

  const data = filteredEmployees.map(emp => ({
    id: emp.id,
    nachname: <NameCell nachname={emp.nachname} image={emp.image ?? null} />,
    vorname: emp.vorname,
    beruf: t(emp.beruf),
    telefon: emp.telefon,
    plz: emp.plz,
    eintritt: emp.eintritt,
    ueberlassen: emp.ueberlassen,
    status: <StatusCell status={emp.status} />,
    aktionen: <ActionsCell />,
  }));

  return (
    <Table
      title={tableTitle}
      actions={<EmployeeTableActions />}
      filters={
        <EmployeesTableFilters
          filters={filters}
          activeFilters={activeFilters}
          handleFilterClick={handleFilterClick}
          search={activeFilters.search}
          onSearchChange={handleSearchChange}
        />
      }
      columns={columns}
      data={data}
    />
  );
}
