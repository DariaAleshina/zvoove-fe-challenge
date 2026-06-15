import { useEmployees } from '../mocked/hooks/useEmployees';

export default function Users() {
  const { employees, isLoading, error, refetch } = useEmployees();

  console.log('isLoading: ', isLoading);
  console.log('Employees data: ', employees);
  return null;
}
