import { useTranslation } from 'react-i18next';
import {
  Avatar,
  Button,
  Card,
  List,
  Stack,
  Typography,
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
          <Typography variant="headline" size="sm" as="h2">
            {t('dashboard.activity.title')}
          </Typography>
          <Button variant="text" icon="refresh" onClick={onRefresh}>
            {t('dashboard.activity.refresh')}
          </Button>
        </Stack>
      }
    >
      <List
        showDividers={true}
        width="100%"
        items={activities.map(a => ({
          id: a.id,
          content: (
            <Stack direction="row" gap="md" align="center" padding="md">
              <Avatar name={a.name} size="md" />
              <Stack direction="column" gap="xs2" align="flex-start">
                <Typography variant="body" size="md">
                  {a.name} {t(a.actionKey)}
                </Typography>
                <Typography
                  variant="label"
                  size="sm"
                  color="on-surface-variant"
                >
                  {t(a.timeKey)}
                </Typography>
              </Stack>
            </Stack>
          ),
        }))}
      />
    </Card>
  );
}
