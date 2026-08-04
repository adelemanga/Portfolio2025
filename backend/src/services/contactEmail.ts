import {
  getContactRecipientEmail,
  getMailFrom,
  getTransporter,
  smtpConfigurationError,
} from "./mailer";

type ContactEmailPayload = {
  name: string;
  lastname: string;
  email: string;
  message: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const normalizeValue = (value: string) => value.trim();

const buildFullName = ({ name, lastname }: Pick<ContactEmailPayload, "name" | "lastname">) =>
  [normalizeValue(name), normalizeValue(lastname)].filter(Boolean).join(" ");

export const sendPortfolioContactEmail = async ({
  name,
  lastname,
  email,
  message,
}: ContactEmailPayload) => {
  const transporter = getTransporter();
  const to = getContactRecipientEmail();
  const from = getMailFrom();

  if (!transporter || !to || !from) {
    throw new Error(smtpConfigurationError);
  }

  const fullName = buildFullName({ name, lastname }) || "Visiteur portfolio";
  const cleanEmail = normalizeValue(email);
  const cleanMessage = normalizeValue(message);
  const subject = `Nouveau message Portfolio2025 - ${fullName}`;
  const text = [
    "Nouveau message reçu depuis le formulaire Portfolio2025.",
    "",
    `Nom : ${normalizeValue(name)}`,
    `Prénom : ${normalizeValue(lastname)}`,
    `Email : ${cleanEmail}`,
    "",
    "Message :",
    cleanMessage,
  ].join("\n");

  await transporter.sendMail({
    from,
    to,
    replyTo: cleanEmail ? `${fullName} <${cleanEmail}>` : undefined,
    subject,
    text,
    html: `
      <div style="margin:0;padding:24px;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
        <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #dbeafe;border-radius:18px;overflow:hidden;box-shadow:0 18px 44px rgba(15,23,42,.08);">
          <div style="padding:22px 24px;background:linear-gradient(135deg,#075985,#0ea5e9);color:#ffffff;">
            <p style="margin:0 0 6px;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;">Portfolio 2025</p>
            <h1 style="margin:0;font-size:24px;line-height:1.25;">Nouveau message de contact</h1>
          </div>
          <div style="padding:24px;">
            <p style="margin:0 0 18px;color:#475569;line-height:1.55;">
              Un visiteur vient d'envoyer un message depuis le formulaire du portfolio.
              Tu peux répondre directement à cet e-mail.
            </p>
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin:0 0 20px;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:13px;font-weight:700;text-transform:uppercase;">Nom</td>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#0f172a;font-weight:700;text-align:right;">${escapeHtml(normalizeValue(name))}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:13px;font-weight:700;text-transform:uppercase;">Prénom</td>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#0f172a;font-weight:700;text-align:right;">${escapeHtml(normalizeValue(lastname))}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:13px;font-weight:700;text-transform:uppercase;">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#0f172a;font-weight:700;text-align:right;">
                  <a href="mailto:${escapeHtml(cleanEmail)}" style="color:#075985;text-decoration:none;">${escapeHtml(cleanEmail)}</a>
                </td>
              </tr>
            </table>
            <div style="padding:18px 20px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;">
              <p style="margin:0 0 8px;color:#64748b;font-size:13px;font-weight:700;text-transform:uppercase;">Message</p>
              <p style="margin:0;color:#0f172a;line-height:1.65;white-space:pre-line;">${escapeHtml(cleanMessage)}</p>
            </div>
          </div>
        </div>
      </div>
    `,
  });
};
