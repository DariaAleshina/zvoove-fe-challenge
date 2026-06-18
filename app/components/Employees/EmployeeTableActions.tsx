import { Button, PopUpMenu, Stack } from '@zvoove/unity-ui';
import type { PopUpMenuItem } from '@zvoove/unity-ui';

const MENU_ITEMS: PopUpMenuItem[] = [
  { id: 'export',   label: 'Exportieren',   icon: 'download' },
  { id: 'import',   label: 'Importieren',   icon: 'upload' },
  { id: 'settings', label: 'Einstellungen', icon: 'settings' },
];

export function EmployeeTableActions() {
  return (
    <Stack direction="row">
      <Button variant="text" icon="columns" size="md" aria-label="Columns" />
      <PopUpMenu items={MENU_ITEMS} placement="bottom-right" density="-4">
        <Button variant="text" icon="more-vertical" size="md" aria-label="Aktionen" />
      </PopUpMenu>
    </Stack>
  );
}
