import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_CONTACT } from "../graphql/mutations";
import { useTranslation } from "@/i18n/useTranslation";

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const [addContact, { loading, error }] = useMutation(ADD_CONTACT);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addContact({ variables: formData });
      setSuccessMessage(t.contact.success);
      setFormData({ name: "", lastname: "", email: "", message: "" });
    } catch (err) {
      console.error("Contact form submission failed:", err);
    }
  };

  return (
    <div className="contact contact-with-floating-image">
      <video
        className="video-background"
        src="https://i.imgur.com/Q83KGpc.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        aria-label={t.contact.videoLabel}
      />
      <h2>{t.contact.heading}</h2>

      <div className="contact-layout">
        <div className="contact-main-column">
          <section
            className="portfolio-contact-details"
            aria-labelledby="portfolio-contact-details-title"
          >
            <h3 id="portfolio-contact-details-title">{t.contact.detailsTitle}</h3>
            <div className="portfolio-contact-links">
              <a href="https://adelewebstudio.com" target="_blank" rel="noopener noreferrer">
                <span>{t.contact.websiteLabel}</span>
                <strong>adelewebstudio.com</strong>
              </a>
              <a href="mailto:contact@adelewebstudio.com">
                <span>{t.contact.emailLabel}</span>
                <strong>contact@adelewebstudio.com</strong>
              </a>
              <a href="tel:+33783697464">
                <span>{t.contact.phoneLabel}</span>
                <strong>07 83 69 74 64</strong>
              </a>
            </div>
          </section>

          <form className="contact contact-form-card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t.contact.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastname">{t.contact.lastname}</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t.contact.email}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t.contact.message}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" disabled={loading}>
              {loading ? t.contact.loading : t.contact.submit}
            </button>

            {successMessage && <p className="success-message">{successMessage}</p>}
          </form>

          {error && (
            <p className="error-message">
              {t.contact.error}
            </p>
          )}
        </div>

        <div className="image-container1 form-floating-image contact-image-panel">
          <img
            src="https://adelemanga-portfolio.netlify.app/static/media/girlme.0acab6167e7db055cb7a.png"
            alt={t.contact.decorativeAlt}
            className="clone-1 contact-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
