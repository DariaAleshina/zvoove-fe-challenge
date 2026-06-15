import { useDashboard } from '../mocked/hooks/useDashboard';

export default function Home() {
  const { dashboard, isLoading, error, refetch } = useDashboard();

  console.log('isLoading: ', isLoading);
  console.log('Dashboard data: ', dashboard);
  return null;
}
