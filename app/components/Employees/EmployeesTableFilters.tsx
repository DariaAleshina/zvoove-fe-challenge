import { Button, Chip, PopUpMenu, Stack, TextField } from '@zvoove/unity-ui';
import type { PopUpMenuItem } from '@zvoove/unity-ui';
import type { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import type { EmployeeFilters } from '../../mocked/types/employee';

type Props = {
  filters: EmployeeFilters;
  activeFilters: Record<keyof EmployeeFilters, string>;
  handleFilterClick: (filterKey: keyof EmployeeFilters, value: string) => void;
  search: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function EmployeesTableFilters({
  filters,
  activeFilters,
  handleFilterClick,
  search,
  onSearchChange,
}: Props) {
  const { t } = useTranslation();

  const FILTER_CHIP_LABELS: Record<keyof EmployeeFilters, string> = {
    beruf: t('employees.table.filters.beruf'),
    plz: t('employees.table.filters.plz'),
    eintritt: t('employees.table.filters.eintritt'),
    ueberlassen: t('employees.table.filters.ueberlassen'),
    status: t('employees.table.filters.status'),
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
        <div>
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
            label: t(opt.label),
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
                variant={activeFilters[filterKey] ? 'secondary' : 'primary'}
                showDropdownIcon={true}
              />
            </PopUpMenu>
          );
        })}
      </Stack>
      <Button variant="filled" size="md">
        {t('employees.table.actions.createEmployee')}
      </Button>
    </Stack>
  );
}
