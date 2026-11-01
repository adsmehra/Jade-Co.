# JADE & CO. — Next.js landing page + Google Sheets inquiries

This version keeps the hero and adds an **Inquire for Projects** form with Name, Email, and Phone Number. The additional “What we believe”, “What we do”, and “Have a good one in mind” sections have been removed.

## Requirements

- Node.js 20.9+
- A Google account
- A Google Sheet for inquiry submissions

## 1. Set up Google Sheets

1. Create a new Google Sheet, for example **JADE & CO. Inquiries**.
2. Copy the spreadsheet ID from its URL:
   `https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/edit`
3. Open **Extensions → Apps Script**.
4. Replace the contents of `Code.gs` with `google-apps-script/Code.gs`.
5. Replace `PASTE_YOUR_GOOGLE_SHEET_ID_HERE` with your spreadsheet ID.
6. Save the script.
7. Click **Deploy → New deployment**.
8. Select **Web app**.
9. Set **Execute as** to **Me**.
10. Set **Who has access** to **Anyone**, then deploy and authorize it.
11. Copy the Web app URL ending in `/exec`.

The Apps Script will create an `Inquiries` tab and header row on first submission. Each successful submission adds a new row containing timestamp, name, email, and phone number. A script lock helps prevent simultaneous submissions from interfering with each other.

**Access note:** “Anyone” makes the endpoint reachable publicly. The script validates fields but is not a full anti-spam system. Before a high-traffic public launch, add CAPTCHA/rate limiting and consider an authenticated backend or a shared-secret verification approach. Never put private Google credentials in frontend code.

## 2. Configure Next.js

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Set the URL you copied:

```env
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Do not prefix this variable with `NEXT_PUBLIC_`; it is used server-side.

## 3. Install and run

```bash
npm install
npm run dev
```

Visit http://localhost:3000, submit a test inquiry, and check the `Inquiries` tab in your Google Sheet.

## 4. Deploy

Deploy the Next.js app to a Node-compatible host such as Vercel. Add `GOOGLE_APPS_SCRIPT_URL` in the host's environment-variable settings, then redeploy. The Google Apps Script web app remains the row-append service.

## Files

- `app/page.tsx` — hero and inquiry section only
- `app/InquiryForm.tsx` — responsive form and success/error feedback
- `app/api/inquiries/route.ts` — server-side validation and forwarding
- `app/globals.css` — responsive cream/sage design and CSS 3D sphere
- `google-apps-script/Code.gs` — Google Sheets row append handler
- `.env.example` — environment variable template
