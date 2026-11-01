/**
 * JADE & CO. inquiry collector.
 *
 * Setup:
 * 1. Create a Google Sheet.
 * 2. Open Extensions > Apps Script.
 * 3. Paste this file into Code.gs.
 * 4. Set SPREADSHEET_ID below to the ID in the Sheet URL.
 * 5. Deploy > New deployment > Web app.
 *    Execute as: Me
 *    Who has access: Anyone
 * 6. Copy the deployed /exec URL to GOOGLE_APPS_SCRIPT_URL.
 *
 * The script appends each accepted inquiry as a new row.
 * Keep this sheet dedicated to inquiries and restrict who can edit it.
 */

const SPREADSHEET_ID = "PASTE_YOUR_GOOGLE_SHEET_ID_HERE";
const SHEET_NAME = "Inquiries";
const SHARED_SECRET = ""; // Optional: set a long random secret and also configure it in the Next.js route.

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ success: false, error: "Missing request body." });
    }

    const data = JSON.parse(e.postData.contents);
    const name = clean(data.name);
    const email = clean(data.email);
    const phone = clean(data.phone);

    if (name.length < 2 || name.length > 100 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
        email.length > 254 ||
        !/^[+()0-9 .-]{7,25}$/.test(phone)) {
      return jsonResponse({ success: false, error: "Invalid inquiry details." });
    }

    // Mitigate spreadsheet formula injection if a field begins with a formula character.
    const safeName = safeCell(name);
    const safeEmail = safeCell(email);
    const safePhone = safeCell(phone);

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);

    try {
      const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
      let sheet = spreadsheet.getSheetByName(SHEET_NAME);

      if (!sheet) {
        sheet = spreadsheet.insertSheet(SHEET_NAME);
      }

      if (sheet.getLastRow() === 0) {
        sheet.appendRow(["Timestamp", "Name", "Email", "Phone Number"]);
        sheet.setFrozenRows(1);
      }

      sheet.appendRow([new Date(), safeName, safeEmail, safePhone]);
    } finally {
      lock.releaseLock();
    }

    return jsonResponse({ success: true });
  } catch (error) {
    console.error(error);
    return jsonResponse({ success: false, error: "Unable to save inquiry." });
  }
}

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

function safeCell(value) {
  return /^[=+\-@]/.test(value) ? "'" + value : value;
}

function jsonResponse(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
