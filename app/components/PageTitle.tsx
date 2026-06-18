import { useTranslation } from 'react-i18next';
import { Stack, Typography } from '@zvoove/unity-ui';

interface PageTitleProps {
  pageTitle: string;
  pageDescription: string;
}

export function PageTitle({ pageTitle, pageDescription }: PageTitleProps) {
  const { t } = useTranslation();
  return (
    <Stack gap="xs">
      <Typography variant="display" size="sm" as="h1">
        {t(pageTitle)}
      </Typography>
      <Typography>{t(pageDescription)}</Typography>
    </Stack>
  );
}
