import { useTranslation } from 'react-i18next';
import {
  Card,
  Icon,
  ProgressIndicator,
  Stack,
  Typography,
} from '@zvoove/unity-ui';
import type { DashboardOnboardingStep } from '../../mocked/types/dashboard';

interface OnboardingProgressBlockProps {
  steps: DashboardOnboardingStep[];
}

export function OnboardingProgressBlock({
  steps,
}: OnboardingProgressBlockProps) {
  const { t } = useTranslation();

  return (
    <Card variant="outlined" padding="md">
      <Stack direction="column" gap="md">
        {/* Title */}
        <Stack direction="row" align="center" gap="sm">
          <Icon name="clock-countdown" size="md" color="primary" />
          <Typography variant="title" size="md" as="h3">
            {t('dashboard.onboarding.title')}
          </Typography>
        </Stack>

        {/* Progress Bars */}
        <Stack direction="column" gap="md" width="100%">
          {steps.map(step => (
            <Stack key={step.labelKey} direction="column" gap="xs" width="100%">
              {/* Labels */}
              <Stack direction="row" justify="space-between" align="center">
                <Typography variant="label" size="md">
                  {t(step.labelKey)}
                </Typography>
                <Typography
                  variant="label"
                  size="sm"
                  color="on-surface-variant"
                >
                  {step.value}%
                </Typography>
              </Stack>

              {/* Progress bar */}
              <ProgressIndicator value={step.value} />
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Card>
  );
}
