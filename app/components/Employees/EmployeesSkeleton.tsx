import { Grid, Skeleton, Stack } from '@zvoove/unity-ui';

export function EmployeesSkeleton() {
  return (
    <Stack gap="md" padding="lg">
      <Skeleton width="40%" height={50} />
      <Skeleton height={500} />
    </Stack>
  );
}
