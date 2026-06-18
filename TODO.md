# Pre-submission TODO

## Must fix

### 0. Announcement banner is hardcoded — make it dynamic
- `app/routes/home.tsx:52` has a TODO for this
- Currently: mock data has `announcementKey: 'dashboard.announcement'` → `t()` resolves to a fixed locale string
- Fix: change `DashboardData.announcementKey` → `announcement: string` in the type, store the actual message text in mock data, render directly as `message={dashboard.announcement}` (no `t()`)
- Files: `app/mocked/types/dashboard.ts`, `app/mocked/data/dashboard.ts`, `app/routes/home.tsx`

### 0b. Activity timestamps are hardcoded — make them dynamic
- Mock data stores `timeKey: 'dashboard.time.hoursAgo'` etc. → resolves to fixed strings ("2 hours ago", "yesterday")
- Fix: replace `timeKey: string` with `timestamp: string` (ISO date string) in `DashboardActivity` type, store real dates in mock data, compute relative label at render time (e.g. `formatDistanceToNow` from `date-fns`, or a simple custom util)
- Files: `app/mocked/types/dashboard.ts`, `app/mocked/data/dashboard.ts`, and whichever component renders activity items

### 1. `fetchEmployeeFilters()` not called in `useEmployees`
- Spec (Task 0) requires calling both `fetchEmployees()` AND `fetchEmployeeFilters()`
- Current impl derives filters via `uniqueOptions` instead — works, but doesn't match spec
- Fix: update `employeeFiltersData` beruf values to match actual `emp.beruf` strings
  ("stapler" → "Staplerfahrer/in", "elektriker" → "Elektriker/in", "lagerist" → "Lagerist/in")
  Then switch `useEmployees` to call `fetchEmployeeFilters()` instead of computing inline
- Files: `app/mocked/data/employees.ts` (fix values) + `app/mocked/hooks/useEmployees.ts` (call API)

### 2. Verify no console errors
- Run `pnpm dev` and open browser devtools
- Check for React warnings (missing keys, prop type mismatches, etc.)

## Nice to have (bonus points)

### 3. Empty state for filtered table
- When all filters produce 0 results, check if `Table` from unity-ui shows a built-in empty state
- If not, show a message above the table

### 4. Column labels — no t() keys available
- `en.json`/`de.json` have no keys for table columns ("Name", "Beruf", etc.) or table title ("Alle Mitarbeitenden")
- Locale files are frozen (can't add keys) → hardcoded strings are acceptable as-is

### 5. Status labels in StatusCell
- Hardcoded German ("Mitarbeiter", "Bewerber", etc.) — no translation keys exist for these
- Acceptable as-is given frozen locale files

## Already done ✅
- `pnpm typecheck` passes
- All Task 3 filter requirements implemented
- Task 1 dashboard fully implemented
- Task 2 table with all columns, status Tags, row PopUpMenu
- Loading skeletons on both pages
- Filter selection state with `selectable="single"` on PopUpMenu
