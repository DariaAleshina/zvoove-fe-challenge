import { Tag } from '@zvoove/unity-ui';
import type { CommonIconNames } from '@zvoove/unity-ui';
import type { EmployeeStatus } from '~/mocked/types/employee';

type StatusConfig = {
  label: string;
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
  mitarbeiter: { label: 'Mitarbeiter', color: 'steel-blue' },
  bewerber: { label: 'Bewerber', color: 'yellow' },
  zukuenftig: {
    label: 'zuk. Mitarbeiter',
    color: 'green',
    icon: 'clock-countdown',
  },
  'bewerber-cockpit': {
    label: 'Bewerber (aus Cockpit)',
    color: 'yellow',
    icon: 'arrow-left-right',
  },
  ehemalig: { label: 'ehem. Mitarbeiter', color: 'neutral' },
};

export function StatusCell({ status }: { status: EmployeeStatus }) {
  const { label, color, icon } = STATUS_CONFIG[status];
  return <Tag label={label} color={color} icon={icon} />;
}
