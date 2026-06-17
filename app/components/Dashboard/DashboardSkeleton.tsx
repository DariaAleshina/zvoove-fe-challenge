import { Grid, Skeleton, Stack } from '@zvoove/unity-ui';

export function DashboardSkeleton() {
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
