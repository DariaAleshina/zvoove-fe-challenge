import { Button, PopUpMenu, Stack } from '@zvoove/unity-ui';
import { useTranslation } from 'react-i18next';

export function EmployeeTableActions() {
  const { t } = useTranslation();

  const menuItems = [
    { id: 'export',   label: t('employees.table.actions.export'),   icon: 'download' as const },
    { id: 'import',   label: t('employees.table.actions.import'),   icon: 'upload' as const },
    { id: 'settings', label: t('employees.table.actions.settings'), icon: 'settings' as const },
  ];

  return (
    <Stack direction="row">
      <Button variant="text" icon="columns" size="md" aria-label="Columns" />
      <PopUpMenu items={menuItems} placement="bottom-right" density="-4">
        <Button variant="text" icon="more-vertical" size="md" aria-label={t('employees.table.columns.actions')} />
      </PopUpMenu>
    </Stack>
  );
}
