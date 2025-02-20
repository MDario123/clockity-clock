# Clockity-Clock

## TODO

- [x] good code standards, with eslint, prettier, and typechecking
- [x] good code organization, with modlets
- [ ] all modlets have smoke tests
- [x] at least one modlet with comprehensive unit or integration tests
- [ ] creates a Design System using a 3rd party component library
- [x] uses a future-proofed Context
- [ ] data fetching with TanStack Query and Suspense

## Features

- [ ] Clock
  - [x] Display the current time as text
  - [ ] Display the current time as an analog clock
- [ ] Offset context
  - [x] Base context
  - [x] Timezone offset controller:
    - [x] Select to change the timezone
    - [x] Get options for selecting the timezone from "https://www.timeapi.io/api/timezone/availabletimezones"
    - [x] Time for the clock is sinchronized with "https://www.timeapi.io/api/time/current/zone?timeZone=XXXXXXX"
  - [x] Manual offset controller:
    - [ ] Display with the current offset
    - [x] Buttons to increase or decrease the time offset
- [x] Use Material UI
