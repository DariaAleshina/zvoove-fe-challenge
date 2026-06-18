import { Table } from '@zvoove/unity-ui';
import type { Employee } from '~/mocked/types/employee';

type Props = { employees: Employee[] };

export function EmployeesTable({ employees }: Props) {
  const columns = [
    { id: 'nachname',    label: 'Name',           orderable: true },
    { id: 'vorname',     label: 'Vorname' },
    { id: 'beruf',       label: 'Beruf' },
    { id: 'telefon',     label: 'Telefonnummer' },
    { id: 'plz',         label: 'Postleitzahl' },
    { id: 'eintritt',    label: 'Eintrittsdatum' },
    { id: 'ueberlassen', label: 'Überlassen bis' },
    { id: 'status',      label: 'Status' },
    { id: 'aktionen',    label: 'Aktionen', align: 'right' as const },
  ];

  const data = employees.map(emp => ({
    id: emp.id,
    nachname: emp.nachname,
    vorname: emp.vorname,
    beruf: emp.beruf,
    telefon: emp.telefon,
    plz: emp.plz,
    eintritt: emp.eintritt,
    ueberlassen: emp.ueberlassen,
    status: emp.status,
    aktionen: null,
  }));

  return <Table columns={columns} data={data} />;
}
