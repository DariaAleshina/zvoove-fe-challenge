import { Tag } from '@zvoove/unity-ui';
import type { CommonIconNames } from '@zvoove/unity-ui';
import { useTranslation } from 'react-i18next';
import type { EmployeeStatus } from '~/mocked/types/employee';

type StatusConfig = {
  color:
    | 'green'
    | 'yellow'
    | 'pink'
    | 'steel-blue'
    | 'error'
    | 'primary'
    | 'neutral';
  icon?: CommonIconNames;
};

const STATUS_CONFIG: Record<EmployeeStatus, StatusConfig> = {
  mitarbeiter:      { color: 'steel-blue' },
  bewerber:         { color: 'yellow' },
  zukuenftig:       { color: 'green', icon: 'clock-countdown' },
  'bewerber-cockpit': { color: 'yellow', icon: 'arrow-left-right' },
  ehemalig:         { color: 'neutral' },
};

export function StatusCell({ status }: { status: EmployeeStatus }) {
  const { t } = useTranslation();
  const { color, icon } = STATUS_CONFIG[status];
  return <Tag label={t(`employees.table.status.${status}`)} color={color} icon={icon} />;
}
