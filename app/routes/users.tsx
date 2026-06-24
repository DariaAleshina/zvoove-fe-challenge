import { useTranslation } from 'react-i18next';
import { useEmployees } from '../mocked/hooks/useEmployees';
import { EmployeesSkeleton, EmployeesTable } from '~/components/Employees';
import { PageTitle } from '~/components';

import { Stack, InfoBox } from '@zvoove/unity-ui';

export default function Users() {
  const { employees, filters, isLoading, error } = useEmployees();
  const { t } = useTranslation();

  if (isLoading) return <EmployeesSkeleton />;
  if (error) return <InfoBox message={error.message} />;
  if (!employees) return <InfoBox message="No data available" />;

  return (
    <Stack gap="lg" padding="lg">
      <PageTitle
        pageTitle="employees.pageTitle"
        pageDescription="employees.pageDescription"
      />
      <EmployeesTable employees={employees} filters={filters} />
    </Stack>
  );
}
