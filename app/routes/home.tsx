import { useTranslation } from 'react-i18next';
import { useDashboard } from '../mocked/hooks/useDashboard';
import {
  Stack,
  Grid,
  Typography,
  Button,
  Skeleton,
  ContentBlock,
  InfoBox,
  Card,
} from '@zvoove/unity-ui';

export default function Home() {
  const { t } = useTranslation();
  const { dashboard, isLoading, error, refetch } = useDashboard();

  // Skeleton for loading state
  if (isLoading) return <DashboardSkeleton />;

  // Error message if error or no dashboard data
  if (!dashboard || error)
    return <InfoBox message="Something went wrong. Try again later" />;

  const {
    kpis,
    announcementKey,
    activities,
    upcomingEvents,
    onboardingProgress,
  } = dashboard;

  // Dashboard content
  console.log('isLoading: ', isLoading);
  console.log('Dashboard data: ', dashboard);

  return (
    <Stack gap="lg" padding="lg">
      {/* Page header with title, description, and action buttons (link to `/employees`) */}
      <Stack
        direction={{ minimum: 'column', tablet: 'row' }}
        gap="md"
        align="center"
        justify="space-between"
      >
        <Stack gap="sm">
          <Typography variant="display" size="sm" as="h1">
            {t('dashboard.pageTitle')}
          </Typography>
          <Typography>{t('dashboard.pageDescription')}</Typography>
        </Stack>
        <Stack direction="row" gap="sm" width="max-content" align="flex-start">
          <Button size="md" icon="add" as="a" href="/users" variant="outlined">
            {t('dashboard.actionButtons.action1')}
          </Button>
          <Button size="md" icon="users" as="a" href="/users">
            {t('dashboard.actionButtons.action2')}
          </Button>
        </Stack>
      </Stack>

      {/* Info banner (announcement) */}
      <InfoBox message={t(announcementKey)} variant="subtle" icon="info" />

      {/* A responsive grid of KPI cards (4 columns on desktop, 2 on tablet, 1 on mobile) showing: */}
      <Grid columns={{ minimum: 1, tablet: 2, desktop: 4 }} gap="md">
        {kpis.map(kpi => (
          <Card variant="outlined">Content here</Card>
        ))}
      </Grid>
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
