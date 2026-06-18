import { Button, Chip, PopUpMenu, Stack, TextField } from '@zvoove/unity-ui';
import type { PopUpMenuItem } from '@zvoove/unity-ui';

const PLACEHOLDER_ITEMS: PopUpMenuItem[] = [
  { id: 'placeholder', label: '...' },
];

const FILTER_CHIPS = [
  { id: 'beruf', label: 'Beruf' },
  { id: 'plz', label: 'Postleitzahl' },
  { id: 'eintritt', label: 'Eintrittsdatum' },
  { id: 'ueberlassen', label: 'Überlassen bis' },
  { id: 'status', label: 'Status' },
];

export function EmployeesTableFilters() {
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
        {FILTER_CHIPS.map(chip => (
          <PopUpMenu
            key={chip.id}
            items={PLACEHOLDER_ITEMS}
            placement="bottom-left"
          >
            <Chip label={chip.label} type="filter" showDropdownIcon={true} />
          </PopUpMenu>
        ))}
      </Stack>
      <Button variant="filled" size="md">
        Mitarbeiter anlegen
      </Button>
    </Stack>
  );
}
