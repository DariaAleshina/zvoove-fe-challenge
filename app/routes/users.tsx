import { useTranslation } from 'react-i18next';
import { useEmployees } from '../mocked/hooks/useEmployees';
import { EmployeesSkeleton, EmployeesTable } from '~/components/Employees';
import { PageTitle } from '~/components';

import {
  Stack,
  Typography,
  Avatar,
  Tag,
  Button,
  PopUpMenu,
  Chip,
  TextField,
  InfoBox,
} from '@zvoove/unity-ui';

export default function Users() {
  const { employees, isLoading, error, refetch } = useEmployees();
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
      <EmployeesTable employees={employees} />
    </Stack>
  );
}
