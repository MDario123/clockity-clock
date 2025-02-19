# Clockity-Clock

## TODO

- [ ] good code standards, with eslint, prettier, and typechecking
- [ ] good code organization, with modlets
- [ ] all modlets have smoke tests
- [ ] at least one modlet with comprehensive unit or integration tests
- [ ] creates a Design System using a 3rd party component library
- [ ] uses a future-proofed Context
- [ ] data fetching with TanStack Query and Suspense

## Features

- [ ] Clock
  - [ ] Display the current time as text
  - [ ] Display the current time as an analog clock
- [ ] Offset context
  - [ ] Timezone offset controller:
    - [ ] Select to change the timezone
    - [ ] Get options for selecting the timezone from "https://www.timeapi.io/api/timezone/availabletimezones"
    - [ ] Time for the clock is sinchronized with "https://www.timeapi.io/api/time/current/zone?timeZone=XXXXXXX"
  - [ ] Manual offset controller:
    - [ ] Display with the current offset
    - [ ] Buttons to increase or decrease the time offset
    - [ ] Buttons to increase or decrease how much the other buttons increase or decrease the time offset
- [ ] Use Material UI
