# EasyBank Prototype

A simple banking application prototype for WGU D779 Task 2. Demonstrates account transfers, bill payments, payee management, FAQs, and customer support interactions using HTML, CSS, and vanilla JavaScript.

## Features
- Transfers: Validate inputs, confirm modal, success flow, and form reset.
- Bill Pay: One-time/recurring payments with frequency control, confirmation modal, and alerts.
- Payees: Add payee modal with success message and form reset.
- Support: Simulated chat with quick replies, timestamps, and email support form.
- UX: Min date enforcement for forms, FAQ toggles, modal click-outside handling.

## Tech Stack
- HTML, CSS, JavaScript (no frameworks)
- Client-side only; no real backend or data persistence

## Getting Started
1. Clone the repo:
   ```bash
   git clone https://github.com/rggasc/easybank-prototype.git
   cd easybank-prototype
   ```
2. Open `index.html` in a browser, or serve locally:
   ```bash
   python -m http.server 8000
   # then visit http://localhost:8000
   ```

## Usage Notes
- Forms are demo-only; amounts are formatted as currency, dates localized.
- Modals: Confirm actions via `.classList.add('show')`/`.remove('show')`.
- Chat: Randomized bot responses; press Enter to send.
- Security: Do not use for real banking. No authentication or encryption.

## Screens
- Accounts & Transfers
- Bill Payments (one-time/recurring)
- Payee Management
- FAQs and Support (Chat/Email)

## Task Requirements (WGU D779)
- Public repository for GitHub Pages deployment.
- Clear documentation of features and constraints.
- Prototype demonstrates user flows end-to-end.

## Known Limitations
- No backend/API integration
- No data persistence or validation beyond basic checks
- Accessibility is partial; ARIA and keyboard traps may need improvement

## Roadmap
- Integrate a mock API
- Persist data (LocalStorage)
- Expand validation and accessibility
- Add unit tests

## License
MIT
