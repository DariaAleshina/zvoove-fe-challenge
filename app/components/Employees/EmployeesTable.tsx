import { Table } from '@zvoove/unity-ui';
import type { Employee, EmployeeFilters } from '~/mocked/types/employee';
import { NameCell } from './NameCell';
import { StatusCell } from './StatusCell';
import { ActionsCell } from './ActionsCell';
import { EmployeeTableActions } from './EmployeeTableActions';
import { EmployeesTableFilters } from './EmployeesTableFilters';
import { uniqueOptions, uniqueYearOptions } from './filterUtils';
import { useState } from 'react';

type Props = { employees: Employee[] };

export function EmployeesTable({ employees }: Props) {
  const [filters, setFilters] = useState(null);

  const filteredEmployees = () => {
    return employees;
  };
  const tableTitle = `Alle Mitarbeitenden (${filteredEmployees.length})`;

  // Filter Section data prep (from raw employees data)
  const filterOptions: EmployeeFilters = {
    beruf: uniqueOptions(employees, 'beruf'),
    plz: uniqueOptions(employees, 'plz'),
    eintritt: uniqueYearOptions(employees, 'eintritt'),
    ueberlassen: uniqueYearOptions(employees, 'ueberlassen'),
    status: uniqueOptions(employees, 'status'),
  };

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
      filters={<EmployeesTableFilters filters={filterOptions} />}
      columns={columns}
      data={data}
    />
  );
}
