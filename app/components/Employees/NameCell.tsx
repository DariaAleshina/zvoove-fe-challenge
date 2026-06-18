import { Avatar, Stack } from '@zvoove/unity-ui';

export type NameCellProps = {
  nachname: string;
  image?: string | null;
};

export function NameCell({ nachname, image }: NameCellProps) {
  return (
    <Stack direction="row" align="center" gap="xs">
      <Avatar
        size="sm"
        type={image ? 'image' : 'avatar'}
        {...(image && { image })}
      />
      {nachname}
    </Stack>
  );
}
