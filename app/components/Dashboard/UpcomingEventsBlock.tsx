import { useTranslation } from 'react-i18next';
import { Card, Icon, List, Stack, Tag, Typography } from '@zvoove/unity-ui';
import type { DashboardUpcomingEvent } from '../../mocked/types/dashboard';

interface UpcomingEventsBlockProps {
  events: DashboardUpcomingEvent[];
}

export function UpcomingEventsBlock({ events }: UpcomingEventsBlockProps) {
  const { t } = useTranslation();

  return (
    <Card
      variant="outlined"
      padding="none"
      header={
        <Stack direction="row" align="center" gap="sm" padding="md">
          <Icon name="calendar" size="md" />
          <Typography variant="title" size="lg" as="h2">
            {t('dashboard.upcoming.title')}
          </Typography>
        </Stack>
      }
    >
      <List
        showDividers={true}
        width="100%"
        items={events.map(event => ({
          id: event.id,
          content: (
            <Stack direction="row" align="center" justify="space-between">
              <Stack direction="column" align="flex-start" gap="none">
                <Typography variant="body" size="md">
                  {t(event.titleKey)}
                </Typography>
                <Stack direction="row" align="center" gap="xs">
                  <Icon name="calendar" size="xs" color="on-surface-variant" />
                  <Typography
                    variant="label"
                    size="sm"
                    color="on-surface-variant"
                  >
                    {event.date}
                  </Typography>
                </Stack>
              </Stack>
              <Tag
                label={t(event.tagLabelKey)}
                color={event.tagColor}
                variant="solid"
                tone="light"
                size="sm"
              />
            </Stack>
          ),
        }))}
      />
    </Card>
  );
}
