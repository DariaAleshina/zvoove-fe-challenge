import { Table } from '@zvoove/unity-ui';
import type { Employee, EmployeeFilters } from '~/mocked/types/employee';
import { NameCell } from './NameCell';
import { StatusCell } from './StatusCell';
import { ActionsCell } from './ActionsCell';
import { EmployeeTableActions } from './EmployeeTableActions';
import { EmployeesTableFilters } from './EmployeesTableFilters';
import { useState } from 'react';

type Props = { employees: Employee[]; filters: EmployeeFilters | null };

export function EmployeesTable({ employees, filters }: Props) {
  const [activeFilters, setActiveFilters] = useState(null);

  let filteredEmployees = { ...employees };

  // TODO: replace with filtered dada
  const tableTitle = `Alle Mitarbeitenden (${employees.length})`;

  const columns = [
    { id: 'nachname', label: 'Name', orderable: true },
    { id: 'vorname', label: 'Vorname' },
    { id: 'beruf', label: 'Beruf' },
    { id: 'telefon', label: 'Telefonnummer' },
    { id: 'plz', label: 'Postleitzahl' },
    { id: 'eintritt', label: 'Eintrittsdatum' },
    { id: 'ueberlassen', label: 'Überlassen bis' },
    { id: 'status', label: 'Status' },
    { id: 'aktionen', label: 'Aktionen', align: 'right' as const },
  ];

  // TODO: replace with filtered data
  const data = employees.map(emp => ({
    id: emp.id,
    nachname: <NameCell nachname={emp.nachname} image={emp.image ?? null} />,
    vorname: emp.vorname,
    beruf: emp.beruf,
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
      filters={filters && <EmployeesTableFilters filters={filters} />}
      columns={columns}
      data={data}
    />
  );
}
