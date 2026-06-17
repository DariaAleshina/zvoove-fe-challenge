import { useTranslation } from 'react-i18next';
import { useDashboard } from '../mocked/hooks/useDashboard';
import { DashboardSkeleton, RecentActivityBlock, UpcomingEventsBlock } from '../components';
import {
  Stack,
  Grid,
  Typography,
  Button,
  InfoBox,
  Card,
  Icon,
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
    announcementKey,
    kpis,
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
      <InfoBox
        message={t(announcementKey)}
        variant="subtle"
        icon="info"
        elevated={false}
      />

      {/* A responsive grid of KPI cards (4 columns on desktop, 2 on tablet, 1 on mobile) showing: */}
      {/* Label, value, trend change, and an icon per KPI */}
      <Grid columns={{ minimum: 1, tablet: 2, desktop: 4 }} gap="md">
        {kpis.map(kpi => (
          <Card variant="outlined">
            <Stack gap="sm">
              <Stack direction="row" align="center" justify="space-between">
                <Typography
                  variant="label"
                  size="sm"
                  color="on-surface-variant"
                >
                  {t(kpi.labelKey)}
                </Typography>
                <Icon name={kpi.icon} color="primary" size="md" />
              </Stack>
              <Stack direction="row" gap="sm">
                <Typography variant="display" size="sm">
                  {kpi.value}
                </Typography>

                <Typography as="span" color={kpi.changeColor} size="sm">
                  {kpi.change}
                </Typography>
              </Stack>
            </Stack>
          </Card>
        ))}
      </Grid>

      {/* - An activity feed section using the `List` component, showing recent employee actions with avatars */}
      <Grid columns={{ minimum: 1, tablet: 2, desktop: 3 }} gap="md">
        <Grid.Item colSpan={2}>
          <RecentActivityBlock activities={activities} onRefresh={refetch} />
        </Grid.Item>
        <Grid.Item colSpan={1}>
          <Stack gap="lg">
            {/* - An upcoming events section using the `List` component, showing dates and category tags */}
            <UpcomingEventsBlock events={upcomingEvents} />

            {/* - An onboarding progress section with progress bars */}
          </Stack>
        </Grid.Item>
      </Grid>
    </Stack>
  );
}

