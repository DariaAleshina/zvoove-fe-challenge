import { Button, PopUpMenu, type PopUpMenuItem } from '@zvoove/unity-ui';

const MENU_ITEMS: PopUpMenuItem[] = [
  { id: 'edit', label: 'Bearbeiten', icon: 'edit' },
  { id: 'details', label: 'Details anzeigen', icon: 'show' },
  { id: 'divider', label: '', isDivider: true },
  { id: 'delete', label: 'Löschen', icon: 'delete' },
];

export function ActionsCell() {
  return (
    <PopUpMenu items={MENU_ITEMS} placement="bottom-right" density="-4">
      <Button
        variant="text"
        icon="more-vertical"
        size="md"
        aria-label="Aktionen"
      />
    </PopUpMenu>
  );
}
