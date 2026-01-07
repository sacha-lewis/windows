/**********************************************************
 * Firefox Power User Configuration
 * Source-controlled via GitHub
 * Focus: external password manager (Bitwarden)
 **********************************************************/

/* ===============================
   PASSWORDS & FORMS
   =============================== */

// Disable Firefox password manager
user_pref("signon.rememberSignons", false);
user_pref("signon.autofillForms", false);
user_pref("signon.autofillForms.http", false);

// Disable password generation
user_pref("signon.generation.enabled", false);

// Disable form & search history
user_pref("browser.formfill.enable", false);

// Reduce password UI noise
user_pref("signon.management.page.breach-alerts.enabled", false);

/* ===============================
   PRIVACY / SIGNAL REDUCTION
   =============================== */

// Disable telemetry
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.server", "");

// Disable studies & experiments
user_pref("app.shield.optoutstudies.enabled", false);

// Disable Pocket
user_pref("extensions.pocket.enabled", false);

/* ===============================
   UX SANITY
   =============================== */

// Disable first-run and onboarding
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");

// Disable autofill address & credit cards
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);

// Always use HTTPS when possible
user_pref("dom.security.https_only_mode", true);
