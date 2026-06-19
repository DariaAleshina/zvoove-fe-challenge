import { Button, PopUpMenu } from '@zvoove/unity-ui';
import { useTranslation } from 'react-i18next';

export function ActionsCell() {
  const { t } = useTranslation();

  const menuItems = [
    { id: 'edit',    label: t('employees.table.actions.edit'),        icon: 'edit' as const },
    { id: 'details', label: t('employees.table.actions.viewDetails'), icon: 'show' as const },
    { id: 'divider', label: '', isDivider: true },
    { id: 'delete',  label: t('employees.table.actions.delete'),      icon: 'delete' as const },
  ];

  return (
    <PopUpMenu items={menuItems} placement="bottom-right" density="-4">
      <Button
        variant="text"
        icon="more-vertical"
        size="md"
        aria-label={t('employees.table.columns.actions')}
      />
    </PopUpMenu>
  );
}
