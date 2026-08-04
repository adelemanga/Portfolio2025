import nodemailer from "nodemailer";

const getSmtpPort = () => {
  const value = Number(process.env.SMTP_PORT || 587);
  return Number.isFinite(value) ? value : 587;
};

const getSmtpSecure = () => {
  const explicitValue = process.env.SMTP_SECURE?.trim().toLowerCase();

  if (explicitValue === "true") return true;
  if (explicitValue === "false") return false;

  return getSmtpPort() === 465;
};

export const getMailFrom = () => {
  const from = process.env.SMTP_FROM || process.env.SMTP_USER || "";

  if (!from) return "";
  if (from.includes("<")) return from;

  return `Portfolio Adèle Manga <${from}>`;
};

export const getContactRecipientEmail = () =>
  process.env.CONTACT_RECIPIENT_EMAIL ||
  process.env.ADMIN_ORDER_EMAIL ||
  process.env.SMTP_FROM ||
  process.env.SMTP_USER ||
  "";

export const getTransporter = () => {
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;

  if (!smtpUser || !smtpPassword) {
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "pro2.mail.ovh.net",
    port: getSmtpPort(),
    secure: getSmtpSecure(),
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });
};

export const smtpConfigurationError =
  "Email non envoyé : configurez SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_FROM et CONTACT_RECIPIENT_EMAIL.";
