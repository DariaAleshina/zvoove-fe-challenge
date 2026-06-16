import { useTranslation } from 'react-i18next';
import { useDashboard } from '../mocked/hooks/useDashboard';
import {
  Stack,
  Grid,
  Typography,
  Button,
  Skeleton,
  ContentBlock,
} from '@zvoove/unity-ui';

export default function Home() {
  const { t } = useTranslation(undefined, { keyPrefix: 'dashboard' });

  const { dashboard, isLoading, error, refetch } = useDashboard();

  // Skeleton for loading state
  if (isLoading) return <DashboardSkeleton />;

  // Dashboard content
  console.log('isLoading: ', isLoading);
  console.log('Dashboard data: ', dashboard);
  return (
    <Stack gap="md" padding="lg">
      {/* Page header with title, description, and action buttons (link to `/employees`) */}
      <Stack direction="row" gap="md" align="center" justify="space-between">
        <Stack>
          <Typography as="h1">{t('pageTitle')}</Typography>
          <Typography>{t('pageDescription')}</Typography>
        </Stack>
        <Stack direction="row" gap="md">
          <Button as="a" href="/users">
            button link 1
          </Button>
          <Button as="a" href="/users">
            button link 2
          </Button>
        </Stack>
      </Stack>

      {/* Info banner (announcement) */}

      {/* A responsive grid of KPI cards (4 columns on desktop, 2 on tablet, 1 on mobile) showing: */}
      {/* Label, value, trend change, and an icon per KPI */}
      {/* - An activity feed section using the `List` component, showing recent employee actions with avatars */}
      {/* - An upcoming events section using the `List` component, showing dates and category tags */}
      {/* - An onboarding progress section with progress bars */}
    </Stack>
  );
}

function DashboardSkeleton() {
  return (
    <Stack gap="md" padding="lg">
      <Skeleton width="40%" height={50} />
      <Skeleton height={60} />
      <Grid columns={4} gap="md">
        <Skeleton height={100} />
        <Skeleton height={100} />
        <Skeleton height={100} />
        <Skeleton height={100} />
      </Grid>
    </Stack>
  );
}
