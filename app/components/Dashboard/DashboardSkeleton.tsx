import { Grid, Skeleton, Stack } from '@zvoove/unity-ui';

export function DashboardSkeleton() {
  return (
    <Stack gap="md">
      <Skeleton width="40%" height={50} />
      <Skeleton height={60} />
      <Grid columns={{ minimum: 1, tablet: 2, desktop: 4 }} gap="md">
        <Skeleton height={100} />
        <Skeleton height={100} />
        <Skeleton height={100} />
        <Skeleton height={100} />
      </Grid>
    </Stack>
  );
}
