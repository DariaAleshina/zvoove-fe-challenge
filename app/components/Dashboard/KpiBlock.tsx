import { useTranslation } from 'react-i18next';
import { Card, Grid, Icon, Stack, Typography } from '@zvoove/unity-ui';
import type { DashboardKpi } from '../../mocked/types/dashboard';

interface KpiBlockProps {
  kpis: DashboardKpi[];
}

export function KpiBlock({ kpis }: KpiBlockProps) {
  const { t } = useTranslation();

  return (
    <Grid columns={{ minimum: 1, tablet: 2, desktop: 4 }} gap="md">
      {kpis.map(kpi => (
        <Card key={kpi.id} variant="outlined">
          <Stack gap="sm">
            <Stack direction="row" align="center" justify="space-between">
              <Typography variant="label" size="sm" color="on-surface-variant">
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
  );
}
