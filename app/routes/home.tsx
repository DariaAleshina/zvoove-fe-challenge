import { useTranslation } from 'react-i18next';
import { useDashboard } from '../mocked/hooks/useDashboard';
import {
  DashboardSkeleton,
  KpiBlock,
  OnboardingProgressBlock,
  PageTitle,
  RecentActivityBlock,
  UpcomingEventsBlock,
} from '../components';
import { Stack, Grid, Button, InfoBox } from '@zvoove/unity-ui';

export default function Home() {
  const { t } = useTranslation();
  const { dashboard, isLoading, error, refetch } = useDashboard();

  if (isLoading) return <DashboardSkeleton />;
  if (error) return <InfoBox message={error.message} />;
  if (!dashboard) return <InfoBox message="No data available" />;

  const { announcement, kpis, activities, upcomingEvents, onboardingProgress } =
    dashboard;

  return (
    <Stack gap="lg" padding="lg">
      <Stack
        direction={{ minimum: 'column', tablet: 'row' }}
        gap="md"
        align={{ minimum: 'flex-start', tablet: 'center' }}
        justify="space-between"
      >
        <PageTitle
          pageTitle="dashboard.pageTitle"
          pageDescription="dashboard.pageDescription"
        />

        <Stack direction="row" wrap="wrap" gap="sm">
          <Button size="md" icon="add" as="a" href="/users" variant="outlined">
            {t('dashboard.actionButtons.action1')}
          </Button>
          <Button size="md" icon="users" as="a" href="/users">
            {t('dashboard.actionButtons.action2')}
          </Button>
        </Stack>
      </Stack>

      <InfoBox
        message={Object.keys(announcement)
          .map((key) => t(`dashboard.announcement.${key}`, { count: announcement[key] }))
          .join(' ')}
        variant="subtle"
        icon="info"
        elevated={false}
      />

      <KpiBlock kpis={kpis} />

      <Grid columns={{ minimum: 1, desktop: 3 }} gap="md">
        <Grid.Item colSpan={{ minimum: 1, desktop: 2 }}>
          <RecentActivityBlock activities={activities} onRefresh={refetch} />
        </Grid.Item>
        <Grid.Item colSpan={1}>
          <Stack gap="lg">
            <UpcomingEventsBlock events={upcomingEvents} />
            <OnboardingProgressBlock steps={onboardingProgress} />
          </Stack>
        </Grid.Item>
      </Grid>
    </Stack>
  );
}
