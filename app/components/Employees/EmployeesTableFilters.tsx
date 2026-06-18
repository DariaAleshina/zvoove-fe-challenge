import { Button, Chip, PopUpMenu, Stack, TextField } from '@zvoove/unity-ui';
import type { PopUpMenuItem } from '@zvoove/unity-ui';
import type { ChangeEvent } from 'react';
import type { EmployeeFilters } from '../../mocked/types/employee';

type Props = {
  filters: EmployeeFilters;
  activeFilters: Record<keyof EmployeeFilters, string>;
  handleFilterClick: (filterKey: keyof EmployeeFilters, value: string) => void;
  search: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function EmployeesTableFilters({ filters, activeFilters, handleFilterClick, search, onSearchChange }: Props) {
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
            value={search}
            onChange={onSearchChange}
          />
        </div>
        {(Object.keys(filters) as (keyof EmployeeFilters)[]).map(filterKey => {
          const items: PopUpMenuItem[] = filters[filterKey].map(opt => ({
            id: opt.value,
            label: opt.label,
          }));
          return (
            <PopUpMenu
              key={filterKey}
              items={items}
              selectable="single"
              selectedItem={activeFilters[filterKey]}
              onItemClick={item => handleFilterClick(filterKey, item.id)}
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
