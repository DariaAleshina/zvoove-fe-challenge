import { useTranslation } from 'react-i18next';
import {
  Avatar,
  Button,
  Card,
  List,
  Stack,
  Typography,
  Icon,
} from '@zvoove/unity-ui';
import type { DashboardActivity } from '../../mocked/types/dashboard';

interface RecentActivityBlockProps {
  activities: DashboardActivity[];
  onRefresh: () => void;
}

export function RecentActivityBlock({
  activities,
  onRefresh,
}: RecentActivityBlockProps) {
  const { t } = useTranslation();

  return (
    <Card
      variant="outlined"
      padding="none"
      header={
        <Stack
          direction="row"
          align="center"
          justify="space-between"
          padding="md"
        >
          <Stack direction="row" align="center" gap="sm">
            <Icon name="remark" size="md" />
            <Typography variant="title" size="lg" as="h2">
              {t('dashboard.activity.title')}
            </Typography>
          </Stack>
          <Button variant="text" onClick={onRefresh}>
            <Icon name="refresh" size="md" />
            {t('dashboard.activity.refresh')}
          </Button>
        </Stack>
      }
    >
      <List
        showDividers={true}
        width="100%"
        items={activities.map(activity => ({
          id: activity.id,
          content: (
            <Stack direction="row" gap="md" align="center">
              <Avatar type="initials" name={activity.name} size="sm" />
              <Stack direction="column" align="flex-start" gap="none">
                <Typography variant="body" size="md">
                  {activity.name} {t(activity.actionKey)}
                </Typography>
                <Typography
                  variant="label"
                  size="sm"
                  color="on-surface-variant"
                >
                  {t(`dashboard.time.${activity.time.key}`, { count: activity.time.count })}
                </Typography>
              </Stack>
            </Stack>
          ),
        }))}
      />
    </Card>
  );
}
