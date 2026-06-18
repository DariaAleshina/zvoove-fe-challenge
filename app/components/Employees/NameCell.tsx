import { Avatar, Stack } from '@zvoove/unity-ui';

export type NameCellProps = {
  nachname: string;
  avatarType: 'image' | 'avatar';
  image?: string | null;
};

export function NameCell({ nachname, avatarType, image }: NameCellProps) {
  return (
    <Stack direction="row" align="center" gap="xs">
      <Avatar size="sm" type={avatarType} {...(image && { image })} />
      {nachname}
    </Stack>
  );
}
