import { useEmployees } from '../mocked/hooks/useEmployees';
import { EmployeesSkeleton } from '~/components/Employees';

import {
  Stack,
  Table,
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

  if (isLoading) return <EmployeesSkeleton />;
  if (error) return <InfoBox message={error.message} />;
  if (!employees) return <InfoBox message="No data available" />;

  console.log('isLoading: ', isLoading);
  console.log('Employees data: ', employees);
  return null;
}
