import { Button, Chip, PopUpMenu, Stack, TextField } from '@zvoove/unity-ui';
import type { PopUpMenuItem } from '@zvoove/unity-ui';
import type { EmployeeFilters } from '../../mocked/types/employee';

type Props = {
  filters: EmployeeFilters;
  handleFilterClick: (filterKey: keyof EmployeeFilters, value: string) => void;
};

export function EmployeesTableFilters({ filters, handleFilterClick }: Props) {
  const FILTER_CHIP_LABELS: Record<keyof EmployeeFilters, string> = {
    beruf: 'Beruf',
    plz: 'Postleitzahl',
    eintritt: 'Eintrittsdatum',
    ueberlassen: 'Überlassen bis',
    status: 'Status',
  };

  return (
    <Stack
      direction={{ minimum: 'column', desktop: 'row' }}
      align={{ minimum: 'flex-start', desktop: 'center' }}
      justify="space-between"
      gap="sm"
    >
      <Stack
        direction="row"
        align="center"
        justify="flex-start"
        gap="sm"
        wrap="wrap"
      >
        <div className="m-w-1/5">
          <TextField
            label="Search"
            hideLabel={true}
            placeholder="Search"
            icon="search"
            iconPosition="left"
            density="-4"
          />
        </div>
        {(Object.keys(filters) as (keyof EmployeeFilters)[]).map(filterKey => {
          const items: PopUpMenuItem[] = filters[filterKey].map(opt => ({
            id: opt.value,
            label: opt.label,
            onClick: () => handleFilterClick(filterKey, opt.value),
          }));
          return (
            <PopUpMenu
              key={filterKey}
              items={items}
              placement="bottom-left"
              density="-4"
            >
              <Chip
                label={FILTER_CHIP_LABELS[filterKey as keyof EmployeeFilters]}
                type="filter"
                showDropdownIcon={true}
              />
            </PopUpMenu>
          );
        })}
      </Stack>
      <Button variant="filled" size="md">
        Mitarbeiter anlegen
      </Button>
    </Stack>
  );
}
